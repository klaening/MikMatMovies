import React, { useState, createContext, useEffect } from "react";

export const SeriesContext = createContext();

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
    <SeriesContext.Provider value={onTheAirSeries}>
      {props.children}
    </SeriesContext.Provider>
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
    <SeriesContext.Provider value={popularSeries}>
      {props.children}
    </SeriesContext.Provider>
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
    <SeriesContext.Provider value={topRatedSeries}>
      {props.children}
    </SeriesContext.Provider>
  );
};
