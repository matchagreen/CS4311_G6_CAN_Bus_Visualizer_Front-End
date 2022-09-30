import {useParams} from 'react-router-dom'
import PacketContainer from './packetContainer'
import NodeMap from './nodeMap'
import './index.css'

function Visualizer() {
    const params = useParams()
    
    return (
        <div className='visualizer'>
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