import React from "react";
import { Link, useNavigate } from "react-router-dom";
import classes from "./Header.module.css";
import useDark from "../../hooks/useDark";

const Header = () => {
  const { isDarkMode, darkTheme, toggleDarkMode } = useDark();
  const navigate = useNavigate();

  const darkStyle = {
    color: darkTheme.color,
    backgroundColor: darkTheme.elementsBackground,
  };

  return (
    <header className={classes.header} style={isDarkMode ? darkStyle : null}>
      <h3
        className={classes.title}
        onClick={() => {
          navigate("/");
        }}
      >
        Where in the world?
      </h3>
      <div className={classes.darkModeContainer} onClick={toggleDarkMode}>
        <i className={`fa-regular fa-moon ${classes.darkMode}`}></i>
        <span>Dark mode</span>
      </div>
    </header>
  );
};

export default Header;
