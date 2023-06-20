import "./HeroImgStyles.css";

import React from 'react';
import IntroImg from "../assets/homeimg..jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
        <img className="intro-img" style={{width:"100%",height:"auto"}} 
            src={IntroImg} alt="IntroImg" />
        </div>
        <div className="content">
        <p>HI , I AM SANCHITA SHARMA, </p>
        <h3>REACT DEVELOPER</h3>
          <div>
          <Link to="/project" className="btn">
              Projects
            </Link>
            <Link to="/contact" className="btn btn-light">
              Contact
            </Link>
          </div>
        </div> 
    </div>
  )
}

export default HeroImg
