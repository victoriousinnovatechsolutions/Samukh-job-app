import React from "react";
import wlcImg from "./images/welcome.png";
import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="welcome">
      <img src={wlcImg} alt="Welcome" />
      <h1>Discover Amazing Jobs for You!</h1>
      <p>
        It is a long-established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <Link to="/institution-login" className="main-btn login-institute">
        Login as Institution
      </Link>
      <Link to="/user" className="main-btn btn-arrow">
        Login as User
        <span>
          <IconChevronRight stroke={2} size="24px" />
        </span>
      </Link>
    </div>
  );
};

export default Welcome;
