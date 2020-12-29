import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import { ExitToApp, VideogameAsset } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { PORTFOLIO_ROUTE, TICTACTOE_ROUTE } from 'routes';
import { useTranslate } from 'hooks';
import { useGameDispatch, TictactoePlayer } from 'stores';

export const PortfolioBottomNav: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
    },
    navigationAction: {
      '&:hover': {
        color: theme.palette.primary.main,
      },
    },
  }));

  const classes = useStyles();

  const translate = useTranslate();

  const history = useHistory();

  const location = useLocation();

  const gameDispatch = useGameDispatch();

  const handleNewGameClick = () => {
    if (location.pathname.indexOf(TICTACTOE_ROUTE)) {
      const size = 3;

      gameDispatch({
        type: 'newTictactoeGame',
        state: {
          tictactoe: {
            game: Array.from<number[], number[]>(Array(size), () =>
              Array(size).fill(0)
            ),
            size,
            showWinner: false,
            player: TictactoePlayer.One,
            moveCount: 0,
          },
        },
      });
    }
  };

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        label={translate('new')}
        value="New"
        icon={<VideogameAsset />}
        className={classes.navigationAction}
        onClick={handleNewGameClick}
      />
      <BottomNavigationAction
        label={translate('exit')}
        value="Exit"
        icon={<ExitToApp />}
        onClick={() => history.push(PORTFOLIO_ROUTE)}
        className={classes.navigationAction}
      />
    </BottomNavigation>
  );
};
