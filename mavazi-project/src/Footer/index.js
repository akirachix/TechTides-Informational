import './index.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function Footer(){
    return(
        <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h2>Get in Touch</h2>
            
            <div id='section'>
            <div className='icon1'>
                <p><FaPhoneAlt size='1.6rem'/></p>
                <h4>+254717244476</h4>
            </div>
            <div className='icon2'> 
                <p><MdEmail size='2.0rem'/></p>
                <h4>mavazi@gmail.com</h4> </div>
            </div>
          </div>
          <div class="footer-section">
            <h2>About Us</h2>
            <div id='section-two'>
              <div className='mission'>
            <h4>Our Mission</h4>
            </div>
            <div className='vision'>
            <h4>Our Vision</h4>
            </div>
          </div>
          </div>
          <div class="footer-section">
            <h2>Location</h2>
            <div id='section-three'>
            <div className='icon3'>
                <p id='location-icon'><FaLocationDot size='1.9rem'/></p>
                <h4> Nairobi Karen </h4>
            </div>
            <h4 id='location-text'>616 Korongo Road</h4>
            </div>
          </div>
        </div>
        <hr/>
        <div id='copyright-text'>
        <p>Copyright @2024  Mavazi Brand - All rights reserved </p>
        </div>
      </footer>
    )

}

export default Footer;