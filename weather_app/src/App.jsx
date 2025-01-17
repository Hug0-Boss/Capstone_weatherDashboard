import React, { useEffect, useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./styles/app.css";
import { ThemeProvider } from "./context/ThemeContext";


const App = () => {
  const [darkMode, setDarkMode] = useState(false);


  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);


  const toggleDarkMode = () => setDarkMode((prev) => !prev);


  return (
    <div className={`app ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}`}>
      <button
        className="dark-mode-toggle p-2 fixed top-4 right-4 bg-blue-500 text-white rounded"
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>
      <ThemeProvider>
      <div className="min-h-screen">
        <Dashboard />
      </div>
      </ThemeProvider>
    </div>
  );
};


export default App;
