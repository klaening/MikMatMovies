import React from "react";
import Card from "./Card";
import "./CardHolder.css";
import "../Global.css";

export default function CardHolder({ header, movies }) {
  return (
    <div className="checkMovies">
      {movies.length !== 0 ? (
        <div className="cardHolder-body">
          <div className="ch-header">
            <h2>{header}</h2>
            <p>{`(results: ${movies.length})`}</p>
          </div>
          <div className="cards1">
            <div className="cards2">
              {movies.map((movie) => (
                <Card movie={movie} />
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
