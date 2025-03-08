import React from "react";
import PageTitle from "./components/PageTitle";
import Profile from "./images/profile.png";
import icon from "./images/coin-icon.png";
import arrowlink from "./images/arrow-link.png";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { IconChevronRight } from "@tabler/icons-react";

const title = "Edit Profile";
const backLink = "profile";

const EditProfile = () => {
  return (
    <main className="pt-4">
      <div className="">
        <PageTitle pageLink={backLink} pageTitle={title} />
        <div className="main">
          <div className="form-group">
            <input type="file" className="form-control" />
          </div>
          <div className="form-group">
            <p className="input-label">Name</p>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <p className="input-label">Email</p>
            <input type="Email" className="form-control" />
          </div>
          <div className="form-group">
            <p className="input-label">Phone No.</p>
            <input type="tel" className="form-control" />
          </div>

          <div className="login-btn pb-3">
            <Button type="submit" className="main-btn btn-arrow ">
              Save
              <span>
                <IconChevronRight stroke={2} size="24px" />
              </span>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditProfile;
