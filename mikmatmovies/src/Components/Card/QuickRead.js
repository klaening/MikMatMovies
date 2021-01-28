import React, { useState } from "react";
import "./QuickRead.css";
import QuickReadToggle from "./QuickReadToggle";

const QuickRead = (props) => {
  const [quickReadClass, setQuickReadClass] = useState("quickRead inactive");
  const [quickReadActive, setQuickReadActive] = useState(false);
  const [className, setClassName] = useState("className");
  const [scrollClass, setScrollClass] = useState("scroll_inactive");

  const toggleClassName = () => {
    if (className === "className") {
      setClassName("className-active");
    } else {
      setClassName("className");
    }
  };

  const toggleScrollName = () => {
    if (scrollClass === "scroll_inactive") {
      setScrollClass("scroll_active");
    } else {
      setScrollClass("scroll_inactive");
    }
  };

  const toggleQuickRead = () => {
    setQuickReadActive(!quickReadActive);

    if (quickReadClass === "quickRead inactive") {
      setQuickReadClass("quickRead active");
    } else {
      setQuickReadClass("quickRead inactive");
    }
  };

  return (
    <div className="quickRead">
      <QuickReadToggle
        quickReadActive={quickReadActive}
        toggleClassName={toggleClassName}
        toggleQuickRead={toggleQuickRead}
        toggleScrollName={toggleScrollName}
      />
      {quickReadActive && (
        <div className={scrollClass}>
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
