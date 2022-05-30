import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { Toggle } from './Toggle';
import { useDarkMode } from '../styles/useDarkMode';
import { GlobalStyles, lightTheme, darkTheme } from '../styles/globalStyles';
import { ThemeProvider } from "styled-components";

export default function Navbar(props) {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;
  return (
<header className="body-font">
  <div className="container mx-auto flex flex-wrap p-1 flex-col md:flex-row items-center">
    <Link to="/" className="flex title-font font-medium items-center mx-3 md:mb-0">
      <span className="ml-3 text-xl text-underline">{props.title}</span>
    </Link>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <Link to="/" className="mr-2 hover:text-blue-900">Home</Link>
      <Link to="/about" className="mx-2 hover:text-blue-900">About</Link>
      <ThemeProvider theme={themeMode}>
      <GlobalStyles />
      <span className='text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full py-1 mx-1 px-1 text-sm text-center mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'><Toggle className="mx-2  hover:text-blue-900" toggleTheme={toggleTheme} /></span>
      </ThemeProvider>
    </nav>
  </div>
  <hr className="my-1" />
</header>


  )
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

Navbar.defaultProps = {
  title: "TextMagic"
};
