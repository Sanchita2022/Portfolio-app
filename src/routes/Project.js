import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import  ProjectImg  from "../assets/project.jpg";

const Project = () => {
  return (
    <div>
      <Navbar/>
      <img className="project-img" style={{width:"100%",height:"100%"}} 
            src={ProjectImg} alt="ProjectImg" />
      <Footer/>
    </div>
  )
}

export default Project
