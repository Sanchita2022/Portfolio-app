import "./FooterStyles.css";

import React from 'react'
import { FaFacebook, FaHome,FaTwitter, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer" >
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome  size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <p>Murarai,Birbhum</p> 
                    <p>WestBengal,India</p> 
                </div>
                <div className="email">
                <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/> 
                   <p>softwaresanchita@gmail.com</p>
                
                </div>
            </div>
            <br/>
            <div className="right">
                <h3><p>About My Service</p></h3>
                <p >This is Sanchita Sharma , passionate
                React developer who brings ideas into 
                reality by using React.js</p>

            </div>

            <div className="social">
                <FaFacebook size={30} style={{color:"#fff",marginRight:"1rem"}}/> 
                <FaTwitter size={30} style={{color:"#fff",marginRight:"1rem"}}/> 
                <FaLinkedin size={30} style={{color:"#fff",marginRight:"1rem"}}/> 


            </div>

        </div>
      
    </div>
  )
}

export default Footer
