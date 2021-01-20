import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul className="nav-ul">
        <li>
          <img src="logo3.png" alt="" />
        </li>
        <li>
          <a href="#">Top-Rated</a>
        </li>
        <li>
          <a href="#">Recommended</a>
        </li>
        <li>
          <a href="#">Favourites</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
