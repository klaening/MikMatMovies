import React, { useState } from "react";
import "./QuickRead.css";

const QuickRead = (props) => {
  const [quickReadClass, setQuickReadClass] = useState("quick-read-body");

  const [quickReadActive, setQuickReadActive] = useState(false);
  const toggleQuickRead = () => {
    setQuickReadActive(!quickReadActive);
    console.log(quickReadActive);

    if (!quickReadActive) {
      setQuickReadClass((quickReadClass) => quickReadClass + " activeTest");
    } else {
      setQuickReadClass("quick-read-body");
    }

    console.log(quickReadClass);
  };

  return (
    <div className={quickReadClass}>
      <div className="icon-holder">
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
      </div>
      {quickReadActive && (
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
