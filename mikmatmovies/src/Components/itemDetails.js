import React, { useState, useEffect } from "react";
import style from "./ItemDetails.module.css";
import CardHolder from "./Card/CardHolder";

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
    fetchRec();
  }, [match]);

  const [item, setItem] = useState({});
  const [Recommendations, setRecommendations] = useState([]);

  const path = `https://image.tmdb.org/t/p/w185`;
  const backdroppath = `https://image.tmdb.org/t/p/w1280`;

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US`
    );
    const item = await fetchItem.json();
    console.log(item);
    setItem(item);
  };

  // const fetchRecommended = async () => {
  //   const fetchRecommended = await fetch(
  //     `https://api.themoviedb.org/3/movie/${match.params.id}/recommendations?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
  //   );

  //   const Recommendations = await fetchRecommended.json();
  //   console.log(Recommendations);
  //   setRecommendations(Recommendations);
  // };

  const fetchRec = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/recommendations?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecommendations(data.results);
      });
  };

  return (
    <div>
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
      <CardHolder header={"Recommended Movies"} movies={Recommendations} />
    </div>
  );
}

export default ItemDetails;
