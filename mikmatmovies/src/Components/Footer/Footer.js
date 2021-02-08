import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_main">
      <ul>
        <Link to="#">
          <li>About</li>
        </Link>
        <Link to="#">
          <li>Job offers</li>
        </Link>
        <Link to="#">
          <li>Contact us</li>
        </Link>
        <li>Est. 2021</li>
      </ul>
    </div>
  );
};

export default Footer;
