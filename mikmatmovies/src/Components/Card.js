import React, { useState } from "react";
import CardHover from "./CardHover.js";
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
        <button onClick={toggleLiked} id="heartBtn">
          Heart
        </button>
        {/* <div className="hover">
          <button ref={isHovered}>Click me!</button>
         </div> */}

        <div className="footer">
          <p>Movie Title</p>
          <p>Rating</p>

          {liked && <img id="heartImg" src="heart(1).png" alt="" />}
        </div>
      </div>

      <div className="overlay">
        {/* Behöver jag skicka med en prop? */}
        <CardHover />
      </div>
    </div>
  );
}

export default Card;
