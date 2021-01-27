import React, { useState } from "react";
import CardOverlay from "./CardOverlay.js";
import style from "./Card.module.css";
import "../Global.css";

const Card = (props) => {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    //anropa databas
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
        <div id={style.hiddenOverlay}>
          <CardOverlay
            movie={props.movie}
            liked={liked}
            toggleLiked={toggleLiked}
          />
        </div>
      </section>
    </div>
  );
};

export default Card;
