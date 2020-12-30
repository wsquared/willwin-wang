import React from 'react';
import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Routes } from 'config';
import { DoubleLinkedListNode } from 'common';
import { useTranslate } from 'hooks';

export const FloatingNav: React.FC = () => {
  const history = useHistory();

  const useStyles = makeStyles({
    arrowLeft: {
      top: '50%',
      position: 'fixed',
      left: '1%',
      cursor: 'pointer',
    },
    arrowRight: {
      top: '50%',
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
    Routes.home,
    Routes.about,
    Routes.portfolio,
    Routes.contact,
  ]);

  const classes = useStyles();

  const translate = useTranslate();

  const currentRouteNode = routesMap.get(
    history.location.pathname === '/' ? Routes.home : history.location.pathname
  );

  const handleClickLeft = () => history.push(currentRouteNode?.prev?.val || '');

  const handleClickRight = () =>
    history.push(currentRouteNode?.next?.val || '');

  return (
    <>
      <ArrowBackOutlined
        titleAccess={translate('backArrow')}
        className={classes.arrowLeft}
        onClick={handleClickLeft}
      />

      <ArrowForwardOutlined
        titleAccess={translate('forwardArrow')}
        className={classes.arrowRight}
        onClick={handleClickRight}
      />
    </>
  );
};
