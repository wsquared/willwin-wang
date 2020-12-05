import React from 'react';
import { makeStyles } from '@material-ui/core';
import { PortfolioCard } from 'components';
import { v4 as uuid } from 'uuid';

export const Portfolio: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });

  const classes = useStyles();

  return (
    <div id="back-to-top-anchor" className={classes.root}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
        return (
          <PortfolioCard key={uuid()} description={'hello'} title={'world'} />
        );
      })}
    </div>
  );
};
