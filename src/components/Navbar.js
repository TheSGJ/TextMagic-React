import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import "../styles/Navbar.css"

export default function Navbar(props) {

  const showMenu = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
    window.addEventListener('scroll', () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
    
    })
  }
  const handleLinkClose = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }
 
  return (
    <nav className="navbar nav navbar-dark" style={{backgroundColor: '#171c24'}}>
    <Link to="/" className="nav-branding">{props.title}</Link>
    <ul className="nav-menu">
        <li className="nav-item">
            <Link className="nav-link" to="/" onClick={handleLinkClose}>Home</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about" onClick={handleLinkClose}>About</Link>
        </li>
    </ul>
    <div className="hamburger" onClick={showMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
    </div>

</nav>
  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "TextMagic"
};
