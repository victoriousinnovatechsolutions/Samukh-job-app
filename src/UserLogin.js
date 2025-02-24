import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const UserLogin = () => {
  return (
    <div className="user-login">
      <div className="head">
        <h2>Welcome to</h2>
        <h1>Sammukh</h1>
      </div>
      <div className="main">
        <p className="text-center input-label">Please Enter Your Phone no.<br ></br> to Continue.</p>
        <input type="tel" className="input"/>
      <div>
      <Link to="/user" className="main-btn btn-arrow">
        Login as User
        <span>
          <IconChevronRight stroke={2} size="24px" />
        </span>
      </Link>
      </div>
      </div>
    </div>
  );
};

export default UserLogin;
