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
      <h1>Here is Favourites</h1>
      <CardHolder header="Favourites" movies={listToSend} />
    </div>
  );
};

export default Favourites;
