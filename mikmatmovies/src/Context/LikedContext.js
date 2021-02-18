import React, { useState, createContext, useEffect } from "react";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import storage from "../Services/storageService";

export const LikedContext = createContext();

export const LikedProvider = (props) => {
  const [liked, setLiked] = useState(false);
  const listName = "likedMovies";

  useEffect(() => {
    toggleLiked();
  }, [liked]);

  const toggleLiked = () => {
    const newLiked = !liked;
    setLiked(newLiked);

    let movieName = "";
    if (props.movie.type === "movie") {
      movieName = props.movie.title;
    } else if (props.movie.type === "series") {
      movieName = props.movie.name;
    }

    if (newLiked) {
      storage.storeLiked(listName, props.movie);
      toast.success(`"${movieName}" was added to favourites!`);
    } else {
      storage.removeLiked(listName, props.movie);
      toast.error(`"${movieName}" was removed from favourites!`);
    }
  };

  return (
    <LikedContext.Provider value={{ liked, setLiked }}>
      {props.children}
    </LikedContext.Provider>
  );
};
