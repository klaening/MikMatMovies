import React from "react";
import "./QuickReadToggle.css";

const QuickReadToggle = (props) => {
  return (
    <div className="qrIconHolder">
      {!props.quickReadActive ? (
        <div
          className="toggleIcon"
          onClick={function () {
            props.toggleQuickRead();
            props.toggleScrollName();
          }}
        >
          <p id="textToggle">Quick read</p>
          <i className="fa fa-caret-up fa-2x transition600" id="iconToggle"></i>
        </div>
      ) : (
        <div
          className="qrIconClose"
          onClick={function () {
            props.toggleQuickRead();
            props.toggleScrollName();
          }}
        >
          <p id="textToggle">Close</p>
          <i className="fa fa-times fa-lg transition600" id="qrIconClose"></i>
        </div>
      )}
    </div>
  );
};

export default QuickReadToggle;
