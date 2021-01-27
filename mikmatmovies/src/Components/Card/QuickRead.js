import React, { useState } from "react";
import "./QuickRead.css";
import QuickReadToggle from "./QuickReadToggle";

const QuickRead = (props) => {
  const qrClassName = "quickRead inactive";
  const [quickReadClass, setQuickReadClass] = useState(qrClassName);
  const [quickReadActive, setQuickReadActive] = useState(false);
  const [className, setClassName] = useState("className");

  const toggleClassName = () => {
    if (className === "className") {
      setClassName("className-active");
    } else {
      setClassName("className");
    }
  };

  const toggleQuickRead = () => {
    setQuickReadActive(!quickReadActive);
    toggleClassName();

    if (quickReadClass === "quickRead inactive") {
      setQuickReadClass("quickRead active");
    } else {
      setQuickReadClass("quickRead inactive");
    }
  };

  return (
    <div className={quickReadClass}>
      <QuickReadToggle
        quickReadActive={quickReadActive}
        toggleClassName={toggleClassName}
        toggleQuickRead={toggleQuickRead}
      />
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
    </div>
  );
};

export default QuickRead;
