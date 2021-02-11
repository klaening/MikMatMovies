import React, { useState, createContext, useEffect } from "react";

export const MovieContext = createContext();

export const MovieProvider = (props) => {
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
        setUpcomingMovies(data.results);
      });
  };

  return (
    <MovieContext.Provider value={upcomingMovies}>
      {props.children}
    </MovieContext.Provider>
  );
};

// export const TopRatedMovies = (props) => {
//   const [topRatedMovies, setTopRatedMovies] = useState([]);

//   useEffect(() => {
//     fetchTopRated();
//   }, []);

//   const fetchTopRated = async () => {
//     await fetch(
//       `https://api.themoviedb.org/3/movie/top_rated?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US&page=1`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         setTopRatedMovies(data.results);
//       });
//   };

//   return (
//     <MovieContext.Provider value={topRatedMovies}>
//       {props.children}
//     </MovieContext.Provider>
//   );
// };
