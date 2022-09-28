import {useParams} from 'react-router-dom'
import Navbar from "../projecttemplate/components/Navbar";
import '../projecttemplate/index.css';
import React from 'react';

function Visualizer() {
    const params = useParams()
    
    return(
        <header className="projectheader">
        
        <div className="nav-area">
            <h1>{params.projectId}</h1>
            
            
            <Navbar />
        </div>
        </header>
        
    );
};

export default Visualizer