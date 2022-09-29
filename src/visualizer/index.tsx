import {useParams} from 'react-router-dom'
import PacketContainer from './packetContainer'
import './index.css'

function Visualizer() {
    const params = useParams()
    
    return (
        <div className='visualizer'>
            <h1 className='visualizer-title'>{params.projectId}</h1>
            <PacketContainer></PacketContainer>
        </div>
    )
}

export default Visualizer