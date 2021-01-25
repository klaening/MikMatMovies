import React, { useState } from "react";
import "./QuickRead.css";

const QuickRead = (props) => {
  const qrClassName = "quick-read";
  const [quickReadClass, setQuickReadClass] = useState(qrClassName);

  const [quickReadActive, setQuickReadActive] = useState(false);
  const toggleQuickRead = () => {
    setQuickReadActive(!quickReadActive);
    console.log(quickReadActive);

    if (!quickReadActive) {
      setQuickReadClass(qrClassName + " active");
    } else {
      setQuickReadClass(qrClassName);
    }

    console.log(quickReadClass);
  };

  return (
    <body className={quickReadClass}>
      <div className="icon-holder">
        {!quickReadActive ? (
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
        ) : (
          <div
            className="icon-close"
            onClick={function () {
              toggleQuickRead();
              props.toggleClassName();
            }}
          >
            <p className="transition600 " id="qrText">
              Close
            </p>
            <img
              className="transition600"
              id="qrIcon"
              src="close.png"
              alt="Quick read"
            />
          </div>
        )}
      </div>
      {quickReadActive && (
        <div className="scroll">
          <article>
            <h4>{props.movie.title}</h4>
            <p>{props.movie.description}</p>
          </article>
        </div>
      )}
    </body>
  );
};

export default QuickRead;
