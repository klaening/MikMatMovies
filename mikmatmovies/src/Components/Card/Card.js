import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardOverlay from "./CardOverlay.js";
import movies from "./movies.json";
import "./Card.css";
import "../Global.css";

function Card() {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    //anropa databas
  };
  //   const [hoverRef, isHovered] = useHover();

  return (
    <div>
      {movies.map((movie) => (
        <div className="card">
          <div className="body">
            <img src={movie.image} alt="Movie Poster" />
            <button onClick={toggleLiked} id="heartBtn">
              Heart
            </button>
            {/* <div className="hover">
          <button ref={isHovered}>Click me!</button>
         </div> */}

            <div className="footer">
              <div className="left">
                <p>{movie.title}</p>
              </div>

              <div className="right">
                <p>Rating {movie.rating}</p>
                {/* Det här funkar inte... */}
                <i className="fas fa-caret-up"></i>

                {liked && <img id="heartImg" src="heart-filled.png" alt="" />}
              </div>
            </div>
          </div>

          <div className="overlay">
            <div id="hidden-overlay">
              {/* Behöver jag skicka med en prop? */}
              <CardOverlay />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
