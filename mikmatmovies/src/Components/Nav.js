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
    <Link smooth to="/#" id="top">
      <nav>
        <div className="navList">
          <div className="logoHolder">
            <img id="logo" src="/logo3.png" alt="" />
          </div>
          <ul>
            <Link smooth to="/#upcoming">
              <li>
                <p className="triangle"></p>
                Upcoming
              </li>
            </Link>

            <Link smooth to="/#popular">
              <li>
                <p className="triangle"></p>
                Popular
              </li>
            </Link>

            <Link smooth to="/#toprated">
              <li>
                <p className="triangle"></p>
                Top-Rated
              </li>
            </Link>

            <Link to="/favourites">
              <li>
                <p className="triangle"></p>
                Favourites
              </li>
            </Link>

            <Link to="/tv-series">
              <li>
                <p className="triangle"></p>
                TV-Series
              </li>
            </Link>
            <li>
              <div className="menu">
                <img
                  className="small"
                  onClick={toggleMenu}
                  id="menu"
                  src="/icons/menu.png"
                  alt=""
                />
              </div>
            </li>
          </ul>

          {menuVis && (
            <div className="menu active">
              <img
                className="small"
                onClick={toggleMenu}
                src="/icons/close.png"
                alt=""
              />
              <p>Ful meny</p>
            </div>
          )}
        </div>
        <div className="query-box">
          <form onSubmit={handleQuery} className="query-container">
            <input
              required
              className="animated-search"
              type="text"
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search movie.."
            />

            <input type="submit" value="Search" className="search-btn" />
          </form>
        </div>
      </nav>
    </Link>
  );
}

export default Nav;
