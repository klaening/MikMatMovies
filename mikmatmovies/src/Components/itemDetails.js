import React, { useState, useEffect } from "react";
import style from "./ItemDetails.module.css";
import "../../src/Components/Global.css";

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const path = `https://image.tmdb.org/t/p/w185`;
  const backdroppath = `https://image.tmdb.org/t/p/w1280`;
  let newMovie;

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US`
    );
    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  };

  return (
    <div
      className={style.detailContainer}
      style={{ backgroundImage: `url(${backdroppath + item.backdrop_path})` }}
    >
      <div className={style.contentContainer}>
        <div className={style.titleOverviewContainer}>
          <h3>{item.title}</h3>
          <p>{item.overview}</p>

          <div>
            <h6>Rating: {item.vote_average}</h6>
            <h6>{item.tagline}</h6>
            <h6>
              WEBSITE:{" "}
              {item.homepage ? (
                <a href={item.homepage}>{item.homepage}</a>
              ) : (
                "no homepage available"
              )}
            </h6>
          </div>
        </div>
        <div className={style.test}>
          <img
            className={style.imagePoster}
            src={path + item.poster_path}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
