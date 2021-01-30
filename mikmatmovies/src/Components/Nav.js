import React, { useState } from "react";
import "./Nav.css";

function Nav({ setResult }) {
  const [menuVis, setMenuVis] = useState(false);
  const [query, setQuery] = useState("");

  const toggleMenu = () => {
    setMenuVis(!menuVis);
  };

  const handleQuery = (e) => {
    e.preventDefault();
    fetchDATA();
  };

  const fetchDATA = async () => {
    await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&query=${query}`
    )
      .then((response) => response.json())
      .then((data) => {
        setResult(data.results);
      });
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
          <p className="triangle"></p>
          <a href="#">Top-Rated</a>
        </li>
        <li>
          <p className="triangle"></p>
          <a href="#">Recommended</a>
        </li>
        <li>
          <p className="triangle"></p>
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
      <div>
        <form onSubmit={handleQuery} className="query-container">
          <input type="text" onChange={(e) => setQuery(e.target.value)} />
          <input type="submit" value="Search" className="search-btn" />
        </form>
      </div>
    </nav>
  );
}

export default Nav;
