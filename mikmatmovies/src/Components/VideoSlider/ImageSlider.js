import React, { useState, useEffect } from "react";
import { SliderData } from "./SliderData";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./videoSlider.css";
import "../Global.css";

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trailerList, setTrailerList] = useState([]);
  const [trailer, setTrailer] = useState(null);

  useEffect(() => {
    const movies = fetchUpcoming();
    fetchTrailer(movies);
  }, []);

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

  const fetchUpcoming = async () => {
    let holder = [];

    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setUpcomingMovies(data.results);
        holder = data.results;
      });

    return holder;
  };

  const fetchTrailer = (movies) => {
    let list = [];

    Array.prototype.forEach.call(movies.children, (child) => {
      console.log(child);
    });

    //  movies.forEach((movie) => {
    //    fetch(
    //      `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    //    )
    //      .then((response) => response.json())
    //      .then((data) => {
    //        if (data.results) {
    //          list.push(data.results);
    //          //  setTrailer(data.results);
    //          console.log(list);
    //        } else {
    //          console.log("No trailer");
    //        }
    //      });
    //  });

    //  setTrailerList(list);

    console.log(trailer);
  };

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
                  <div className="image-box">
                    <img src={slide.image} width="100px" alt="something" />
                  </div>
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
    //  <div>
    //    {SliderData.map((slide, index) => {
    //      return (
    //        <div
    //          className={index === current ? "slide active" : "slide"}
    //          key={index}
    //        >
    //          {index === current && (
    //            <div className="videoframe-container">
    //              <div className="title-desc-image">
    //                <h3>{slide.text}</h3>
    //                <h6>{slide.desc}</h6>
    //                <div className="image-box">
    //                  <img src={slide.image} width="100px" alt="something" />
    //                </div>
    //              </div>
    //              <div className="left-arrow">
    //                <FaArrowAltCircleLeft id="arrow" onClick={prevSlide} />
    //              </div>
    //              <div className="video-container">
    //                <iframe
    //                  title="Video-frame"
    //                  width="100%"
    //                  height="100%"
    //                  src={slide.URL}
    //                  frameBorder="0"
    //                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    //                ></iframe>
    //              </div>
    //              <div className="right-arrow">
    //                <FaArrowAltCircleRight id="arrow" onClick={nextSlide} />
    //              </div>
    //            </div>
    //          )}
    //        </div>
    //      );
    //    })}
    //  </div>
  );
};

export default ImageSlider;
