import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { PortfolioCard } from 'components';
import { v4 as uuid } from 'uuid';

export const Portfolio: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      // width: '100%',
    },
  });

  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} className={classes.root}>
        <PortfolioCard key={uuid()} title={'Tictactoe'} />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
          return (
            <Grid item key={uuid()} xs={12} sm={12} md={6}>
              <PortfolioCard key={uuid()} title={'hello world'} />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
