import { Typography, Container, makeStyles } from '@material-ui/core';
import { useTranslate } from 'hooks';
import React from 'react';

export const About: React.FC = () => {
  const translate = useTranslate();
  const useStyles = makeStyles({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '-50px',
      marginBottom: '-50px',
      height: '100%',
    },
  });

  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <main>
        <Typography align="center" variant="h5" component="h2">
          {translate('aboutDescription')}
        </Typography>
      </main>
    </Container>
  );
};
