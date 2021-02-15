import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const UpcomingMoviesProvider = (props) => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    fetchUpcoming();
  }, []);

  const fetchUpcoming = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/upcoming?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((element) => {
          element["type"] = "movie";
        });
        setUpcomingMovies(data.results);
      });
  };

  return (
    <MovieContext.Provider value={upcomingMovies}>
      {props.children}
    </MovieContext.Provider>
  );
};

export const PopularMoviesProvider = (props) => {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    fetchTopRated();
  }, []);

  const fetchTopRated = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((element) => {
          element["type"] = "movie";
        });
        setPopularMovies(data.results);
      });
  };

  return (
    <MovieContext.Provider value={popularMovies}>
      {props.children}
    </MovieContext.Provider>
  );
};

export const TopRatedMoviesProvider = (props) => {
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    fetchTopRated();
  }, []);

  const fetchTopRated = async () => {
    await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((element) => {
          element["type"] = "movie";
        });
        setTopRatedMovies(data.results);
      });
  };

  return (
    <MovieContext.Provider value={topRatedMovies}>
      {props.children}
    </MovieContext.Provider>
  );
};

export const OnTheAirSeriesProvider = (props) => {
  const [onTheAirSeries, setOnTheAirSeries] = useState([]);

  useEffect(() => {
    fetchTopRated();
  }, []);

  const fetchTopRated = async () => {
    await fetch(
      `https://api.themoviedb.org/3/tv/on_the_air?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((element) => {
          element["type"] = "series";
        });
        setOnTheAirSeries(data.results);
      });
  };

  return (
    <MovieContext.Provider value={onTheAirSeries}>
      {props.children}
    </MovieContext.Provider>
  );
};

export const PopularSeriesProvider = (props) => {
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    fetchTopRated();
  }, []);

  const fetchTopRated = async () => {
    await fetch(
      `https://api.themoviedb.org/3/tv/popular?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((element) => {
          element["type"] = "series";
        });
        setPopularSeries(data.results);
      });
  };

  return (
    <MovieContext.Provider value={popularSeries}>
      {props.children}
    </MovieContext.Provider>
  );
};

export const TopRatedSeriesProvider = (props) => {
  const [topRatedSeries, setTopRatedSeries] = useState([]);

  useEffect(() => {
    fetchTopRated();
  }, []);

  const fetchTopRated = async () => {
    await fetch(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => {
        data.results.forEach((element) => {
          element["type"] = "series";
        });
        setTopRatedSeries(data.results);
      });
  };

  return (
    <MovieContext.Provider value={topRatedSeries}>
      {props.children}
    </MovieContext.Provider>
  );
};
