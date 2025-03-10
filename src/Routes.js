import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./Home.js"; // Ensure Home component exists
import Userlogin from "./UserLogin.js";
import Welcome from "./Welcome.js";
import Otp from "./Otp.js";
import FillDetails from "./FillDetails.js";
import Intrest from "./Intrest.js";
import JobPreference from "./JobPreference.js";
import Home from "./Home.js";

function AppRoutes() {  // Changed name from "Routes" to "AppRoutes"
  return (     
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<Userlogin />} />
        <Route path="/otp" element={<Otp />} />
        <Route path="/fill-details" element={<FillDetails />} />
        <Route path="/intrest" element={<Intrest />} />
        <Route path="/job-preference" element={<JobPreference/>} />
      </Routes>
  );
}
 
export default AppRoutes;
