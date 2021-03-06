import React, { useState, useEffect } from "react";
import style from "./ItemDetails.module.css";
import CardHolder from "../../Components/CardHolder/CardHolder";
import BackToTop from "../../Components/BackToTop/BackToTop";
import { TextContainer } from "../../styles/style";
import Comments from "../../Components/Comments/Comments";
import HoverRating from "../../Components/Imported/HoverRating";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import storage from "../../Services/storageService";

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
    fetchRec();
    fetchTrailer();
  }, [match]);

  const [item, setItem] = useState(null);
  const [Recommendations, setRecommendations] = useState([]);
  const [trailer, setTrailer] = useState(null);
  const [liked, setLiked] = useState(false);
  const [movieName, setMovieName] = useState("");

  const path = `https://image.tmdb.org/t/p/w185`;
  const backdroppath = `https://image.tmdb.org/t/p/w1280`;

  let itemPath = "";
  if (match.params.type === "movie") {
    itemPath = "https://api.themoviedb.org/3/movie";
  } else if (match.params.type === "series") {
    itemPath = "https://api.themoviedb.org/3/tv";
  }

  const fetchItem = async () => {
    //SetisLoading true

    const fetchedItem = await fetch(
      `${itemPath}/${match.params.id}?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US`
    );
    const item = await fetchedItem.json();
    if (match.params.type === "movie") {
      item["type"] = "movie";
      setMovieName(item.title);
    } else if (match.params.type === "series") {
      item["type"] = "series";
      setMovieName(item.name);
    }
    setItem(item);
    storage.getLiked("likedMovies", item, setLiked);
  };

  const fetchRec = async () => {
    await fetch(
      `${itemPath}/${match.params.id}/recommendations?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((element) => {
          if (match.params.type === "movie") {
            element["type"] = "movie";
          } else if (match.params.type === "series") {
            element["type"] = "series";
          }
        });
        setRecommendations(data.results);
      });
  };

  const fetchTrailer = async () => {
    await fetch(
      `${itemPath}/${match.params.id}/videos?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setTrailer(data.results);
      });
  };

  const toggleLiked = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    if (newLiked) {
      storage.storeLiked("likedMovies", item);
      toast.success(`"${movieName}" was added to favourites!`);
    } else {
      storage.removeLiked("likedMovies", item);
      toast.error(`"${movieName}" was removed from favourites!`);
    }
  };

  const year = () => {
    console.log(item);
    if (item.type === "movie" && item.release_date) {
      let yearVar = item.release_date;
      let getYear = yearVar.split("-");

      return getYear[0];
    } else if (item.type === "series") {
      let yearVar = item.first_air_date;
      let getYear = yearVar.split("-");

      return getYear[0];
    }
  };

  const voteAverage = () => {
    let num = item.vote_average;
    return num.toFixed(1);
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
              {item.type === "movie" ? item.title : item.name} &#40;{year()}
              &#41;
            </h3>
            <h6>{item.tagline}</h6>
            <p>{item.overview}</p>
            <div>
              {item.vote_count > 0 ? (
                <div className={style.rating}>
                  <h6>
                    Global rating: {voteAverage()} &#40;{item.vote_count}{" "}
                    votes&#41;
                  </h6>
                </div>
              ) : (
                <h6>No rating available</h6>
              )}
              <h6>Your rating:</h6>
              <HoverRating movie={item} />
              <h6>
                WEBSITE:{" "}
                {item.homepage ? (
                  <a href={item.homepage}>{item.homepage}</a>
                ) : (
                  <TextContainer>No homepage available</TextContainer>
                )}
              </h6>
              <div>
                <h6>
                  TRAILER:{" "}
                  {trailer && trailer.length > 0 ? (
                    <a
                      href={`https://www.youtube.com/watch?v=${trailer[0].key}`}
                    >
                      {`https://www.youtube.com/watch?v=${trailer[0].key}`}
                    </a>
                  ) : (
                    <h6> No trailer available</h6>
                  )}
                </h6>
              </div>
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
        <button id={style.heartBtn} onClick={toggleLiked}>
          <img
            src={liked ? "/icons/heart-filled.png" : "/icons/heart.png"}
            alt="Heart button"
          />
        </button>
      </div>
      <Comments movie={item} />
      <CardHolder
        header={
          item.type === "movie" ? "Recommended Movies" : "Recommended Series"
        }
        movies={Recommendations}
      />
      <BackToTop
        target={`/details/${match.params.type}/${match.params.id}/#top`}
      />
    </div>
  );
}

export default ItemDetails;
