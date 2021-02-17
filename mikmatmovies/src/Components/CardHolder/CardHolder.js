import React, { useContext } from "react";
import Card from "../Card/Card";
import "./CardHolder.css";
import "../Global.css";

import Spinner from "../Spinners/Spinner";

//Context
import { MovieContext } from "../../Context/MovieContext";
import { SeriesContext } from "../../Context/SeriesContext";

function CardHolder({
  header,
  subTitle = null,
  series = false,
  movies: favourites = null,
  errorMessage = null,
}) {
  let movies = [];

  const moviesContext = useContext(MovieContext);
  const seriesContext = useContext(SeriesContext);

  if (series) {
    movies = seriesContext;
  } else if (favourites) {
    movies = favourites;
  } else {
    movies = moviesContext;
  }

  return (
    <div className="cardHolder-body">
      <div className="ch-header">
        <h2>{header}</h2>
        {subTitle && <p>{subTitle}</p>}
      </div>

      {!movies || movies.length <= 0 ? (
        <div className="error">
          {errorMessage ? <h3>{errorMessage}</h3> : <Spinner />}
        </div>
      ) : (
        <div className="cards">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardHolder;
