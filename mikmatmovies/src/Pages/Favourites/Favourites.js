import React, { useEffect, useState } from "react";
import CardHolder from "../../Components/CardHolder/CardHolder";

const Favourites = () => {
  useEffect(() => {
    getFavourites();
  }, []);

  //Här är listorna som ska uppdateras
  //Ska göras om till Context
  const [listMovies, setListMovies] = useState([]);
  const [listSeries, setListSeries] = useState([]);
  let listOfMovies = [];
  let listOfSeries = [];

  const listName = "likedMovies";
  const getFavourites = () => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (likedMovies && likedMovies.length > 0) {
      likedMovies.map((movie) => {
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
      {/* Wrappa children i Providers */}
      <CardHolder
        header="Movies"
        movies={listMovies}
        errorMessage="You currently have no favourite movies"
      />

      <CardHolder
        header="Series"
        movies={listSeries}
        errorMessage="You currently have no favourite TV-shows"
      />
    </div>
  );
};

export default Favourites;
