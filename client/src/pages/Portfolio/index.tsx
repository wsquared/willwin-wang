import React from 'react';
import { Grid } from '@material-ui/core';
import { PortfolioCard } from 'components';
import { v4 as uuid } from 'uuid';
import { TICTACTOE_ROUTE, SUDOKU_ROUTE, PORTFOLIO_ROUTE } from 'routes';
import { join as joinPath } from 'path';
import { useTranslate } from 'hooks';

export const Portfolio: React.FC = () => {
  const translate = useTranslate();

  return (
    <>
      <Grid container spacing={3}>
        <Grid item key={uuid()} xs={12} sm={12} md={6}>
          <PortfolioCard
            key={uuid()}
            title={translate('tictactoeTitle')}
            tsCodeLink={
              'https://github.com/wsquared/willwin-wang/tree/master/client/src/pages/Tictactoe'
            }
            link={joinPath(PORTFOLIO_ROUTE, TICTACTOE_ROUTE)}
          />
        </Grid>
        <Grid item key={uuid()} xs={12} sm={12} md={6}>
          <PortfolioCard
            key={uuid()}
            tsCodeLink={'#'}
            title={translate('sudokuTitle')}
            link={joinPath(PORTFOLIO_ROUTE, SUDOKU_ROUTE)}
          />
        </Grid>
      </Grid>
    </>
  );
};
