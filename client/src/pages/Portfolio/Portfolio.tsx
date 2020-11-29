import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const Portfolio = () => {
  const useStyles = makeStyles({
    root: {
      height: "200vh",
    },
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="back-to-top-anchor">Hello world, this is all my Portfolio!</div>
    </div>
  );
};
