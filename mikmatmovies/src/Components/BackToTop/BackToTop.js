import React, { useState } from "react";
import "./BackToTop.css";

const BackToTop = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };
  window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      className="back_container"
      style={{ display: showScroll ? "flex" : "none" }}
    >
      <i class="fas fa-arrow-up fa-2x"></i>
    </div>
  );
};

export default BackToTop;
