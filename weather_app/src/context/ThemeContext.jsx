// context/ThemeContext.jsx
import React, { createContext, useState, useEffect } from "react";


export const ThemeContext = createContext();


export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);


  const toggleDarkMode = () => setDarkMode((prev) => !prev);


  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
