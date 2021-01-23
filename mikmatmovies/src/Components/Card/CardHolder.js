import React from "react";
import Card from "./Card";
import movies from "./movies.json";

function CardHolder() {
  return (
    <div>
      {movies.map((movie) => (
        <div className="ch-body">
          <Card movie={movie} />
        </div>
      ))}
    </div>
  );
}

export default CardHolder;
