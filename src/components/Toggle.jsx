// import React from 'react'

import { useEffect, useState } from "react";

const Toggle = () => {
      // State to manage light/dark mode
  const [darkMode, setDarkMode] = useState(false);

  // Function to toggle the mode
  const toggleMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  useEffect(() => {
    document.body.className = darkMode ? "dark-mode" : "light-mode";
  }, [darkMode]);
  return (
    <>
 <div
      className={darkMode ? "dark-mode" : "light-mode"}
      style={{
        minHeight: "0vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        transition: "background-color 0.5s ease, color 0.5s ease",
      }}
    >
      {/* <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1> */}
      <button
        onClick={toggleMode}
        style={{
          padding: "10px 20px",
          marginBottom: "20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          color: darkMode ? "#fff" : "#000",
          backgroundColor: darkMode ? "#333" : "#ddd",
          transition: "background-color 0.3s ease, color 0.3s ease",
        }}
      >
        View this page in {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
    </>
  )
}

export default Toggle