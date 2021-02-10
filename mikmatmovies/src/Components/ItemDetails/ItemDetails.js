import React, { useState, useEffect } from "react";
import style from "./ItemDetails.module.css";
import CardHolder from "../Card/CardHolder";
import BackToTop from "../BackToTop/BackToTop";
import { TextContainer } from "../../styles/style";
import Comments from "../Comments/Comments";
import HoverRating from "../Imported/HoverRating";

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
    fetchRec();
  }, [match]);

  const [item, setItem] = useState(null);
  const [Recommendations, setRecommendations] = useState([]);

  const path = `https://image.tmdb.org/t/p/w185`;
  const backdroppath = `https://image.tmdb.org/t/p/w1280`;

  const fetchItem = async () => {
    //SetisLoading true
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US`
    );
    const item = await fetchItem.json();
    setItem(item);
  };

  const fetchRec = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}/recommendations?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setRecommendations(data.results);
      });
  };

  const year = () => {
    if (item.release_date) {
      let yearVar = item.release_date;
      let getYear = yearVar.split("-");

      return getYear[0];
    }
  };

  if (!item) {
    return null;
  }
  return (
    <div>
      <div
        className={style.detailContainer}
        style={{
          backgroundImage: `url(${backdroppath + item.backdrop_path})`,
        }}
      >
        <div className={style.contentContainer}>
          <div className={style.titleOverviewContainer}>
            <h3>
              {item.title} &#40;{year()}&#41;
            </h3>
            <p>{item.overview}</p>

            <div>
              {item.vote_count > 0 ? (
                <div className={style.rating}>
                  <h6>
                    Global rating: {item.vote_average} &#40;{item.vote_count}{" "}
                    votes&#41;
                  </h6>
                </div>
              ) : (
                <h6>No rating available</h6>
              )}
              <h6>Your rating:</h6>
              <HoverRating movie={item} />
              <h6>{item.tagline}</h6>
              <h6>
                WEBSITE:{" "}
                {item.homepage ? (
                  <a href={item.homepage}>{item.homepage}</a>
                ) : (
                  <TextContainer>No homepage available</TextContainer>
                )}
              </h6>
            </div>
          </div>
          <div className={style.test}>
            <img
              className={style.imagePoster}
              src={path + item.poster_path}
              alt="Movie poster"
            />
          </div>
        </div>
      </div>
      <Comments movie={item} />
      <CardHolder header="Recommended Movies" movies={Recommendations} />
      <BackToTop target={`/details/${match.params.id}/#top`} />
    </div>
  );
}

export default ItemDetails;
