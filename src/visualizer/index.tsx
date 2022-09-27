import {useParams} from 'react-router-dom'
import PacketContainer from './packetContainer'

function Visualizer() {
    const params = useParams()
    
    return (
        <div>
            <h1>{params.projectId}</h1>
            <PacketContainer></PacketContainer>
        </div>
    )
}

export default Visualizer