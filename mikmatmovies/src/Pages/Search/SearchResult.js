import React from "react";
import CardHolder from "../../Components/CardHolder/CardHolder";
import { HashLink as Link } from "react-router-hash-link";
import BackToTop from "../../Components/BackToTop/BackToTop";

const SearchResult = ({ SearchResult, seriesSearchResult, searchString }) => {
  return (
    <div>
      <h2>Search results for "{searchString}"</h2>
      <Link smooth to="#TVSERIES">
        Tv-series
      </Link>
      <CardHolder
        header="Movies"
        subTitle={`Results: ${SearchResult.length}`}
        movies={SearchResult}
      />
      <div id="TVSERIES">
        <CardHolder
          header="TV-series"
          subTitle={`Results: ${seriesSearchResult.length}`}
          movies={seriesSearchResult}
        />
      </div>
      <BackToTop target="/search/#top" />
    </div>
  );
};

export default SearchResult;
