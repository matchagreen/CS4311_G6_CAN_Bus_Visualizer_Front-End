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
        <div className='packet-table rounded'>
            <InfiniteScroll
                dataLength={data.length}
                next={fetchData}
                hasMore={hasMore}
                loader={<p>Loading...</p>}
                endMessage={<p>End</p>}
            >
                <Table variant='dark' hover size='sm'>
                    <thead>
                        <tr>
                            <th>Time</th>
                            <th>Id</th>
                            <th>Type</th>
                            <th>Data</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                        <tr>
                            <td>11T082554602</td>
                            <td>1</td>
                            <td>cf00203</td>
                            <td>cd402800043828ff</td>
                        </tr>
                    </tbody>
                    {data}
                </Table>
            </InfiniteScroll>
        </div>
    )
}

export default PacketList