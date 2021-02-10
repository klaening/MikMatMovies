import React, { useState, useEffect } from "react";
import CardOverlay from "./CardOverlay.js";
import style from "./Card.module.css";
import "../Global.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import storage from "../../Services/storageService";

const Card = ({ movie, movies }) => {
  const [liked, setLiked] = useState(false);
  const path = "https://image.tmdb.org/t/p/original";
  const listName = "likedMovies";

  useEffect(() => {
    storage.getFavourites(listName, movie, setLiked);
  }, [liked]);

  const toggleLiked = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    if (newLiked) {
      storage.storeLiked(listName, movie);
      toast(`${movie.title} was added to favourites!`);
    } else {
      storage.removeLiked(listName, movie);
      toast(`${movie.title} was removed from favourites!`);
    }
  };

  const year = () => {
    if (movie.release_date) {
      let yearVar = movie.release_date;
      let getYear = yearVar.split("-");

      return getYear[0];
    }
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
            <p>{movie.title}</p>
            <p>{year()}</p>
          </div>

          <div className={style.right}>
            <p>Rating {movie.vote_average}</p>

            {liked && (
              <img id={style.heartImg} src="/icons/heart-filled.png" alt="" />
            )}
          </div>
        </footer>
      </section>

      <section className={style.overlay}>
        <CardOverlay
          movie={movie}
          liked={liked}
          toggleLiked={toggleLiked}
          movies={movies}
        />
      </section>
    </div>
  );
};

export default Card;
