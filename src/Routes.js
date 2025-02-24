import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home.js"; // Ensure Home component exists
import Userlogin from "./UserLogin.js";
import Welcome from "./Welcome.js";

function AppRoutes() {  // Changed name from "Routes" to "AppRoutes"
  return (     
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/user" element={<Userlogin />} />
      </Routes>
  );
}
 
export default AppRoutes;
