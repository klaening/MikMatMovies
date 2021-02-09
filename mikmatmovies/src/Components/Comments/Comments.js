import React, { useState, useEffect } from "react";
import style from "./Comments.module.css";

const Comments = (props) => {
  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);

  useEffect(() => {
    getComments();
  }, [props.movie]);

  const getComments = () => {
    // Hämta listan från ls
    let listLocalStorage = JSON.parse(localStorage.getItem("movieComments"));

    if (!listLocalStorage) {
      listLocalStorage = [];
    } else {
      listLocalStorage = listLocalStorage.filter(
        (comment) => comment.movieId === props.movie.id
      );
    }

    setCommentList(listLocalStorage);
    // Sortera efter movie id
  };

  const saveComments = () => {
    let listLocalStorage = JSON.parse(localStorage.getItem("movieComments"));

    if (!listLocalStorage) {
      listLocalStorage = [];
    }

    const commentObject = {
      movieId: props.movie.id,
      comment: comment,
    };

    listLocalStorage.push(commentObject);
    setCommentList(listLocalStorage);

    localStorage.setItem("movieComments", JSON.stringify(listLocalStorage));
  };

  return (
    <div className={style.container}>
      <h5>Comments:</h5>
      <div className={style.formsContainer}>
        <form onSubmit={saveComments} className={style.form}>
          <input
            required
            className={style.inputField}
            type="text"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment here.."
          />

          <input type="submit" value="Comment" className={style.submit} />
        </form>
      </div>
      <div className={style.commentsContainer}>
        {commentList.map((comment) => {
          return <h6 key={comment.id}>- {comment.comment}</h6>;
        })}
      </div>
    </div>
  );
};

export default Comments;
