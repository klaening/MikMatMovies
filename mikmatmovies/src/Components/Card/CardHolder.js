import React from "react";
import Card from "./Card";
import "./CardHolder.css";
import "../Global.css";
import { HashLink as Link } from "react-router-hash-link";

function CardHolder({ header, movies, subtitle = null }) {
  return (
    <div>
      {movies.length !== 0 ? (
        <div className="cardHolder-body">
          <div className="ch-header">
            <h2>{header}</h2>
            <Link smooth to="/#top">
              Go Back
            </Link>
            {/* {subtitle ? <p>{`Results: ${movies.length}`}</p> : null} */}
            {subtitle && <p>{`Results: ${movies.length}`}</p>}
          </div>
          <div className="cards2">
            {movies.map((movie) => (
              <Card key={movie.id} movie={movie} movies={movies} />
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CardHolder;
