import React from 'react';
import { Container, useTheme, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { FloatingNav } from 'components';

export const DefaultLayout: React.FC = ({ children }) => {
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
  });

  const classes = useStyles();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('lg'));

  if (matches) {
    return (
      <Container maxWidth="lg" className={classes.root}>
        <FloatingNav />
        <>{children}</>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" className={classes.root}>
      <>{children}</>
    </Container>
  );
};
