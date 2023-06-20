import React from 'react';
import AboutImg from '../assets/about.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar/>
      <img className="about-img" style={{width:"100%",height:"auto"}} 
            src={AboutImg} alt="AboutImg" />
      <Footer/>
    </div>
  )
}

export default About
