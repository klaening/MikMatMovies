import React, { useState, useContext } from "react";
import Card from "../Card/Card";
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
  //En likadan fast för Favourites

  if (favourites) {
    movies = favourites;
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
            <Card key={movie.id} movie={movie} movies={movies} />
          ))}
        </div>
      )}
    </div>
  );
}

export default CardHolder;
