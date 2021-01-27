import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardOverlay from "./CardOverlay.js";
import movies from "./movies.json";
import "./Card.css";
import "../Global.css";

const Card = (props) => {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    //anropa databas
  };
  //   const [hoverRef, isHovered] = useHover();

  return (
    <div className="card">
      <div className="body">
        <img src={props.movie.image} alt="Movie Poster" />
        {/* <div className="hover">
          <button ref={isHovered}>Click me!</button>
         </div> */}

        <div className="footer">
          <div className="left">
            <p>{props.movie.title}</p>
          </div>

          <div className="right">
            <p>Rating {props.movie.rating}</p>
            {/* Det här funkar inte... */}
            <i className="fas fa-caret-up"></i>

            {liked && <img id="heartImg" src="heart-filled.png" alt="" />}
          </div>
        </div>
      </div>

      <div className="overlay">
        <div id="hidden-overlay">
          <CardOverlay liked={liked} toggleLiked={toggleLiked} />
        </div>
      </div>
    </div>
  );
};

export default Card;
