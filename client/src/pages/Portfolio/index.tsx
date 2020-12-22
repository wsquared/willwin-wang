import React from 'react';
import { makeStyles, Grid } from '@material-ui/core';
import { PortfolioCard } from 'components';
import { v4 as uuid } from 'uuid';
import { TICTACTOE_ROUTE, SUDOKU_ROUTE, PORTFOLIO_ROUTE } from 'routes';
import { join as joinPath } from 'path';

export const Portfolio: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
    },
  });

  const classes = useStyles();

  return (
    <>
      <Grid container spacing={3} className={classes.root}>
        <Grid item key={uuid()} xs={12} sm={12} md={6}>
          <PortfolioCard
            key={uuid()}
            title={'Tictactoe'}
            link={joinPath(PORTFOLIO_ROUTE, TICTACTOE_ROUTE)}
          />
        </Grid>
        <Grid item key={uuid()} xs={12} sm={12} md={6}>
          <PortfolioCard
            key={uuid()}
            title={'Sudoku'}
            link={joinPath(PORTFOLIO_ROUTE, SUDOKU_ROUTE)}
          />
        </Grid>
      </Grid>
    </>
  );
};
