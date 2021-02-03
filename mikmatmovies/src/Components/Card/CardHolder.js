import React, { useState } from "react";
import Card from "./Card";
import "./CardHolder.css";
import "../Global.css";

function CardHolder({ header, movies }) {
  const [displayAmount, setDisplayAmount] = useState(10);

  const moreMovies = () => {
    console.log("Before click", displayAmount);

    if (displayAmount < 20) {
      setDisplayAmount(displayAmount + 10);
    }

    console.log("After click", displayAmount);
  };

  const ShowTheCards = () => {
    return (
      <div className="cards">
        {movies.slice(0, 10).map((movie) => (
          <Card key={movie.id} movie={movie} movies={movies} />
        ))}
      </div>
    );
  };

  return (
    <div>
      {movies.length !== 0 ? (
        <div className="cardHolder-body">
          <div className="ch-header">
            <h2>{header}</h2>
            {/* {subtitle ? <p>{`Results: ${movies.length}`}</p> : null} */}
            <p>{`Results: ${movies.length}`}</p>
          </div>

          {ShowTheCards()}

          {/* <div className="cards2">
            {movies.slice(0, 10).map((movie) => (
              <Card key={movie.id} movie={movie} movies={movies} />
            ))}
          </div> */}
          <div className="seeMore">
            <p onClick={moreMovies()}>See more</p>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default CardHolder;
