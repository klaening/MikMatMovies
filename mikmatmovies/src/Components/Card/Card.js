import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardOverlay from "./CardOverlay.js";
import QuickRead from "./QuickRead.js";
import movies from "./movies.json";
import "./Card.css";
import "../Global.css";

const Card = (props) => {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    //anropa databas
  };

  const [quickRead, setQuickRead] = useState(false);
  const toggleQuickRead = () => {
    setQuickRead(!quickRead);
  };
  //   const [hoverRef, isHovered] = useHover();

  return (
    <div className="card">
      <section className="body">
        <img src={props.movie.image} alt="Movie Poster" />
        {/* <div className="hover">
          <button ref={isHovered}>Click me!</button>
         </div> */}

        <footer>
          <div className="left">
            <p>{props.movie.title}</p>
          </div>

          <div className="right">
            <p>Rating {props.movie.rating}</p>
            {/* Det här funkar inte... */}
            <i className="fas fa-caret-up"></i>

            {liked && <img id="heartImg" src="heart-filled.png" alt="" />}
          </div>
        </footer>
      </section>

      <section className="overlay">
        <div id="hidden-overlay">
          <CardOverlay liked={liked} toggleLiked={toggleLiked} />
        </div>

        <div id="quick-read">
          <QuickRead movie={props.movie} />
        </div>
      </section>
    </div>
  );
};

export default Card;
