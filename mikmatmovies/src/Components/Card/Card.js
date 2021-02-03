import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardOverlay from "./CardOverlay.js";
import style from "./Card.module.css";
import "../Global.css";

const Card = ({ movie, movies }) => {
  const [liked, setLiked] = useState(false);
  const path = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getFavourites();
  }, [liked]);

  const toggleLiked = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    if (newLiked) {
      storeLiked(movie);
      toast(`${movie.title} was added to favourites!`);
    } else {
      removeLiked(movie);
      toast(`${movie.title} was removed from favourites!`);
    }
  };

  const storeLiked = (objectToStore) => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (!likedMovies) {
      likedMovies = [];
    }

    likedMovies.push(objectToStore);
    localStorage.setItem(listName, JSON.stringify(likedMovies));
  };

  const removeLiked = (objectToStore) => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (likedMovies && likedMovies.length > 0) {
      var index = likedMovies.findIndex((x) => x.id === objectToStore.id);
      likedMovies.splice(index, 1);

      localStorage.setItem(listName, JSON.stringify(likedMovies));
    }
  };

  const listName = "likedMovies";
  const getFavourites = () => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (likedMovies && likedMovies.length > 0) {
      var index = likedMovies.findIndex((x) => x.id === movie.id);

      if (index >= 0) {
        setLiked(true);
      }
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
              src="./images/poster-not-found.png"
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
              <img id={style.heartImg} src="./icons/heart-filled.png" alt="" />
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
