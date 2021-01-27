import React, { useState } from "react";
import style from "./CardOverlay.module.css";
import "../Global.css";
import HalfRating from "../Imported/HalfRating.js";
import QuickRead from "./QuickRead";

const CardOverlay = (props) => {
  const [message, setMessage] = useState(false);
  const toggleMessage = () => {
    setMessage(!message);
  };

  return (
    <div className={style.main}>
      <div className={style.overlayBody}>
        <div className={style.buttons}>
          {/* Ska tas till en annan sida när man klickar på message */}
          <a href="#">
            <button id={style.messageBtn} onClick={toggleMessage}>
              <img
                src={message ? "message-filled.png" : "message.png"}
                alt="Message button"
              />
            </button>
          </a>
          <button id={style.heartBtn} onClick={props.toggleLiked}>
            <img
              src={props.liked ? "heart-filled.png" : "heart.png"}
              alt="Heart button"
            />
          </button>
        </div>

        <div className={style.rating}>
          <p>Your rating:</p>
          <HalfRating />
        </div>
      </div>

      <QuickRead movie={props.movie} />
    </div>
  );
};

export default CardOverlay;
