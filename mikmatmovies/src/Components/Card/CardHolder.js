import React, { useContext } from "react";
import Card from "./Card";
import "./CardHolder.css";
import "../Global.css";

//Context
import { MovieContext } from "../../Context/MovieContext";

function CardHolder({ header, subTitle = null, errorMessage = null }) {
  const movies = useContext(MovieContext);

  if (!movies) {
    return (
      <div className="cardHolder-body">
        <div className="ch-header">
          <h2>{header}</h2>
          {subTitle && <p>{subTitle}</p>}
        </div>
        <div className="error">
          {errorMessage ? (
            <h3>{errorMessage}</h3>
          ) : (
            <h3>Nothing here, sorry :&#40;</h3>
          )}
        </div>
      </div>
    );
  }
  return (
    <div>
      {movies.length !== 0 ? (
        <div className="cardHolder-body">
          <div className="ch-header">
            <h2>{header}</h2>
            {subTitle && <p>{subTitle}</p>}
          </div>
          <div className="cards">
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
