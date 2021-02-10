import React, { useState } from "react";
import "../Global.css";
import style from "./CardOverlay.module.css";
import HoverRating2 from "../Imported/HoverRating2.js";
import QuickRead from "./QuickRead";
import { Link } from "react-router-dom";

const CardOverlay = (props) => {
  const [messageClicked, setMessageClicked] = useState(false);

  const toggleMessage = () => {
    setMessageClicked(!messageClicked);
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
          {/* använd Link */}
          <a href="#">
            <button id={style.messageBtn} onClick={toggleMessage}>
              <img
                src={
                  messageClicked
                    ? "/icons/message-filled.png"
                    : "/icons/message.png"
                }
                alt="Message button"
              />
            </button>
          </a>
          <button id={style.heartBtn} onClick={props.toggleLiked}>
            <img
              src={props.liked ? "/icons/heart-filled.png" : "/icons/heart.png"}
              alt="Heart button"
            />
          </button>
        </div>
        <div className={style.rating}>
          <p>Your rating:</p>
          <HoverRating2 movie={props.movie} />
        </div>
        <div className={style.readmore}>
          <Link to={`/details/${props.movie.id}`}>Read more</Link>
        </div>
      </div>

      <div className={className}>
        <QuickRead toggleClassName={toggleClassName} movie={props.movie} />
      </div>
    </div>
  );
};

export default CardOverlay;
