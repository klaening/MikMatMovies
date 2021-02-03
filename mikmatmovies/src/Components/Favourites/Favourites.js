import React, { useEffect, useState } from "react";
import movies from "../Card/movies.json";
import CardHolder from "../Card/CardHolder";

const Favourites = () => {
  useEffect(() => {
    getFavourites();
  }, []);

  const [listFavourite, setListFavourite] = useState([]);
  let favourites = [];

  const listName = "likedMovies";
  const getFavourites = async () => {
    const likedMovies = await JSON.parse(localStorage.getItem(listName));

    likedMovies.map(async (movie) => {
      const fetchItem = await fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US`
      );
      const item = await fetchItem.json();
      favourites.push(item);
    });

    setListFavourite(favourites);
    console.log(favourites);
    console.log("listFavourite", listFavourite);
  };

  return (
    <div>
      <section>
        <h1>Favourites</h1>
        <h4>Here are all your favourite movies</h4>
        <p>There are {favourites.length} movies in your list</p>
      </section>

      <CardHolder header="Your favourites list" movies={listFavourite} />
    </div>
  );
};

export default Favourites;
