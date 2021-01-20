import React from "react";
import "./Nav.css";

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <img className="logo" src="logo3.png" alt="" />
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
