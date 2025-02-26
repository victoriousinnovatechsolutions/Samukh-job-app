import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const FillDetails = () => {
  return (
    <div className="user-login">
      
      <div className="main">
        <h2 class="heading">Fill Details</h2>
        <div className="form-group">
          <p className="input-label">First Name</p>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <p className="input-label">Last Name</p>
          <input type="text" className="form-control" />
        </div>
        <div className="form-group">
          <p className="input-label">E-mail</p>
          <input type="email" className="form-control" />
        </div>
        <div className="form-group">
          <p className="input-label">Gender</p>          
          <select type="text" className="form-control form-select">
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>
        <div className="login-btn">
          <Link to="/intrest" className="main-btn btn-arrow ">
            Next
            <span>
              <IconChevronRight stroke={2} size="24px" />
            </span>
          </Link>
          <div className="nav-dots">
            <span></span>
            <span></span>
            <span className="active"></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FillDetails;
