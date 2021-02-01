import React from "react";

//Imported Components

import { ToastContainer } from "react-toastify";
import movies from "./Card/movies.json";
import VideoSlider from "./VideoSlider/ImageSlider";
import { SliderData } from "./VideoSlider/SliderData";
import CardHolder from "./Card/CardHolder";

function Start(props) {
  return (
    <div>
      <VideoSlider slides={SliderData} />
      <CardHolder header="test" movies={movies} />
      <CardHolder header="Search" movies={movies} />
      <ToastContainer
        position="bottom-center"
        autoClose={4000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover
      />
    </div>
  );
}

export default Start;
