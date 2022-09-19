import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";

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

                <Button onClick={onProjects}>
                <i style={{ paddingRight: "10px" }}
                className="fa fa-folder"
                aria-hidden="true"></i>
                Projects
                </Button>

                <div className='space'></div>

                <Button onClick={onSync}>
                <i style={{ paddingRight: "10px" }}
                className="fa fa-superpowers"
                aria-hidden="true"></i>
                Sync
                </Button>

                <div className='space'></div>
                <Button onClick={onCANBusVisualizer}>
                <i style={{ paddingRight: "10px" }}
                className="fa fa-car"
                aria-hidden="true"></i>
                CAN Bus Visualizer
                </Button>
            </div>
        </div>
    )
}

export default NewProject