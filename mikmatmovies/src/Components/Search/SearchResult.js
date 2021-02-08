import React from "react";
import CardHolder from "../Card/CardHolder";

const SearchResult = ({ SearchResult }) => {
  return (
    <div>
      <CardHolder
        header="Search results"
        subTitle={`Results: ${SearchResult.length}`}
        movies={SearchResult}
      />
    </div>
  );
};

export default SearchResult;
