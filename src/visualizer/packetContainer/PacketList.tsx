import { useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"
import { Table } from "react-bootstrap"
import APIUtil from "../../utilities/APIutils"

function PacketList() {
    const api = new APIUtil()

    let [page, setPage] = useState(0)
    let [data, setData]: Array<any> = useState([])
    let [hasMore, setHasMore] = useState(true)
    const fetchData = () => {
        const newData = api.getPackets(page)
        const newPackets = newData.map((packet) => {
            return (
                <tr>
                    <td>{packet.timestamp}</td>
                    <td>{packet.id}</td>
                    <td>{packet.type}</td>
                    <td>{packet.data}</td>
                </tr>
            )
        })

        if (newData.length > 0) {
            setData(data.concat(newPackets))
            setPage(page + 1)
        } else {
            setHasMore(false)
        }
 
    }

    return (
        <div className='packet-table rounded'>
            <InfiniteScroll
                dataLength={data.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
                endMessage={<p>No more data to show</p>}
            >
                <Table variant='dark' hover size='sm'>
                    <thead>
                        <tr>
                            <th className='packet-time'>Time</th>
                            <th className='packet-id'>Id</th>
                            <th className='packet-type'>Type</th>
                            <th className='packet-data'>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data}
                    </tbody>
                </Table>
            </InfiniteScroll>
        </div>
    )
}

export default PacketList