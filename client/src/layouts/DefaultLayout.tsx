import React from 'react';
import { Container, useTheme, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FloatingNav, BottomNav } from 'components';
import { useLocation } from 'react-router-dom';
import { Routes } from 'config';

export const DefaultLayout: React.FC = ({ children }) => {
  const useStyles = makeStyles({
    desktop: {
      marginTop: '50px',
      marginBottom: '50px',
      height: '100%',
    },
    mobile: {
      marginTop: '50px',
      marginBottom: '100px',
      height: '100%',
    },
  });

  const classes = useStyles();

  const theme = useTheme();

  const location = useLocation();

  const matchesHome = new RegExp(`${Routes.home}|/$`);

  const matchesDownMd = useMediaQuery(theme.breakpoints.down('md'));

  if (useMediaQuery(theme.breakpoints.up('md'))) {
    return (
      <>
        <Container
          maxWidth="lg"
          className={matchesHome.test(location.pathname) ? '' : classes.desktop}
        >
          <>{children}</>
          <FloatingNav />
        </Container>
      </>
    );
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.mobile}>
        <>{children}</>
        {matchesDownMd ? <BottomNav /> : null}
      </Container>
    </>
  );
};
