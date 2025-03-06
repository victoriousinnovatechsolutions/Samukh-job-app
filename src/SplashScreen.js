import React, { useEffect, useState } from "react";
import "./index.css"; // Create a CSS file for styling
import logo from "./images/logo.png"
const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Hide splash screen after 3 seconds
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-screen">
      <img src={logo} />
    </div>
  );
};

export default SplashScreen;
