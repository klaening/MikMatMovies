import React, { useEffect, useState } from "react";
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

export default function HoverRating(props) {
  const [movieRating, setMovieRating] = useState(null);
  const [value, setValue] = React.useState(null);
  const [hover, setHover] = React.useState(-1);

  useEffect(() => {}, [movieRating]);

  //   const getRatings = () => {
  //     let ratedMovies = JSON.parse(localStorage.getItem("movieRatings"));

  //     if (ratedMovies && ratedMovies.length > 0) {
  //       var index = ratedMovies.findIndex((x) => x.id === props.movie.id);

  //       if (index >= 0) {
  //         setMovieRating();
  //       }
  //     }
  //   };

  const storeRating = () => {
    let ratingList = JSON.parse(localStorage.getItem("movieRatings"));

    if (!ratingList) {
      ratingList = [];
    }

    if (!movieRating) {
      console.log("Something went wrong");
      return null;
    }

    ratingList.push(movieRating);

    localStorage.setItem("movieRatings", JSON.stringify(ratingList));
    console.log("stored!");
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={(event, newValue) => {
          setValue(newValue);
          setMovieRating({ id: props.movie.id, rating: newValue });
          storeRating();
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
