import React, { useState } from "react";
import "./QuickComment.css";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const QuickComment = (props) => {
  const [comment, setComment] = useState("");

  let movieName = "";
  if (props.movie.type === "movie") {
    movieName = props.movie.title;
  } else if (props.movie.type === "series") {
    movieName = props.movie.name;
  }

  const saveComments = (e) => {
    e.preventDefault();

    let listLocalStorage = JSON.parse(localStorage.getItem("movieComments"));

    if (!listLocalStorage) {
      listLocalStorage = [];
    }

    const commentObject = {
      movieId: props.movie.id,
      comment: comment,
    };

    listLocalStorage.push(commentObject);

    setComment("");
    localStorage.setItem("movieComments", JSON.stringify(listLocalStorage));

    toast.info(`You commented on "${movieName}"!`);

    props.toggleMessage();
  };

  return (
    <div className="comment_main">
      <form onSubmit={saveComments}>
        <div className="comment_top">
          <label id="comment_label" for="w3review">
            Quick Comment
          </label>
        </div>
        <textarea
          id="quick_comment"
          name="quick_comment"
          rows="4"
          cols="16"
          onChange={(e) => setComment(e.target.value)}
          value={comment}
          autoFocus
          type="reset"
        ></textarea>
        <div className="submit_div">
          {comment.length > 0 && (
            <button type="submit" id="submit_button">
              <i id="comment_close" className="fas fa-paper-plane"></i>
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default QuickComment;
