import {useParams} from 'react-router-dom'
import { useState } from 'react'
import PacketContainer from './packetContainer'
import NodeMap from './nodeMap'
import { PacketSortOptions as PacketSort, PACKET_PAGE_SIZE} from '../common/Constants'
import PacketViewSettingsModal from './PacketViewSettingsModal'
import PacketViewSettingsState from './PacketViewSettingsState'
import Menubar from '../components/Menubar';
import APIUtil from '../utilities/APIutils'
import PacketState from './packetContainer/PacketState'
import './index.css'

function Visualizer() {
    const projectId = useParams().projectId!

    const api = new APIUtil()

    // Modal for changing packet view settings
    let [isShownPacketsModal, setIsShownPacketsModal] = useState(false)
    let [packetViewSettings, setPacketViewSettings] = useState<PacketViewSettingsState>({
        size: PACKET_PAGE_SIZE,
        before: undefined,
        after: undefined,
        node: undefined,
        sort: PacketSort.TIME_DESC
    })

    // Packet retrieval and infinite list
    let [packetList, setPacketList]: Array<any> = useState([])
    let [hasMorePackets, setHasMorePackets] = useState(true)
    const renderPackets = packetList.map((packet: PacketState) => {
        return (
            <tr key={packet._id}>
                <td>{packet.timestamp.toUpperCase()}</td>
                <td>{packet.nodeId.toUpperCase()}</td>
                <td>{packet.type.toUpperCase()}</td>
                <td>{packet.data.toUpperCase()}</td>
            </tr>
        )
    })
    const fetchPackets = () => {
        const lastPacket: PacketState | undefined = packetList.length > 0 ? packetList[packetList.length - 1] : null
        const viewSettings: PacketViewSettingsState = {
            size: packetViewSettings.size,
            before: packetViewSettings.before,
            after: lastPacket ? lastPacket.timestamp : undefined,
            node: packetViewSettings.node,
            sort: packetViewSettings.sort
        }
        api.getPackets(
            viewSettings,
            projectId,
            (response: any) => { // On success
                const newPackets = response.data
                if (newPackets.length > 0) {
                    // Append to list
                    setPacketList(packetList.concat(newPackets))
                } else {
                    setHasMorePackets(false)
                }
            },
            (error: any) => { // On failure
                console.log(error)
                return
            }
        )
    }
    const refreshPackets = () => {
        api.getPackets(
            packetViewSettings,
            projectId,
            (response: any) => { // On success
                const newPackets = response.data
                if (newPackets.length > 0) {
                    // Append to list
                    setPacketList(newPackets)
                } else {
                    setHasMorePackets(false)
                }
            },
            (error: any) => { // On failure
                console.log(error)
                return
            }
        )
    }
    const onPlay = (play: boolean) => {
        api.gatherTraffic(play, projectId)
    }

    
    // Other stuff
    
    return (
        <div className='visualizer'>
            <PacketViewSettingsModal
                show={isShownPacketsModal}
                setShow={setIsShownPacketsModal}
                packetViewSettings={packetViewSettings}
                setPacketViewSettings={setPacketViewSettings}
            />
            <h1 className='visualizer-title'>{projectId}</h1>
            <Menubar/>
            <div className='visualizer-content'>
                <div className='packet-container-content'>
                    <PacketContainer
                    fetchData={fetchPackets}
                    hasMore={hasMorePackets}
                    packetList={renderPackets}
                    refresh={refreshPackets}
                    onPlay={onPlay}
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