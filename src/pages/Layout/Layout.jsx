import React from "react";
import classes from "./Layout.module.css";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <div className={`${classes.layout}`}>
      <Header />
      <main className={classes.main}>{children}</main>
    </div>
  );
};

export default Layout;
