import React, { useEffect, useState } from "react";
import BackToTop from "../../Components/BackToTop/BackToTop";

import VideoSlider from "../../Components/VideoSlider/VideoSlider";
import CardHolder from "../../Components/CardHolder/CardHolder";

//Context
import {
  OnTheAirSeriesProvider,
  PopularSeriesProvider,
  TopRatedSeriesProvider,
} from "../../Context/MovieContext";

const TVSeries = () => {
  return (
    <div>
      <OnTheAirSeriesProvider>
        <VideoSlider series />
        <div id="onTheAir">
          <CardHolder header="On the air" />
        </div>
      </OnTheAirSeriesProvider>

      <PopularSeriesProvider>
        <div id="popular">
          <CardHolder header="Popular series" />
        </div>
      </PopularSeriesProvider>

      <TopRatedSeriesProvider>
        <div id="toprated">
          <CardHolder header="Top Rated series" />
        </div>
      </TopRatedSeriesProvider>
      <BackToTop target="/tv-series/#top" />
    </div>
  );
};

export default TVSeries;
