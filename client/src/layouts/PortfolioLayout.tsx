import React from 'react';
import {
  Container,
  makeStyles,
  useMediaQuery,
  useTheme,
} from '@material-ui/core';
import { PortfolioBottomNav, PortfolioNav } from 'components';

export const PortfolioLayout: React.FC = ({ children }) => {
  const useStyles = makeStyles({
    root: {
      marginTop: '50px',
      marginBottom: '50px',
    },
  });

  const classes = useStyles();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('md'));

  if (matches) {
    return (
      <>
        <Container maxWidth="lg" className={classes.root}>
          <PortfolioNav />
          <>{children}</>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <PortfolioBottomNav />
        <>{children}</>
      </Container>
    </>
  );
};
