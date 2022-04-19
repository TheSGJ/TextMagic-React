import React from 'react';
import PropTypes from 'prop-types';
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
 
  return (
    <nav class="navbar nav navbar-dark" style={{backgroundColor: '#171c24'}}>
    <a href="#" class="nav-branding">{props.title}</a>
    <ul class="nav-menu">
        <li class="nav-item">
            <a href="index.html" class="nav-link">Home</a>
        </li>
        <li class="nav-item">
            <a href="about.html" class="nav-link">About</a>
        </li>
        <li class="nav-item">
            <a href="https://discord.gg/zDWPHYGr5N" class="nav-link">Discord</a>
        </li>
    </ul>
    <div class="hamburger" onClick={showMenu}>
        <span class="bar"></span>
        <span class="bar"></span>
        <span class="bar"></span>
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
