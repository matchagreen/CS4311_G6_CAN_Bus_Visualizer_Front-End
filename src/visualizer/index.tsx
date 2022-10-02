import {useParams} from 'react-router-dom'
import { useState } from 'react'
import PacketContainer from './packetContainer'
import NodeMap from './nodeMap'
import { PacketSortOptions as PacketSort, PACKET_PAGE_SIZE} from '../common/Constants'
import PacketViewSettingsModal from './PacketViewSettingsModal'
import PacketViewSettingsState from './PacketViewSettingsState'
import APIUtil from '../utilities/APIutils'
import PacketState from './packetContainer/PacketState'
import './index.css'

function Visualizer() {
    const params = useParams()

    const api = new APIUtil()

    // Packet retrieval and infinite list
    let [page, setPage] = useState(0)
    let [packetList, setPacketList]: Array<any> = useState([])
    let [hasMorePackets, setHasMorePackets] = useState(true)
    const parsePackets = (packets: PacketState[]) => packets.map((packet) => {
        return (
            <tr>
                <td>{packet.timestamp}</td>
                <td>{packet.id}</td>
                <td>{packet.type}</td>
                <td>{packet.data}</td>
            </tr>
        )
    })
    const fetchPackets = () => {
        const newData = api.getPackets(page)
        const newPackets = parsePackets(newData)

        if (newData.length > 0) {
            setPacketList(packetList.concat(newPackets))
            setPage(page + 1)
        } else {
            setHasMorePackets(false)
        }
    }
    const refreshPackets = () => {
        setPage(0)
        const newData = api.getPackets(page)
        const newPackets = parsePackets(newData)
        setPacketList(newPackets)

        if (newData.length > 0) {
            setPage(page + 1)
        }
        else {
            setHasMorePackets(false)
        }
    }

    // Modal for changing packet view settings
    let [isShownPacketsModal, setIsShownPacketsModal] = useState(true)
    let [packetViewSettings, setPacketViewSettings] = useState<PacketViewSettingsState>({
        size: PACKET_PAGE_SIZE,
        before: undefined,
        after: undefined,
        node: undefined,
        sort: PacketSort.TIME_DESC
    })

    // Other stuff
    
    return (
        <div className='visualizer'>
            <PacketViewSettingsModal
                show={isShownPacketsModal}
                setShow={setIsShownPacketsModal}
                packetViewSettings={packetViewSettings}
                setPacketViewSettings={setPacketViewSettings}
            />
            <h1 className='visualizer-title'>{params.projectId}</h1>
            <div className='visualizer-content'>
                <div className='packet-container-content'>
                    <PacketContainer
                    fetchData={fetchPackets}
                    hasMore={hasMorePackets}
                    packetList={packetList}
                    refresh={refreshPackets}
                    />
                </div>
                <div className='node-map-container-content'>
                    <NodeMap></NodeMap>
                </div>
            </div>
        </div>
    )
}

export default Visualizer