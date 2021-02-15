import React, { useEffect, useState } from "react";
import BackToTop from "../BackToTop/BackToTop";

import VideoSlider from "../VideoSlider/ImageSlider";
import CardHolder from "../Card/CardHolder";

const TVSeries = () => {
  useEffect(() => {
    fetchOnTheAir();
    fetchPopular();
    fetchTopRated();
  }, []);

  const [onTheAirSeries, setOnTheAirSeries] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);
  const [topRatedSeries, setTopRatedSeries] = useState([]);

  const fetchOnTheAir = async () => {
    await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setOnTheAirSeries(data.results);
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

  const fetchTopRated = async () => {
    await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setTopRatedSeries(data.results);
      });
  };

  return (
    <div>
      <VideoSlider series />
      <div id="onTheAir">
        {onTheAirSeries && (
          <CardHolder header="On the air" movies={onTheAirSeries} />
        )}
      </div>
      <div id="popular">
        <CardHolder header="Popular series" movies={popularSeries} />
      </div>
      <div id="toprated">
        <CardHolder header="Top Rated series" movies={topRatedSeries} />
      </div>
      <BackToTop target="/#top" />
    </div>
  );
};

export default TVSeries;
