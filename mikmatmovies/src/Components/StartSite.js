import React, { useEffect, useState } from "react";
import BackToTop from "./BackToTop/BackToTop";

//Imported Components

import VideoSlider from "./VideoSlider/VideoSlider";
import CardHolder from "./Card/CardHolder";

function Start() {
  useEffect(() => {
    fetchPopular();
    fetchTopRated();
    fetchUpcoming();
  }, []);

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const fetchTopRated = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setTopRatedMovies(data.results);
      });
  };

  const fetchPopular = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularMovies(data.results);
      });
  };

  const fetchUpcoming = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setUpcomingMovies(data.results);
      });
  };

  return (
    <div>
      <VideoSlider movies />
      <div id="upcoming">
        <CardHolder header="Upcoming movies" movies={upcomingMovies} />
      </div>
      <div id="popular">
        <CardHolder header="Popular movies" movies={popularMovies} />
      </div>
      <div id="toprated">
        <CardHolder header="Top Rated movies" movies={topRatedMovies} />
      </div>
      <BackToTop target="/#top" />
    </div>
  );
}

export default Start;
