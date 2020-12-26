import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import { ExitToApp, VideogameAsset } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { PORTFOLIO_ROUTE } from 'routes';
import { useTranslate } from 'hooks';

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

  return (
    <BottomNavigation className={classes.root}>
      <BottomNavigationAction
        label={translate('new')}
        value="New"
        icon={<VideogameAsset />}
        className={classes.navigationAction}
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
