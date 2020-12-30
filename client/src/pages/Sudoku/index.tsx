import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';

export const Sudoku: React.FC = () => {
  const useStyles = makeStyles(() => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '80%',
    },
  }));

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <Typography variant="h6" component="h2">
        Coming soon!
      </Typography>
    </Container>
  );
};
