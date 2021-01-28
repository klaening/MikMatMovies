import React, { useState } from "react";
import "../Global.css";
import style from "./CardOverlay.module.css";
import HalfRating from "../Imported/HalfRating.js";
import QuickRead from "./QuickRead";

const CardOverlay = (props) => {
  const [message, setMessage] = useState(false);
  const toggleMessage = () => {
    setMessage(!message);
  };

  const [className, setClassName] = useState("quickRead-inactive");
  const toggleClassName = () => {
    if (className === "quickRead-inactive") {
      setClassName(style.quickRead);
    } else {
      setClassName("quickRead-inactive");
    }
  };

  return (
    <div className={style.main}>
      <div className={style.overlayBody}>
        <div className={style.buttons}>
          <a href="#">
            <button id={style.messageBtn} onClick={toggleMessage}>
              <img
                src={
                  message ? "./icons/message-filled.png" : "./icons/message.png"
                }
                alt="Message button"
              />
            </button>
          </a>
          <button id={style.heartBtn} onClick={props.toggleLiked}>
            <img
              src={
                props.liked ? "./icons/heart-filled.png" : "./icons/heart.png"
              }
              alt="Heart button"
            />
          </button>
        </div>

        <div className={style.rating}>
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
