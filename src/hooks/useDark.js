import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../DarkContext";

const useDark = () => {
  const ctx = useContext(ThemeContext);
  const isDarkMode = ctx.isDarkMode;
  const toggleDarkMode = ctx.toggleDarkMode;

  const darkTheme = {
    color: ctx.theme.dark.foreground,
    backgroundColor: ctx.theme.dark.background,
    elementsBackground: ctx.theme.dark.elementsBackground,
  };

  return { isDarkMode, toggleDarkMode, darkTheme };
};

export default useDark;
