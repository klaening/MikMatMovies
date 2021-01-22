import React, { useState } from "react";
import "./CardOverlay.css";

function CardOverlay() {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    //anropa databas
  };

  return (
    <div className="overlay-body">
      <div className="buttons">
        <button>
          <img src="message.png" alt="Message button" />
        </button>
        <button onClick={toggleLiked} id="heartBtn">
          {!liked && <img src="heart(1).png" alt="Heart button" />}
          {liked && <img src="heart.png" alt="Heart button" />}
        </button>
      </div>

      <div className="rating">
        <p>Your rating:</p>
        <img src="video-example.jpg" alt="" />
      </div>
      <div className="quick-read">
        <p>Quick read</p>
        <img src="menu.png" id="test" alt="" />
      </div>
    </div>
  );
}

export default CardOverlay;
