import React from "react";
import Card from "./Card";
import movies from "./movies.json";

const CardHolder = () => {
  return (
    <div className="cardHolder-body">
      <header>
        <h2>Recommended</h2>
      </header>
      <section id="test">
        {movies.map((movie) => (
          <div key={movie.id.toString()} className="ch-body">
            <Card movie={movie} />
          </div>
        ))}
      </section>
    </div>
  );
};

export default CardHolder;
