import React from "react";
import { Container, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const Home = () => {
  const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    },
    typographyContainer: {
      display: "block",
    },
  });

  const classes = useStyles();

  return (
    <Container maxWidth="lg" className={classes.root}>
      <div className={classes.typographyContainer}>
        <Typography align="center" variant="h2" component="h2" gutterBottom>
          Willwin Wang
        </Typography>
        <Typography align="center" variant="h6">
          Fullstack software developer
        </Typography>
      </div>
    </Container>
  );
};

export { Home };
