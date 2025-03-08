import React from "react";
import Profile from "../images/profile.png";
import NotiIcon from "../images/notification.png";
import { IconSearch } from "@tabler/icons-react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const TopHeader = () => {
  return (
    <div className="container-fluid">
      <div className="d-flex align-items-center justify-content-between mb-3">
        <Link to="/profile"  className="d-flex align-items-center gap-2">
          <img src={Profile} className="profile-img" />
          <div className="profile-details">
            <h2>Hello</h2>
            <h1>Jone Smith</h1>
          </div>
        </Link>
        <div>
          <button type="button" className="btn notification p-0">
            <img className="" src={NotiIcon} />
          </button>
        </div>
      </div>
        <div className="searchBox">
            <input className="form-control pe-4" placeholder="Search"/>
            <IconSearch size={`30px`} />
        </div>
    </div>
  );
};

export default TopHeader;
