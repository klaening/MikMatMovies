import React, { useEffect, useState } from "react";

//Imported Components

import { ToastContainer } from "react-toastify";
import jsonMovies from "./Card/movies.json";
import VideoSlider from "./VideoSlider/ImageSlider";
import { SliderData } from "./VideoSlider/SliderData";
import CardHolder from "./Card/CardHolder";

function Start(props) {
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
      {/* <CardHolder header="search" movies={props.SearchResult} /> */}
      <VideoSlider slides={SliderData} />
      <CardHolder header="Upcoming movies" movies={upcomingMovies} />
      <CardHolder header="Popular movies" movies={popularMovies} />
      <CardHolder header="Top Rated movies" movies={topRatedMovies} />
    </div>
  );
}

export default Start;
