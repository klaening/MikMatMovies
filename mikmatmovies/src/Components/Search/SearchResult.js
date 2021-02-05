import { Divider } from "@material-ui/core";
import React from "react";
import CardHolder from "../Card/CardHolder";

const SearchResult = (props) => {
  console.log(props.SearchResult);
  return (
    <div>
      <CardHolder header="search" movies={props.SearchResult} />
    </div>
  );
};

export default SearchResult;
