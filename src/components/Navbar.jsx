import React from "react";
import { Link } from "react-scroll";
import './Navbar.css';
import logo from '../Asset/SM-Logo3.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="SM Marketing Logo" className="logo-img" />
      </div>

      <div className="nav-links">
        <Link
          to="home-section"
          smooth={true}
          duration={800}
          offset={-70}
          className="nav-item"
        >
          Home
        </Link>
        <Link
          to="services-section"
          smooth={true}
          duration={800}
          offset={-70}
          className="nav-item"
        >
          Services
        </Link>
        <Link
          to="about-section"
          smooth={true}
          duration={800}
          offset={-70}
          className="nav-item"
        >
          About
        </Link>
        <Link
          to="footer-section"
          smooth={true}
          duration={800}
          offset={-10}
          className="nav-item"
        >
          Contact
        </Link>
        <Link
          to="client-section"
          smooth={true}
          duration={800}
          offset={-70}
          className="nav-item"
        >
          Client
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
