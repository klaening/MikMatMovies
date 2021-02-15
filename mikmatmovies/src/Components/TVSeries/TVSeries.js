import React, { useEffect, useState } from "react";
import BackToTop from "../BackToTop/BackToTop";

import VideoSlider from "../VideoSlider/VideoSlider";
import CardHolder from "../Card/CardHolder";

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
