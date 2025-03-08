import React from "react";
import PageTitle from "./components/PageTitle";
import Profile from "./images/profile.png";
import icon from "./images/coin-icon.png";
import arrowlink from "./images/arrow-link.png";
import { Link } from "react-router-dom";

const title = "Profile";
const backLink = "home";

const ProfilePage = () => {
  return (
    <main className="pt-4">
      <div className="">
        <PageTitle pageLink={backLink} pageTitle={title} />
        <div className="container-fluid">
          <div className="d-flex align-items-center gap-2  justify-content-between">
            <div className="d-flex align-items-center gap-2">
              <img src={Profile} className="profile-img" />
              <div className="profile-details">
                <h1>Jone Smith</h1>
                <h2>9135232562</h2>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2 point-coin">
              <img src={icon} className="" />
              <div className="pointCoin-details">
                <p className="mb-0">Coins</p>
                <h2 className="mb-0">999</h2>
              </div>
            </div>
          </div>
          <div>
            <Link to="/edit-profile" className="d-flex align-items-center justify-content-between pro-link"><span>Edit Profile</span><span><img src={arrowlink} className="" /></span></Link>
            <Link to="/change-password" className="d-flex align-items-center justify-content-between pro-link"><span>Change Password</span><span><img src={arrowlink} className="" /></span></Link>
            <Link to="" className="d-flex align-items-center justify-content-between pro-link"><span>Terms & Conditions</span><span><img src={arrowlink} className="" /></span></Link>
            <Link to="" className="d-flex align-items-center justify-content-between pro-link"><span>Privacy Policy</span><span><img src={arrowlink} className="" /></span></Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;
