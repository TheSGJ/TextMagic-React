import React, { useState } from "react";
import "../styles/ThemeToggle.css";
const ThemeToggle = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightTheme = "light";
  const darkTheme = "dark";
  let theme;
  const [themeBtn, setThemeBtn] = useState("Enable DarkMode");
  
  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
    setThemeBtn("Enable DarkMode")
  }

  const switchTheme = (e) => {
    if (theme === darkTheme) {
      body.classList.replace(darkTheme, lightTheme);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightTheme;
      setThemeBtn("Enable DarkMode")
    } else {
      body.classList.replace(lightTheme, darkTheme);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkTheme;
      setThemeBtn("Enable LightMode")
    }
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    >{themeBtn}</button>
  );
};

export default ThemeToggle;
