import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import { PortfolioCard } from 'components';
import { v4 as uuid } from 'uuid';
import { join as joinPath } from 'path';
import { useTranslate } from 'hooks';
import { Links, Routes } from 'config';

export const Portfolio: React.FC = () => {
  const translate = useTranslate();

  const useStyles = makeStyles((theme) => ({
    root: {
      [theme.breakpoints.up('md')]: {
        paddingLeft: '25px',
        paddingRight: '25px',
      },
    },
  }));

  const classes = useStyles();

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item key={uuid()} xs={12} sm={12} md={6}>
        <PortfolioCard
          key={uuid()}
          title={translate('tictactoeTitle')}
          tsCodeLink={Links.titactoeTsCode}
          // pythonCodeLink={'#'}
          link={joinPath(Routes.portfolio, Routes.tictactoe)}
        />
      </Grid>
      <Grid item key={uuid()} xs={12} sm={12} md={6}>
        <PortfolioCard
          key={uuid()}
          tsCodeLink={'#'}
          // pythonCodeLink={'#'}
          title={translate('sudokuTitle')}
          link={joinPath(Routes.portfolio, Routes.sudoku)}
        />
      </Grid>
    </Grid>
  );
};
