import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import APIUtil from "../../utilities/APIutils"

function PacketList() {
    const api = new APIUtil()

    let [page, setPage] = useState(0)
    let [data, setData]: Array<any> = useState([])
    let [hasMore, setHasMore] = useState(true)
    const fetchData = () => {
        const newData = api.getPackets(page)
        const newPackets = newData.map((val) => {
            return <li key={val}>{val}</li>
        })

        if (newData.length > 0) {
            setData(data.concat(newPackets))
            setPage(page + 1)
        } else {
            setHasMore(false)
        }
 
    }

    return (
        <InfiniteScroll
        dataLength={data.length}
        next={fetchData}
        hasMore={hasMore}
        loader={<p>Loading...</p>}
        endMessage={<p>End</p>}
        >
            <table>
                {data}
            </table>
        </InfiniteScroll>
    )
}

export default PacketList