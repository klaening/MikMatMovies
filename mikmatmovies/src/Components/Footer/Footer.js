import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer_main">
      <ul>
<<<<<<< HEAD
        <Link to="/about">
=======
        <Link to="#">
>>>>>>> b33bcd808a9b71bd8eeea16f1ba6f90dcee7ee9b
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
    </footer>
  );
};

export default Footer;
