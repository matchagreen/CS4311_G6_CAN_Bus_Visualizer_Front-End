import {useParams} from 'react-router-dom'

function Visualizer() {
    const params = useParams()
    
    return <h1>{params.projectId}</h1>
}

export default Visualizer