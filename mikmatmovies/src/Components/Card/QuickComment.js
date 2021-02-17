import React, { useState } from "react";
import "./QuickComment.css";

const QuickComment = (props) => {
  const [comment, setComment] = useState("");

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
          <button type="submit" id="submit_button">
            <i id="comment_close" className="fas fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default QuickComment;
