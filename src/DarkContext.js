import React, { useState } from "react";

export const ThemeContext = React.createContext();

const theme = {
  dark: {
    foreground: "hsl(0, 0%, 100%)",
    background: "hsl(207, 26%, 17%)",
    elementsBackground: "hsl(209, 23%, 22%)",
  },
};

const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleDarkMode = () => {
    setDarkTheme(!darkTheme);
    document.querySelector("body").classList.toggle("darkTheme");
  };

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode: darkTheme,
        toggleDarkMode: toggleDarkMode,
        theme: theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
