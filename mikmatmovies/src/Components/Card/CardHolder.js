import React, { useContext } from "react";
import Card from "./Card";
import "./CardHolder.css";
import "../Global.css";

import Spinner from "../Spinners/Spinner";

//Context
import { MovieContext } from "../../Context/MovieContext";

function CardHolder({
  header,
  subTitle = null,
  movies: favourites = null,
  errorMessage = null,
}) {
  let movies = useContext(MovieContext);

  if (favourites) {
    movies = favourites;
  }

  if (!movies || movies.length <= 0) {
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
            <Spinner />
            // <h3>Nothing here, sorry :&#40;</h3>
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
