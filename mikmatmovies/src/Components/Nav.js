import React, { useState } from "react";
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
        <li>
          <img id="menu" src="menu.png" alt="" />
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
