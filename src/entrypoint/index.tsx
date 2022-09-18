import Button from 'react-bootstrap/Button';

import {useNavigate} from "react-router-dom";
import './index.css';

function NewProject() {
    

    let navigate = useNavigate();

    const onProjects = ()=> {
        const  path = './projects'
        navigate(path)
    }

    const onSync = ()=> {
        const  path = './sync'
        navigate(path)
    }

    const onCANBusVisualizer = ()=> {
        const  path = './CANBusVisualizer'
        navigate(path)
    }

    return (
        <div className='task'>
            <h1 className='task-title'>CAN Bus Visualizer</h1>
            
            <div className='task-buttons'>
                <Button onClick={onProjects}>Projects</Button>
                <div className='space'></div>
                <Button onClick={onSync}>Sync</Button>
                <div className='space'></div>
                <Button onClick={onCANBusVisualizer}>CAN Bus Visualizer</Button>
            </div>
        </div>
    )
}

export default NewProject