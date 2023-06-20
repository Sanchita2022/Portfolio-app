import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ContactImg from '../assets/contact.jpg'

const contact = () => {
  return (
    <div>
       <Navbar/>
      <img className="contact-img" style={{width:"100%",height:"100%"}} 
            src={ContactImg} alt="ContactImg" />
      <Footer/>
    </div>
  )
}

export default contact
