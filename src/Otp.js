import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Otp = () => {
  return (
    <div className="user-login">
      <div className="head">
        <h2>Welcome to</h2>
        <h1>Sammukh</h1>
      </div>
      <div className="main">
        <p className="text-center input-label">
          We Sent OTP Code to Verify Your
          <br /> Phone no.
        </p>
        <div className="otp d-flex gap-3 justify-content-between">
          <input type="number" className="form-control" />
          <input type="number" className="form-control" />
          <input type="number" className="form-control" />
          <input type="number" className="form-control" />
        </div>
        <div className="login-btn">
          <Link to="/fill-details" className="main-btn btn-arrow ">
            Next
            <span>
              <IconChevronRight stroke={2} size="24px" />
            </span>
          </Link>
          <div className="nav-dots">
            <span></span>
            <span className="active"></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;
