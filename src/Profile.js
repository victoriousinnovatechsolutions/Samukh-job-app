import React from "react";
import PageTitle from "./components/PageTitle";
import Profile from "./images/profile.png";

const title = "Profile";
const Link = "/home";

const Profile = () => {
  
  return (
    <main className="pt-4">
      <div className="">
        <PageTitle pageLink={Link} pageTitle={title} />
        <div className="d-flex align-items-center gap-2">
          <img src={Profile} className="profile-img" />
          <div className="profile-details">
            <h2>Hello</h2>
            <h1>Jone Smith</h1>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
