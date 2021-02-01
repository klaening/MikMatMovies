import React, { useState } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./videoSlider.css";
import "../Global.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div>
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="videoframe-container">
                <div className="title-desc-image">
                  <h3>{slide.text}</h3>
                  <h6>{slide.desc}</h6>
                  <img src={slide.image} width="200px" alt="something" />
                </div>
                <div className="left-arrow">
                  <FaArrowAltCircleLeft id="arrow" onClick={prevSlide} />
                </div>
                <div className="video-container">
                  <iframe
                    title="Video-frame"
                    width="100%"
                    height="100%"
                    src={slide.URL}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  ></iframe>
                </div>
                <div className="right-arrow">
                  <FaArrowAltCircleRight id="arrow" onClick={nextSlide} />
                </div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;
