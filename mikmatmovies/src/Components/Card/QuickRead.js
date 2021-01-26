import React, { useState } from "react";
import "./QuickRead.css";
import QuickReadToggle from "./QuickReadToggle";

const QuickRead = (props) => {
  const qrClassName = "quickRead";
  const [quickReadClass, setQuickReadClass] = useState(qrClassName);
  const [quickReadActive, setQuickReadActive] = useState(false);

  const toggleQuickRead = () => {
    setQuickReadActive(!quickReadActive);
    props.toggleClassName();

    if (quickReadClass === "quickRead") {
      setQuickReadClass(qrClassName + " active");
    } else {
      setQuickReadClass(qrClassName);
    }
  };

  return (
    <div className={quickReadClass}>
      <QuickReadToggle
        quickReadActive={quickReadActive}
        toggleClassName={props.toggleClassName}
        toggleQuickRead={toggleQuickRead}
      />
      {quickReadActive && (
        <div className="scroll">
          <article>
            <h4>{props.movie.title}</h4>
            <p>{props.movie.description}</p>
          </article>
        </div>
      )}
    </div>
  );
};

export default QuickRead;
