import React from "react";
import PageTitle from "./components/PageTitle";
import { Button } from "reactstrap";
import { IconChevronRight } from "@tabler/icons-react";

const title = "Change Password";
const backLink = "profile";

const ChangePassword = () => {
  return (
    <main className="pt-4">
      <div className="">
        <PageTitle pageLink={backLink} pageTitle={title} />
        <div className="main">
          <div className="form-group">
            <p className="input-label">Old Password</p>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <p className="input-label">New Password</p>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <p className="input-label">Confirm Password</p>
            <input type="email" className="form-control" />
          </div>
         
          <div className="login-btn pb-3">
            <Button type="submit" className="main-btn btn-arrow ">
              Change Passward
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

export default ChangePassword;
