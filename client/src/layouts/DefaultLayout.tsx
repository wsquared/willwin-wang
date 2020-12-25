import React from 'react';
import { Container, useTheme, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FloatingNav, BottomNav } from 'components';
import { useLocation } from 'react-router-dom';
import { HOME_ROUTE } from 'routes';

export const DefaultLayout: React.FC = ({ children }) => {
  const useStyles = makeStyles({
    desktop: {
      marginTop: '50px',
      marginBottom: '50px',
    },
    mobile: {
      marginTop: '50px',
      marginBottom: '50px',
    },
  });

  const classes = useStyles();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const location = useLocation();

  const matchesHome = new RegExp(`${HOME_ROUTE}|/$`);

  if (matches) {
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
        <BottomNav />
      </Container>
    </>
  );
};
