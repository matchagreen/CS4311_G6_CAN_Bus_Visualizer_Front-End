import {useParams} from 'react-router-dom'
import { useState } from 'react'
import PacketContainer from './packetContainer'
import PacketViewSettingsModal from './PacketViewSettingsModal'
import './index.css'

function Visualizer() {
    const params = useParams()

    // Modal for changing packet view settings
    let [isShownPacketsModal, setIsShownPacketsModal] = useState(true)

    const cancelPacketModalSettings = () => {
        setIsShownPacketsModal(false)
    }

    const applyPacketModalSettings = (e: any) => {
        e.preventDefault()
        setIsShownPacketsModal(false)
    }

    // Other stuff
    
    return (
        <div className='visualizer'>
            <PacketViewSettingsModal
                show={isShownPacketsModal}
                onHide={cancelPacketModalSettings}
                onSubmit={applyPacketModalSettings}
            />
            <h1 className='visualizer-title'>{params.projectId}</h1>
            <PacketContainer></PacketContainer>
        </div>
    )
}

export default Visualizer