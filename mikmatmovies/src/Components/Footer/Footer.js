import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer_main">
      <ul>
        <Link>
          <li>About</li>
        </Link>
        <Link>
          <li>Job offers</li>
        </Link>
        <Link>
          <li>Contact us</li>
        </Link>
        <li>Est. 2021</li>
      </ul>
    </div>
  );
};

export default Footer;
