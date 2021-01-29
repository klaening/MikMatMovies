import React from "react";
import Card from "./Card";
import movies from "./movies.json";
import "./CardHolder.css";
import "../Global.css";

export default function CardHolder() {
  return (
    <div className="cardHolder-body">
      <div className="ch-header">
        <h2>Recommended</h2>
      </div>
      <div className="cards">
        {movies.map((movie) => (
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
}
