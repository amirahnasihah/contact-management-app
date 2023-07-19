import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="ui attached header">
      <div className="ui header">
        <Link to="/">
          <div className="ui center aligned header">Contact Management 📲</div>
        </Link>
        <a
          className="ui sub header"
          href="https://github.com/amirahnasihah/contact-management-app"
          target="_blank"
          rel="noreferrer"
        >
          <i aria-hidden="true" className="github icon red"></i>github
        </a>
      </div>
    </div>
  );
};

export default Header;
