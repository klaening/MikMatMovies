import React from "react";
import "./QuickRead.css";

const QuickReadToggle = (props) => {
  return (
    <div>
      {!props.quickReadActive ? (
        <div
          className="qrIcon"
          onClick={function () {
            props.toggleQuickRead();
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
            props.toggleQuickRead();
            props.toggleClassName();
          }}
        >
          <p className="transition600" id="qrText">
            Close
          </p>
          <i className="fa fa-times fa-lg transition600" id="qrIconClose"></i>
        </div>
      )}

      {/* {props.quickReadActive ? (
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
      )} */}
    </div>
  );
};

export default QuickReadToggle;
