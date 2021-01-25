import React, { useState } from "react";
import "./CardOverlay.css";
import HalfRating from "../Imported/HalfRating.js";
import QuickRead from "./QuickRead";

const CardOverlay = (props) => {
  const [message, setMessage] = useState(false);
  const toggleMessage = () => {
    setMessage(!message);
  };

  const [className, setClassName] = useState("quick-read");
  const toggleClassName = () => {
    if (className === "quick-read") {
      setClassName("active");
    } else {
      setClassName("quick-read");
    }
  };

  return (
    <div className="full">
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
      </div>

      <div className={className}>
        <QuickRead toggleClassName={toggleClassName} movie={props.movie} />
      </div>
    </div>
  );
};

export default CardOverlay;
