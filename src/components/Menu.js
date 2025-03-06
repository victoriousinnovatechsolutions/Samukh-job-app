import React from "react";
import { Link } from "react-router-dom";
import menuHome from "../images/menuHome.png"
import menuJob from "../images/menuJob.png"
import menuMsg from "../images/menuMsg.png"
const Menu = () => {
  return (
    <div className="menu">
     <Link to=""><img src={menuMsg} /></Link>
     <Link to="/home" className="active"><img src={menuHome} /></Link>
     <Link to=""><img src={menuJob} /></Link>
    </div>
  );
};

export default Menu;
