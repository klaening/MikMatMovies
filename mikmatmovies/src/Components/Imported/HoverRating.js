import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";

const labels = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

const useStyles = makeStyles({
  root: {
    width: 200,
    display: "flex",
    alignItems: "center",
  },
});

export default function HoverRating({ movie }) {
  const [hover, setHover] = useState(-1);
  const [value, setValue] = useState(null);
  const name = `${movie.id}-rating`;
  const movieRatings = "movieRatings";

  //Kolla rating vid start
  useEffect(() => {
    getRatings();
  }, []);

  const getRatings = () => {
    let response = JSON.parse(localStorage.getItem(movieRatings));

    if (response) {
      var index = response.findIndex((x) => x.movieId === movie.id);

      if (index > -1) {
        setValue(response[index].rating);
      }
    }
  };

  const storeRating = (newValue) => {
    let response = JSON.parse(localStorage.getItem(movieRatings));

    if (!response) {
      response = [];
    }

    var index = response.findIndex((x) => x.movieId === movie.id);

    if (index === -1) {
      const newRating = { movieId: movie.id, rating: newValue };
      response.push(newRating);
    } else {
      response[index].rating = newValue;
    }

    localStorage.setItem(movieRatings, JSON.stringify(response));
    console.log("stored!", movie.id);
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name={name}
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
          storeRating(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
      />
      {value !== null && (
        <Box ml={2}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </div>
  );
}
