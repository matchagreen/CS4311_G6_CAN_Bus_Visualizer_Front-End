import React from 'react';
import './index.css';
import dinoGif from '../type/dino.gif';
import {useNavigate} from "react-router-dom";

const PageNotFound= () =>{
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
        <div className='errors'>
            <h1 className='oops'>Oops!</h1>
            <h1 className='not-found'>Page Not Found</h1>
            <div className='space'></div>
            <p className='error-reason'> We can't seem to find the page you're looking for.</p>
            <div className='space'></div>
            <p className='error404'>Error code: 404</p>
            <p className='links'> Here are some helpfull links instead:</p>
            
            <a className='link' onClick={onProjects}>Projects</a>
            <br />
            <a className='link' onClick={onSync}>Sync</a>
            <br />
            <a className='link' onClick={onCANBusVisualizer}>CAN Bus Visualizer</a>
            <br />
            <div className='space'></div>
            <img src={dinoGif} alt="dino-gif" />
            
           
            
            
        </div>


    )
}
  
export default PageNotFound;