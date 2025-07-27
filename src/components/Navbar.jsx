import React from "react";
import './Navbar.css';
import logo from '../Asset/SM-Logo3.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="SM Marketing Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <a href="#home" smooth={true} duration={800} offset={-70} className="nav-item">Home</a>
        <a href="#service" smooth={true} duration={800} offset={-70} className="nav-item">Services</a>
        <a href="#about" smooth={true} duration={800} offset={-70} className="nav-item">About</a>
        <a href="#contact" smooth={true} duration={800} offset={-10} className="nav-item">Contact</a>
        {/* <Link
          to="client"
          spy={true}
          smooth={true}
          duration={800}
          offset={-70}
          className="nav-item"
        >
          Client
        </Link> */}
      </div>
    </nav>
  );
};

export default Navbar;
