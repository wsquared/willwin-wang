import React from 'react';
import { Button, makeStyles } from '@material-ui/core';

export const Tictactoe: React.FC = () => {
  const useStyles = makeStyles({
    square: {},
  });

  const classes = useStyles();

  return (
    <>
      Hello world!
      <Button className={classes.square} />
    </>
  );
};
