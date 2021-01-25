import { red } from "@material-ui/core/colors";
import React, { useState } from "react";
import "./QuickRead.css";

const QuickRead = (props) => {
  const [twoClassName, setTwoClassName] = useState("quick-read-body");

  const [quickRead, setQuickRead] = useState(false);
  const toggleQuickRead = () => {
    setQuickRead(!quickRead);
    console.log(quickRead);

    if (!quickRead) {
      setTwoClassName((twoClassName) => twoClassName + " activeTest");
    } else {
      setTwoClassName("quick-read-body");
    }

    console.log(twoClassName);
  };

  //   const quickReadClass = "";
  //   if (this.quickRead) {
  //   }

  return (
    <div className={twoClassName}>
      <div
        className="icon"
        onClick={function () {
          toggleQuickRead();
          props.toggleClassName();
        }}
      >
        <p className="transition600 " id="qrText">
          Quick read
        </p>
        <img
          className="transition600"
          id="qrIcon"
          src="menu.png"
          alt="Quick read"
        />
      </div>
      {quickRead && (
        <div className="review">
          <article className="article">
            <p>{props.movie.title}</p>
            <p>{props.movie.description}</p>
          </article>
        </div>
      )}
    </div>
  );
};

export default QuickRead;
