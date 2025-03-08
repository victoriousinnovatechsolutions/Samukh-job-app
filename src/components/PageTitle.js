import React from "react";
import { Link } from "react-router-dom";
import back from "../images/backBtn.png";

const PageTitle = ({ pageTitle, pageLink }) => {
  return (
    <div className="container-fluid">
    <div className="top-title">
      <Link to={pageLink}>
        <img src={back} />
      </Link>
      <p>{pageTitle}</p>
    </div>
    </div>
  );
};

export default PageTitle;
