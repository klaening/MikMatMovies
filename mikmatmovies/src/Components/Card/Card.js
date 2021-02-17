import React, { useState, useEffect } from "react";
import CardOverlay from "./CardOverlay.js";
import style from "./Card.module.css";
import "../Global.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import storage from "../../Services/storageService";

const Card = ({ movie }) => {
  const [liked, setLiked] = useState(false);
  const path = "https://image.tmdb.org/t/p/original";
  const listName = "likedMovies";

  useEffect(() => {
    storage.getLiked(listName, movie, setLiked);
  }, [liked]);

  let movieName = "";
  if (movie.type === "movie") {
    movieName = movie.title;
  } else if (movie.type === "series") {
    movieName = movie.name;
  }

  const toggleLiked = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    if (newLiked) {
      storage.storeLiked(listName, movie);
      toast.success(`"${movieName}" was added to favourites!`);
    } else {
      storage.removeLiked(listName, movie);
      toast.error(`"${movieName}" was removed from favourites!`);
    }

    //Använda Context för att uppdatera listan av Movies i Favourites
    //setMovieList(newList);
  };

  const year = () => {
    if (movie.release_date) {
      let yearVar = movie.release_date;
      let getYear = yearVar.split("-");

      return getYear[0];
    }

    if (movie.first_air_date) {
      let yearVar = movie.first_air_date;
      let getYear = yearVar.split("-");

      return getYear[0];
    }
  };

  const voteAverage = () => {
    let num = movie.vote_average;
    return num.toFixed(1);
  };

  return (
    <div className={style.main}>
      <section className={style.body}>
        <div className={style.poster}>
          {movie.poster_path ? (
            <img src={path + movie.poster_path} alt="Movie Poster" />
          ) : (
            <img
              src="/images/poster-not-found.png"
              alt="Movie Poster missing"
            />
          )}
        </div>

        <footer className={style.footer}>
          <div className={style.left}>
            <p>{movieName}</p>
            <p>{year()}</p>
          </div>

          <div className={style.right}>
            {movie.vote_count > 0 ? (
              <p>Rating {voteAverage()}</p>
            ) : (
              <p>No rating</p>
            )}

            {liked && (
              <img id={style.heartImg} src="/icons/heart-filled.png" alt="" />
            )}
          </div>
        </footer>
      </section>

      <section className={style.overlay}>
        <CardOverlay movie={movie} liked={liked} toggleLiked={toggleLiked} />
      </section>
    </div>
  );
};

export default Card;
