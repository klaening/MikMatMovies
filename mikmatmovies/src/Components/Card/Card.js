import React, { useState, useEffect } from "react";
import CardOverlay from "./CardOverlay.js";
import style from "./Card.module.css";
import "../Global.css";

const Card = (props) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    getFavourites();
  }, [liked]);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  const listName = "likedMovies";

  const getFavourites = () => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    console.log(likedMovies);

    if (likedMovies === null) {
      likedMovies = [];
    }

    let movie = { id: props.movie.id };

    if (liked) {
      likedMovies.push(movie);
      localStorage.setItem(listName, JSON.stringify(likedMovies));
    } else {
      let id = props.movie.id;

      var index = likedMovies
        .map((x) => {
          return x.Id;
        })
        .indexOf(id);

      likedMovies.splice(index, id);

      localStorage.setItem(listName, JSON.stringify(likedMovies));
    }
  };

  return (
    <div className={style.main}>
      <section className={style.body}>
        <img src={props.movie.image} alt="Movie Poster" />

        <footer className={style.footer}>
          <div className={style.left}>
            <p>{props.movie.title}</p>
          </div>

          <div className={style.right}>
            <p>Rating {props.movie.rating}</p>

            {liked && <img id={style.heartImg} src="heart-filled.png" alt="" />}
          </div>
        </footer>
      </section>

      <section className={style.overlay}>
        <CardOverlay
          movie={props.movie}
          liked={liked}
          toggleLiked={toggleLiked}
        />
      </section>
    </div>
  );
};

export default Card;
