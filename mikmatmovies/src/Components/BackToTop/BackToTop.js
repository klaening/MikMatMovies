import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import "./BackToTop.css";

const BackToTop = ({ target }) => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <Link smooth to={target}>
      <div className="backTop_main">
        {showScroll && (
          <div className="backTop_container">
            <p id="backTop_text">Back to top</p>
            <button className="backTop_button">
              <i class="fas fa-arrow-up fa-2x"></i>
            </button>
          </div>
        )}
      </div>
    </Link>
  );
};

export default BackToTop;
