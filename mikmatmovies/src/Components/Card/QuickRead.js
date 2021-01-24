import React from "react";
import "./QuickRead.css";

const QuickRead = (props) => {
  return (
    <div>
      {props.quickRead && (
        <div className="quick-read-body">
          <div className="review">
            <article className="article">
              <p>{props.movie.title}</p>
            </article>
          </div>
        </div>
      )}
    </div>
  );
};

export default QuickRead;
