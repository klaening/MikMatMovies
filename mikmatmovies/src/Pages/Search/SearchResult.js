import React from "react";
import CardHolder from "../../Components/CardHolder/CardHolder";
import { HashLink as Link } from "react-router-hash-link";

const SearchResult = ({ SearchResult, seriesSearchResult, searchString }) => {
  return (
    <div>
      <h2>Search results for "{searchString}"</h2>
      <Link smooth to="#TVSERIES">
        Tv-Series
      </Link>
      <CardHolder
        header="Movies"
        subTitle={`Results: ${SearchResult.length}`}
        movies={SearchResult}
      />
      <div id="TVSERIES">
        <CardHolder
          header="Series"
          subTitle={`Results: ${seriesSearchResult.length}`}
          movies={seriesSearchResult}
        />
      </div>
    </div>
  );
};

export default SearchResult;
