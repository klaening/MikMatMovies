import React, { useEffect, useState } from "react";
import BackToTop from "../../Components/BackToTop/BackToTop";

//Imported Components

import VideoSlider from "../../Components/VideoSlider/VideoSlider";
import CardHolder from "../../Components/CardHolder/CardHolder";

//Context
import {
  TopRatedMoviesProvider,
  UpcomingMoviesProvider,
  PopularMoviesProvider,
} from "../../Context/MovieContext";

function Start() {
  return (
    <div>
      <UpcomingMoviesProvider>
        <VideoSlider movies />
        <div id="upcoming">
          <CardHolder header="Upcoming movies" />
        </div>
      </UpcomingMoviesProvider>

      <PopularMoviesProvider>
        <div id="popular">
          <CardHolder header="Popular movies" />
        </div>
      </PopularMoviesProvider>

      <TopRatedMoviesProvider>
        <div id="toprated">
          <CardHolder header="Top Rated movies" />
        </div>
      </TopRatedMoviesProvider>
      <BackToTop target="/#top" />
    </div>
  );
}

export default Start;
