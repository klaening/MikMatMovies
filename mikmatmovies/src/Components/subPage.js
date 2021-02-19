import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const subPage = () => {
  return (
    <div className="pages">
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
    </div>
  );
};

export default subPage;
