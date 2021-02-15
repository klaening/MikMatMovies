import React from "react";
import CardHolder from "../Card/CardHolder";

const SearchResult = ({ SearchResult, seriesSearchResult }) => {
  return (
    <div>
      <CardHolder
        header="Movies"
        subTitle={`Results: ${SearchResult.length}`}
        movies={SearchResult}
      />

      <CardHolder
        header="Series"
        subTitle={`Results: ${seriesSearchResult.length}`}
        movies={seriesSearchResult}
      />
    </div>
  );
};

export default SearchResult;
