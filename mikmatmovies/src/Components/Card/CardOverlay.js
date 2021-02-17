import React, { useState } from "react";
import "../Global.css";
import style from "./CardOverlay.module.css";
import HoverRating from "../Imported/HoverRating.js";
import QuickRead from "./QuickRead";
import QuickComment from "./QuickComment";

import { HashLink } from "react-router-hash-link";

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

          <button id={style.heartBtn} onClick={props.toggleLiked}>
            <img
              src={props.liked ? "/icons/heart-filled.png" : "/icons/heart.png"}
              alt="Heart button"
            />
          </button>
        </div>

        {messageClicked && (
          <QuickComment movie={props.movie} messageClicked={messageClicked} />
        )}

        <div className={style.rating}>
          <p>Your rating:</p>
          <HoverRating movie={props.movie} />
        </div>
        <div className={style.readmore}>
          <HashLink
            smooth
            to={`/details/${props.movie.type}/${props.movie.id}/#top`}
          >
            Read more
          </HashLink>
        </div>
      </div>

      <div className={className}>
        <QuickRead toggleClassName={toggleClassName} movie={props.movie} />
      </div>
    </div>
  );
};

export default CardOverlay;
