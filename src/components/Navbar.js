import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor: '#36393f'}}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About</a>
          </li>
        </ul>
       
      </div>
      
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
