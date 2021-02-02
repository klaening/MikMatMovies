import React, { useState, useEffect } from "react";

function ItemDetails({ match }) {
  useEffect(() => {
    fetchItem();
    console.log(match);
  }, []);

  const [item, setItem] = useState({});

  const path = `https://image.tmdb.org/t/p/w185`;

  const fetchItem = async () => {
    const fetchItem = await fetch(
      `https://api.themoviedb.org/3/movie/${match.params.id}?api_key=da74000c93a2ffe65d489852f39d6ddc&language=en-US`
    );
    const item = await fetchItem.json();
    setItem(item);
    console.log(item);
  };

  return (
    <div>
      <h1>{item.title}</h1>
      <h5>{item.overview}</h5>
      <h6>Rating: {item.vote_average}</h6>
      <h6>{item.tagline}</h6>
      <h6>
        WEBSITE:{" "}
        {item.homepage ? (
          <a href={item.homepage}>{item.homepage}</a>
        ) : (
          "no homepage"
        )}
      </h6>

      <img src={path + item.poster_path} alt="image" />
    </div>
  );
}

export default ItemDetails;
