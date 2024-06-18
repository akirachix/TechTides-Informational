import './index.css';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


function Contact(){
    return(
        <footer>
        <div class="footer-container">
          <div class="footer-section">
            <h2>Get in Touch</h2>
            <div id='section'>
            <div className='icon1'>
                <p><FaPhoneAlt size='1.6rem'/></p>
                <p>+254717244476</p>
            </div>
            <div className='icon2'> 
                <p><MdEmail size='2.0rem'/></p>
                <p>mavazi@gmail.com</p> </div>
            </div>
          </div>
          <div class="footer-section">
            <h2>About Us</h2>
            <div id='section'>
            <p>Our Mission</p>
            <p>Our Vision</p>
          </div>
          </div>
          <div class="footer-section">
            <h2>Location</h2>
            <div id='section'>
            <div className='icon3'>
                <p id='location-icon'><FaLocationDot size='1.9rem'/></p>
                <p>Karen Hardy </p>
            </div>
            <p id='location-text'>616 Korongo Road</p>
            </div>
          </div>
        </div>
        <hr/>
        <div id='copyright-text'>
        <p>Copyright @2024  Brand - All rights reserved </p>
        </div>
      </footer>
    )

}

export default Contact;