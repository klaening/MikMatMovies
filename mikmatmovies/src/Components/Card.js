import React, { useState } from "react";
import "./Card.css";
import "./Global.css";

function Card() {
  const [liked, setLiked] = useState(false);
  const toggleLiked = () => {
    setLiked(!liked);
    //anropa databas
  };

  return (
    <div className="card">
      <img src="black-panther-web.jpg" alt="Movie Poster" />

      {/* <button onClick={toggleLiked} id="heartBtn"></button> */}

      <div className="footer">
        <p>Movie Title</p>
        <p>Rating</p>
        {liked && <img id="heartImg" src="heart(1).png" alt="" />}
      </div>
    </div>
  );
}

export default Card;
