import React, { useState } from "react";
import "./CardHover.css";

function CardHover() {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    //anropa databas
  };

  return (
    <div className="ch-overlay">
      <div className="buttons">
        <button>
          <img src="message.png" alt="Message button" />
        </button>
        <button onClick={toggleLiked} id="heartBtn">
          <img src="heart.png" alt="Heart button" />
        </button>
      </div>

      <div className="rating">
        <p>Your rating:</p>
      </div>
    </div>
  );
}

export default CardHover;
