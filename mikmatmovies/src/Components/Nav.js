import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [menuVis, setMenuVis] = useState(false);
  const toggleMenu = () => {
    setMenuVis(!menuVis);
  };

  return (
    <nav>
      <ul>
        <li>
          <a href="https://www.google.com">
            <img className="logo" src="logo3.png" alt="" />
          </a>
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
          <img
            className="small"
            onClick={toggleMenu}
            id="menu"
            src="./icons/menu.png"
            alt=""
          />
        </li>
      </ul>

      {menuVis && (
        <div className="menu">
          <img
            className="small"
            onClick={toggleMenu}
            src="./icons/close.png"
            alt=""
          />
          <p>Ful meny</p>
        </div>
      )}
    </nav>
  );
}

export default Nav;
