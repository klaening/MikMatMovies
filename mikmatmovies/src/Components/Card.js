import React from "react";
import "./Card.css";
import "./Global.css";

function Card() {
  return (
    <div className="container">
      <div className="movie-poster">
        <img src="black-panther-web.jpg" alt="Movie Poster" />
      </div>

      <button id="heartBtn">{/* <img src="heart.png" alt="" /> */}</button>

      <div className="card-footer">
        <p>Movie Title</p>
        <p>Rating</p>
        <img id="heartImg" src="heart(1).png" alt="" />
      </div>
    </div>
  );
}

// const heartImg = document.getElementById("heartImg");
// const heartBtn = document.getElementById("heartBtn");

// heartBtn.addEventListener("click", () => {
//   console.log("Hello");
//   //   heartImg.classList.add("active");
// });

export default Card;
