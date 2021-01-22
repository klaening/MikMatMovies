import React, { useState } from "react";
import "./CardOverlay.css";
import HalfRating from "../Imported/HalfRating.js";

function CardOverlay() {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    //anropa databas
  };

  const [message, setMessage] = useState(false);
  const toggleMessage = () => {
    setMessage(!message);
  };

  return (
    <div className="overlay-body">
      <div className="buttons">
        {/* Ska tas till en annan sida när man klickar på message */}
        <a href="#">
          <button onClick={toggleMessage} id="messageBtn">
            {!message && <img src="message-filled.png" alt="Message button" />}
            {message && <img src="message.png" alt="Message button" />}
          </button>
        </a>
        <button onClick={toggleLiked} id="heartBtn">
          {!liked && <img src="heart-filled.png" alt="Heart button" />}
          {liked && <img src="heart.png" alt="Heart button" />}
        </button>
      </div>

      <div className="rating">
        <p>Your rating:</p>
        <HalfRating />
      </div>
      <div className="quick-read">
        <p className="transition600" id="qrText">
          Quick read
        </p>
        <img className="transition600" id="qrImg" src="menu.png" alt="" />
      </div>
    </div>
  );
}

export default CardOverlay;
