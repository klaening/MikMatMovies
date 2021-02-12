import React, { useEffect, useState } from "react";
import BackToTop from "./BackToTop/BackToTop";

import VideoSlider from "./VideoSlider/ImageSlider";
import CardHolder from "./Card/CardHolder";

function TVSeries() {
  useEffect(() => {
    fetchPopular();
    fetchTopRated();
    fetchOnTheAir();
  }, []);

  const [topRatedSeries, setTopRatedSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [onTheAirSeries, setOnTheAirSeries] = useState([]);

  const fetchTopRated = async () => {
    await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setTopRatedSeries(data.results);
      });
  };

  const fetchPopular = async () => {
    await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setPopularSeries(data.results);
      });
  };

  const fetchOnTheAir = async () => {
    await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setOnTheAirSeries(data.results);
      });
  };

  return (
    <div>
      <VideoSlider />
      <div id="onTheAir">
        <CardHolder header="On the air" series={onTheAirSeries} />
      </div>
      <div id="popular">
        <CardHolder header="Popular series" series={popularSeries} />
      </div>
      <div id="toprated">
        <CardHolder header="Top Rated series" series={topRatedSeries} />
      </div>
      <BackToTop target="/#top" />
    </div>
  );
}

export default TVSeries;
