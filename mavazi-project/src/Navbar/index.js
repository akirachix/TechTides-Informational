import React, {useState} from 'react';
import "./index.css"
const Navbar = () =>{
    const [isMenuOpen, setlsMenuOpen]=useState(false);

    const toggleMenu = () => {
        setlsMenuOpen(!isMenuOpen);
        document.body.style.overflow = isMenuOpen ? 'auto': 'hidden';
      };

      
    return(
        <div>
        <nav id='navbar'>
            <img src='/images/mavazilogo.jpg' alt='logo' className='mavazi'/>
            <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div  className={`nav-links ${isMenuOpen ? 'active' :""}`}>
            <a href='#Home' onClick={toggleMenu}>Home</a>
            <a href='#mission' onClick={toggleMenu}>About Us</a>
            <a href='#brandy' onClick={toggleMenu}>Brands</a>
            <a href='#contacts' onClick={toggleMenu}>Contacts</a>
            
            </div>
            </nav>
            </div>
    )
};
export default Navbar;




  
  
  
  
  