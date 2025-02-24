import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

function Nav() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/contact">Contact</Link>
      </nav>
      
      </Router>
  );
}

export default Nav;
