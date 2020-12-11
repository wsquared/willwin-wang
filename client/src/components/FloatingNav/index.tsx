import React from 'react';
import { Fab } from '@material-ui/core';
import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  PORTFOLIO_ROUTE,
  ABOUT_ROUTE,
} from 'routes';
import { buildDoubleLinkedListNodes } from 'common';

export const FloatingNav: React.FC = () => {
  const history = useHistory();

  const useStyles = makeStyles({
    arrowLeft: {
      top: '50%',
      bottom: '50%',
      position: 'fixed',
      left: '1%',
    },
    arrowRight: {
      top: '50%',
      bottom: '50%',
      position: 'fixed',
      right: '1%',
    },
  });

  const routesMap = buildDoubleLinkedListNodes(
    [HOME_ROUTE, HOME_ROUTE],
    [ABOUT_ROUTE, ABOUT_ROUTE],
    [PORTFOLIO_ROUTE, PORTFOLIO_ROUTE],
    [CONTACT_ROUTE, CONTACT_ROUTE]
  );

  const classes = useStyles();

  const currentRouteNode = routesMap.get(
    history.location.pathname === '/' ? HOME_ROUTE : history.location.pathname
  );

  const handleClickLeft = () => history.push(currentRouteNode?.prev?.val || '');

  const handleClickRight = () =>
    history.push(currentRouteNode?.next?.val || '');

  return (
    <>
      <Fab className={classes.arrowLeft} onClick={handleClickLeft}>
        <ArrowBackOutlined />
      </Fab>
      <Fab className={classes.arrowRight} onClick={handleClickRight}>
        <ArrowForwardOutlined />
      </Fab>
    </>
  );
};
