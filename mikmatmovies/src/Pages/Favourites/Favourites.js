import React, { useEffect, useState } from "react";
import CardHolder from "../../Components/CardHolder/CardHolder";

const Favourites = () => {
  const [listMovies, setListMovies] = useState([]);
  const [listSeries, setListSeries] = useState([]);

  useEffect(() => {
    getFavourites();
  }, []);

  const listName = "likedMovies";
  const getFavourites = () => {
    let listOfMovies = [];
    let listOfSeries = [];

    let favourites = JSON.parse(localStorage.getItem(listName));

    if (favourites && favourites.length > 0) {
      favourites.map((movie) => {
        if (movie.type === "movie") {
          listOfMovies.push(movie);
        } else if (movie.type === "series") {
          listOfSeries.push(movie);
        }
      });

      setListMovies(listOfMovies);
      setListSeries(listOfSeries);
    }
  };

  return (
    <div>
      <CardHolder
        header="Movies"
        movies={listMovies}
        errorMessage="You currently have no favourite movies"
      />

      <CardHolder
        header="TV-series"
        movies={listSeries}
        errorMessage="You currently have no favourite TV-series"
      />
    </div>
  );
};

export default Favourites;
