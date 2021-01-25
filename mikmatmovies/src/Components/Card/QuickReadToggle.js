import React from "react";

const QuickReadToggle = (props) => {
  return (
    <div>
      {props.quickReadActive ? (
        <div
          className="icon"
          onClick={function () {
            props.toggleQuickRead();
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
          className="icon"
          onClick={function () {
            props.toggleQuickRead();
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
  );
};

export default QuickReadToggle;
