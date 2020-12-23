import React from 'react';
import { Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export const PortfolioLayout: React.FC = ({ children }) => {
  const useStyles = makeStyles({
    root: {
      marginTop: '50px',
      marginBottom: '50px',
    },
  });

  const classes = useStyles();

  return (
    <>
      <Container maxWidth="lg" className={classes.root}>
        <>{children}</>
      </Container>
    </>
  );
};
