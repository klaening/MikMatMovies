import React, { useState, useEffect } from "react";
import style from "./Comments.module.css";

const Comments = (props) => {
  const [comment, setComment] = useState("");
  let listOfComments = [
    "Hate this movie! Makes no sence at all!",
    "Awesome video",
    "Cute actor!",
  ];

  const handleComments = () => {
    listOfComments.push(comment);
  };

  useEffect(() => {
    handleComments();
  }, []);
  return (
    <div className={style.container}>
      <h4>Comments about {props.movie.title}</h4>
      <div className={style.formsContainer}>
        <form onSubmit={handleComments} className={style.form}>
          <input
            className={style.inputField}
            type="text"
            onChange={(e) => setComment(e.target.value)}
            placeholder="Comment here.."
          />

          <input type="submit" value="Comment" className={style.submit} />
        </form>
      </div>
      <div className={style.commentsContainer}>
        {listOfComments.map((comment) => {
          return <h6>- {comment}</h6>;
        })}
      </div>
    </div>
  );
};

export default Comments;
