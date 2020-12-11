import React, { useEffect } from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';

const Home: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('lg')]: {
        height: '100vh',
      },
      [theme.breakpoints.down('md')]: {
        height: '85vh',
      },
    },
    typographyContainer: {
      display: 'block',
    },
  }));

  const classes = useStyles();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.typographyContainer}>
          <Typography align="center" variant="h2" component="h2" gutterBottom>
            Willwin Wang
          </Typography>
          <Typography align="center" variant="h6">
            Fullstack software developer
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export { Home, Home as default };
