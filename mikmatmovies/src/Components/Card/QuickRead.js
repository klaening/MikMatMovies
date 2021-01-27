import React, { useState } from "react";
import "./QuickRead.css";

const QuickRead = (props) => {
  const qrClassName = "quickRead";
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
      <div className="qrIconHolder">
        {!quickReadActive ? (
          <div
            className="qrIcon"
            onClick={function () {
              toggleQuickRead();
              props.toggleClassName();
            }}
          >
            <p className="transition600" id="qrText">
              Quick read
            </p>
            <i className="fa fa-caret-up fa-2x transition600" id="qrIcon"></i>
          </div>
        ) : (
          <div
            className="qrIconClose"
            onClick={function () {
              toggleQuickRead();
              props.toggleClassName();
            }}
          >
            <p className="transition600" id="qrText">
              Close
            </p>
            <i className="fa fa-times fa-lg transition600" id="qrIconClose"></i>
          </div>
        )}
      </div>
      {quickReadActive && (
        <div className="scroll">
          <article>
            <h6>
              <b>{props.movie.title}</b>
            </h6>
            <p>{props.movie.description}</p>
          </article>
        </div>
      )}
    </body>
  );
};

export default QuickRead;
