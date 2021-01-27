import React, { useState } from "react";
import "./CardOverlay.css";
import HalfRating from "../Imported/HalfRating.js";

const CardOverlay = (props) => {
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
            <img
              src={message ? "message-filled.png" : "message.png"}
              alt="Message button"
            />
          </button>
        </a>
        <button onClick={props.toggleLiked} id="heartBtn">
          <img
            src={props.liked ? "heart-filled.png" : "heart.png"}
            alt="Heart button"
          />
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
};

export default CardOverlay;
