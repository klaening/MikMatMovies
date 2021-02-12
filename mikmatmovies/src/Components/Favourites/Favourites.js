import React, { useEffect, useState } from "react";
import CardHolder from "../Card/CardHolder";

const Favourites = () => {
  useEffect(() => {
    getFavourites();
  }, []);

  const [listToSend, setListToSend] = useState([]);
  let listOfFavourites = [];

  const listName = "likedMovies";
  const getFavourites = () => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (likedMovies && likedMovies.length > 0) {
      likedMovies.map((movie) => {
        listOfFavourites.push(movie);
      });

      setListToSend(listOfFavourites);
    }
  };

  return (
    <div>
      <h1>Here are your favourites</h1>
      <CardHolder
        header="Favourites"
        movies={listToSend}
        errorMessage="You currently have no favourites"
      />
    </div>
  );
};

export default Favourites;
