import {useParams} from 'react-router-dom'
import Navbar from "../projecttemplate/components/Navbar";
import '../projecttemplate/index.css';
import React from 'react';
import PacketContainer from './packetContainer'
import './index.css'

function Visualizer() {
    const params = useParams()
    
    return(
        <header className="projectheader">
        <div className='visualizer'>
        <div className="nav-area">
            <h1 className='visualizer-title'>{params.projectId}</h1>
            <PacketContainer></PacketContainer>
            
            <Navbar />
        </div>
        </div>
        </header>
        
    );
};


export default Visualizer