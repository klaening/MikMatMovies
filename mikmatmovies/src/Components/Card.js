import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardOverlay from "./CardOverlay.js";
import "./Card.css";
import "./Global.css";

function Card() {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    //anropa databas
  };
  //   const [hoverRef, isHovered] = useHover();

  return (
    <div className="card">
      <div className="body">
        <img src="antman.jpg" alt="Movie Poster" />
        {/* <button onClick={toggleLiked} id="heartBtn">
          Heart
        </button> */}
        {/* <div className="hover">
          <button ref={isHovered}>Click me!</button>
         </div> */}

        <div className="footer">
          <p>Movie Title</p>

          <img id="menuImg" src="menu.png" alt="" />

          <div className="right">
            <p>Rating 7.2</p>

            {/* Det här funkar inte... */}
            <i className="fas fa-caret-up"></i>

            {liked && <img id="heartImg" src="heart(1).png" alt="" />}
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
  );
}

export default Card;
