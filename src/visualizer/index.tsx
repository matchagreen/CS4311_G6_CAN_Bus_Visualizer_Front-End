import {useParams} from 'react-router-dom'
import { useState } from 'react'
import PacketContainer from './packetContainer'
import NodeMap from './nodeMap'
import { PacketSortOptions as PacketSort, PACKET_PAGE_SIZE} from '../common/Constants'
import PacketViewSettingsModal from './modals/PacketViewSettingsModal'
import PacketViewSettingsState from './modals/PacketViewSettingsState'
import EditPacketModal from './modals/EditPacketModal'
import './modals/index.css';
import './index.css'

function Visualizer() {
    const params = useParams()

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
                    <PacketContainer></PacketContainer>
                </div>
                <div className='node-map-container-content'>
                    <NodeMap></NodeMap>
                </div>
            </div>
        </div>
    )
}

export default Visualizer