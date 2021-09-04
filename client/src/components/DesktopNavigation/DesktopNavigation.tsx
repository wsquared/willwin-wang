import React, { ReactNode, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import { ArrowBackOutlined, ArrowForwardOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Routes } from 'config';
import { DoubleLinkedListNode } from 'common';
import { useTranslate } from 'hooks';
import ReactGA from 'react-ga';

const DesktopNavigation: React.FC<{ children: ReactNode }> = ({ children }) => {
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

  const routesCache = buildDoubleLinkedListNodes([
    Routes.home,
    Routes.about,
    Routes.portfolio,
    Routes.contact,
  ]);

  const classes = useStyles();

  const translate = useTranslate();

  const currentRouteNode = routesCache.get(
    history.location.pathname === '/' ? Routes.home : history.location.pathname
  );

  const handleClickLeft = () => {
    history.push(currentRouteNode?.prev?.val || '');
    ReactGA.event({
      category: 'Floating Navigation Links',
      action: 'Clicked left arrow',
      label: `Navigated left to ${currentRouteNode?.prev?.val}`,
    });
  };

  const handleClickRight = () => {
    history.push(currentRouteNode?.next?.val || '');
    ReactGA.event({
      category: 'Floating Navigation Links',
      action: 'Clicked right arrow',
      label: `Navigated right to ${currentRouteNode?.next?.val}`,
    });
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      history.push(currentRouteNode?.next?.val || '');
      ReactGA.event({
        category: 'Floating Navigation Keys',
        action: 'Pressed ArrowRight',
        label: `Navigated right to ${currentRouteNode?.next?.val}`,
      });
    } else if (event.key === 'ArrowLeft') {
      history.push(currentRouteNode?.prev?.val || '');
      ReactGA.event({
        category: 'Floating Navigation Keys',
        action: 'Pressed ArrowLeft',
        label: `Navigated left to ${currentRouteNode?.prev?.val}`,
      });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  return (
    <>
      <IconButton
        className={classes.arrowLeft}
        aria-label={translate('backArrow')}
        size={'medium'}
        onClick={handleClickLeft}
      >
        <ArrowBackOutlined
          titleAccess={translate('backArrow')}
          className={classes.arrowLeft}
        />
      </IconButton>
      {children}
      <IconButton
        className={classes.arrowRight}
        aria-label={translate('forwardArrow')}
        size={'medium'}
        onClick={handleClickRight}
      >
        <ArrowForwardOutlined
          titleAccess={translate('forwardArrow')}
          className={classes.arrowRight}
        />
      </IconButton>
    </>
  );
};

export { DesktopNavigation };
