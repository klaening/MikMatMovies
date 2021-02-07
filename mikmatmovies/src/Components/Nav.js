import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

import "./Nav.css";

function Nav({ setResult }) {
  const [menuVis, setMenuVis] = useState(false);
  const [query, setQuery] = useState("");

  const history = useHistory();

  const toggleMenu = () => {
    setMenuVis(!menuVis);
  };

  const handleQuery = (e) => {
    e.preventDefault();
    fetchDATA();
    history.push("/search");
  };

  const fetchDATA = async () => {
    if (query || query !== "undefined") {
      await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&query=${query}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data.results);
          setResult(data.results);
        });
    }
  };

  return (
    <nav>
      <ul>
        <li>
          <Link smooth to="/#" id="top">
            <img className="logo" src="/logo3.png" alt="" />
          </Link>
        </li>

        <li>
          <Link smooth to="/#upcoming">
            <p className="triangle"></p>
            Upcoming
          </Link>
        </li>

        <li>
          <Link smooth to="/#popular">
            <p className="triangle"></p>
            Popular
          </Link>
        </li>

        <li>
          <Link smooth to="/#toprated">
            <p className="triangle"></p>
            Top-Rated
          </Link>
        </li>

        <li>
          <Link to="/favourites">
            <p className="triangle"></p>
            Favourites
          </Link>
        </li>

        <li>
          <img
            className="small"
            onClick={toggleMenu}
            id="menu"
            src="/icons/menu.png"
            alt=""
          />
        </li>
      </ul>

      {menuVis && (
        <div className="menu">
          <img
            className="small"
            onClick={toggleMenu}
            src="/icons/close.png"
            alt=""
          />
          <p>Ful meny</p>
        </div>
      )}
      <div className="query-box">
        <form onSubmit={handleQuery} className="query-container">
          <input
            className="animated-search"
            type="text"
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movie.."
          />

          <input type="submit" value="Search" className="search-btn" />
        </form>
      </div>
    </nav>
  );
}

export default Nav;
