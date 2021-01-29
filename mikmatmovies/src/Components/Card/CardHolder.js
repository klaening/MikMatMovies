import React from "react";
import Card from "./Card";
import movies from "./movies.json";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import "./CardHolder.css";
import "../Global.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
}));

export default function CardHolder() {
  const classes = useStyles();

  return (
    <div className="cardHolder-body">
      <div className="ch-header">
        <h2>Recommended</h2>
      </div>
      <div className={classes.root}>
        <Grid
          container
          spacing={2}
          direction="row"
          justify="center"
          alignItems="flex-start"
        >
          {movies.map((movie) => (
            <Grid
              justify="center"
              item
              xs={12}
              sm={6}
              md={3}
              key={movie.id.toString()}
            >
              <Card movie={movie} />
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="test"></div>
    </div>
  );
}
