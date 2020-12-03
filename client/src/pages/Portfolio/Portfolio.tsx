import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

export const Portfolio: React.FC = () => {
  const useStyles = makeStyles({
    root: {},
  });

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div id="back-to-top-anchor">Hello world, this is all my Portfolio!</div>
    </div>
  );
};
