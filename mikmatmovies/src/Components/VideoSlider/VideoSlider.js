import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./VideoSlider.css";
import "../Global.css";

import Spinner from "../Spinners/Spinner";

const VideoSlider = ({
  movies: moviesBool = false,
  series: seriesBool = false,
}) => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);
  const [trailerList, setTrailerList] = useState([]);

  useEffect(async () => {
    const fetchedSlides = await fetchSlides();
    fetchTrailers(fetchedSlides);
  }, []);

  const imagePath = "https://image.tmdb.org/t/p/original";
  let length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    length = slides.length;
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  const fetchSlides = async () => {
    let slides = [];
    let path = "";

    if (moviesBool) {
      path = `https://api.themoviedb.org/3/movie/upcoming?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`;
    } else if (seriesBool) {
      path = `https://api.themoviedb.org/3/tv/on_the_air?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`;
    }

    await fetch(path)
      .then((response) => response.json())
      .then((data) => {
        setSlides(data.results);
        slides = data.results;
      });

    return slides;
  };

  const fetchTrailers = (items) => {
    let list = [];
    let path = "";

    if (moviesBool) {
      path = "https://api.themoviedb.org/3/movie/";
    } else if (seriesBool) {
      path = "https://api.themoviedb.org/3/tv/";
    }

    items.map((item) => {
      fetch(
        `${path}${item.id}/videos?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          let trailer = data.results.find((x) => x.type === "Trailer");
          if (!trailer) {
            trailer = data.results[0];
          }

          if (trailer) {
            list.push({ movieId: item.id, trailer: trailer });
          } else {
            const index = items.findIndex((x) => x.id === item.id);
            if (index > -1) {
              items.splice(index, 1);
              setSlides(items);
            }
            console.log("No trailer");
          }

          setTrailerList(list);
        });
    });
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const key = (movie) => {
    //Kraschar ibland, I don't fucking know why
    if (movie && movie.id && trailerList && trailerList.length > 0) {
      const index = trailerList.findIndex((x) => x.movieId === movie.id);
      if (index > -1) {
        let thing = trailerList[index].trailer.key;

        if (thing) {
          return thing;
        }
      }

      // let thing = trailerList.find((x) => x.movieId === movie.id).trailer.key;
      // if (thing) {
      //   return thing;
      // }
    }
  };

  if (!trailerList || trailerList <= 0) {
    return (
      <div className="videoframe-container">
        <Spinner />
      </div>
    );
  } else {
    return (
      <div>
        {slides.map((slide, index) => (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="videoframe-container">
                <div className="title-desc-image">
                  {moviesBool ? <h3>{slide.title}</h3> : <h3>{slide.name}</h3>}
                  <div className="image-box">
                    {slide.poster_path ? (
                      <img
                        src={imagePath + slide.poster_path}
                        width="100px"
                        alt={slide.title}
                        align="left"
                      />
                    ) : (
                      <p>No image available</p>
                    )}
                  </div>
                  <h6>{slide.overview}</h6>
                </div>
                <div className="left-arrow">
                  <FaArrowAltCircleLeft id="arrow" onClick={prevSlide} />
                </div>
                <div className="video-container">
                  <iframe
                    title="Video-frame"
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${key(
                      slide
                    )}?autoplay=1&mute=1`}
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
        ))}
      </div>
    );
  }
};

export default VideoSlider;
