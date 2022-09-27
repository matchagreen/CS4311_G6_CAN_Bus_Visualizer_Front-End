import Navbar from "./components/Navbar";
import './index.css';
import React from 'react';
import {useNavigate} from "react-router-dom";

const Project = () => {
  let navigate = useNavigate();

  return (
    <header className="projectheader">
      <div className="nav-area">
        <a href="/#" className="logo">
          CAN BUS Visualizer Project
        </a>
        <Navbar />
      </div>
    </header>
  );
};

export default Project;