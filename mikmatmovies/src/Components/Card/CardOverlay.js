import React, { useState, useEffect } from "react";
import "../Global.css";
import style from "./CardOverlay.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HalfRating from "../Imported/HalfRating.js";
import QuickRead from "./QuickRead";

const CardOverlay = (props) => {
  useEffect(() => {
    if (props.liked) {
      toast(`${props.movie.title} was added to favourites!`);
    } else {
      toast(`${props.movie.title} was removed from favourites!`);
    }
  }, [props.liked]);

  const [message, setMessage] = useState(false);
  const toggleMessage = () => {
    setMessage(!message);
  };

  return (
    <div className={style.main}>
      <div className={style.overlayBody}>
        <div className={style.buttons}>
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
