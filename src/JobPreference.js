import React from "react";
import { IconChevronRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const JobPreference = () => {
  return (
    <div className="user-login">
      <div className="main">
        <h2 className="heading2">Select Your Job Preference</h2>
        <div className="d-flex gap-3 flex-wrap">
          <div className="">
            <input
              type="checkbox"
              className="btn-check"
              name="options-outlined"
              id="fulltime"
              autocomplete="off"
            />
            <label className="btn btn-radio" for="fulltime">
              Full time
            </label>
          </div>
          <div className="">
            <input
              type="checkbox"
              className="btn-check"
              name="options-outlined"
              id="parttime"
              autocomplete="off"
            />
            <label className="btn btn-radio" for="parttime">
              Part time
            </label>
          </div>
        </div>
        <div className="login-btn">
          <Link to="/home" className="main-btn btn-arrow ">
            Save
            <span>
              <IconChevronRight stroke={2} size="24px" />
            </span>
          </Link>
          <div>
            <Link to="/home" className="skip-link">Skip</Link>
          </div>
          <div className="nav-dots m-0">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span className="active"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobPreference;
