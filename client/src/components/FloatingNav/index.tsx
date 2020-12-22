import React from 'react';
import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  CONTACT_ROUTE,
  HOME_ROUTE,
  PORTFOLIO_ROUTE,
  ABOUT_ROUTE,
} from 'routes';
import { DoubleLinkedListNode } from 'common';

export const FloatingNav: React.FC = () => {
  const history = useHistory();

  const useStyles = makeStyles({
    arrowLeft: {
      top: '48%',
      position: 'fixed',
      left: '1%',
      cursor: 'pointer',
    },
    arrowRight: {
      top: '48%',
      position: 'fixed',
      right: '1%',
      cursor: 'pointer',
    },
  });

  const buildDoubleLinkedListNodes = (
    keys: string[]
  ): Map<string, DoubleLinkedListNode<string, string>> => {
    let head = new DoubleLinkedListNode<string, string>(keys[0], keys[0]);
    const cache = new Map<string, DoubleLinkedListNode<string, string>>();
    cache.set(keys[0], head);
    const temp = head;

    for (const key of keys.slice(1)) {
      const node = new DoubleLinkedListNode(key, key);
      cache.set(key, node);
      head.next = node;
      node.prev = head;
      head = head.next;
    }

    head.next = temp;
    temp.prev = head;

    return cache;
  };

  const routesMap = buildDoubleLinkedListNodes([
    HOME_ROUTE,
    ABOUT_ROUTE,
    PORTFOLIO_ROUTE,
    CONTACT_ROUTE,
  ]);

  const classes = useStyles();

  const currentRouteNode = routesMap.get(
    history.location.pathname === '/' ? HOME_ROUTE : history.location.pathname
  );

  const handleClickLeft = () => history.push(currentRouteNode?.prev?.val || '');

  const handleClickRight = () =>
    history.push(currentRouteNode?.next?.val || '');

  return (
    <>
      <ArrowBackOutlined
        className={classes.arrowLeft}
        onClick={handleClickLeft}
      />
      <ArrowForwardOutlined
        className={classes.arrowRight}
        onClick={handleClickRight}
      />
    </>
  );
};
