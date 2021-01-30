import React from "react";
import Card from "../Card/Card";

const Search = (props) => {
  return (
    <div className="micke">
      <div className="mattis">
        {props.result.map((movie) => (
          //Måsvingar funktion med en return med JSX
          <Card movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
