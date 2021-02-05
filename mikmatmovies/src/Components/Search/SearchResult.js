import React from "react";
import CardHolder from "../Card/CardHolder";

const SearchResult = ({ SearchResult }) => {
  return (
    <div>
      <CardHolder header="search" movies={SearchResult} />
    </div>
  );
};

export default SearchResult;
