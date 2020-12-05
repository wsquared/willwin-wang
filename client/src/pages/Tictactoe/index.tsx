import React from 'react';
import { Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
