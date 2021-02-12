import React, { useState, useEffect } from "react";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./videoSlider.css";
import "../Global.css";

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [trailerList, setTrailerList] = useState([]);

  useEffect(async () => {
    const movies = await fetchUpcoming();
    fetchTrailer(movies);
  }, []);

  const path = "https://image.tmdb.org/t/p/original";
  const length = upcomingMovies.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  //   if (!Array.isArray(slides) || slides.length <= 0) {
  //     return null;
  //   }

  const fetchUpcoming = async () => {
    let movies = [];

    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        setUpcomingMovies(data.results);
        movies = data.results;
      });

    return movies;
  };

  const fetchTrailer = (movies) => {
    let list = [];

    movies.map((movie) => {
      fetch(
        `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
      )
        .then((response) => response.json())
        .then((data) => {
          if (data.results) {
            list.push({ movieId: movie.id, trailer: data.results[0] });
          } else {
            console.log("No trailer");
          }
          setTrailerList(list);
        });
    });
  };

  const key = (movie) => {
    if (trailerList.length > 0) {
      return trailerList.find((x) => x.movieId === movie.id).trailer.key;
    }
  };

  return (
    <div>
      {console.log(upcomingMovies)}
      {upcomingMovies.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <div className="videoframe-container">
                <div className="title-desc-image">
                  <h3>{slide.title}</h3>
                  <h6>{slide.overview}</h6>
                  <div className="image-box">
                    {slide.poster_path ? (
                      <img
                        src={path + slide.poster_path}
                        width="100px"
                        alt={slide.title}
                      />
                    ) : (
                      <p>No image available</p>
                    )}
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
