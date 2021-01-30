import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CardOverlay from "./CardOverlay.js";
import style from "./Card.module.css";
import "../Global.css";

const Card = (props) => {
  const [liked, setLiked] = useState(false);

  const path = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    getFavourites();
  }, []);

  const toggleLiked = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    if (newLiked) {
      storeLiked(props.movie.id);
      toast(`${props.movie.title} was added to favourites!`);
    } else {
      removeLiked(props.movie.id);
      toast(`${props.movie.title} was removed from favourites!`);
    }
  };

  const storeLiked = (id) => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (!likedMovies) {
      likedMovies = [];
    }

    let movie = { id: id };
    likedMovies.push(movie);
    localStorage.setItem(listName, JSON.stringify(likedMovies));
  };

  const removeLiked = (id) => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (likedMovies && likedMovies.length > 0) {
      var index = likedMovies.findIndex((x) => x.id === id);
      likedMovies.splice(index, 1);

      localStorage.setItem(listName, JSON.stringify(likedMovies));
    }
  };

  const listName = "likedMovies";
  const getFavourites = () => {
    let likedMovies = JSON.parse(localStorage.getItem(listName));

    if (likedMovies && likedMovies.length > 0) {
      var index = likedMovies.findIndex((x) => x.id === props.movie.id);

      if (index >= 0) {
        setLiked(true);
      }
    }
  };

  //   const year = () => {
  //     let yearVar = props.movie.release_date.toString();

  //     //  var toType = function (test) {
  //     //    return {}.toString
  //     //      .call(test)
  //     //      .match(/\s([a-zA-Z]+)/)[1]
  //     //      .toLowerCase();
  //     //  };

  //     //  console.log(toType);
  //     //  let res = yearVar.toString();
  //     //  console.log(res);
  //     //  alert(year.split("-").pop());
  //     return yearVar.substring(1, 4);
  //   };

  return (
    <div className={style.main}>
      <section className={style.body}>
        <div className={style.poster}>
          <img src={path + props.movie.poster_path} alt="Movie Poster" />
        </div>

        <footer className={style.footer}>
          <div className={style.left}>
            <p>{props.movie.title}</p>
            {/* <p>{props.movie.release_date.toString().substring(1, 4)}</p> */}
            <p>{props.movie.release_date}</p>
          </div>

          <div className={style.right}>
            <p>Rating {props.movie.vote_average}</p>

            {liked && (
              <img id={style.heartImg} src="./icons/heart-filled.png" alt="" />
            )}
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
