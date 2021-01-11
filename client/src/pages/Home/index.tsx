import React, { useEffect } from 'react';
import { Container, Typography, makeStyles } from '@material-ui/core';
import { useTranslate } from 'hooks';

const Home: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      [theme.breakpoints.up('md')]: {
        height: '100%',
      },
      [theme.breakpoints.down('sm')]: {
        marginTop: '-50px',
        marginBottom: '-50px',
        height: '100%',
      },
    },
    typographyContainer: {
      display: 'block',
    },
  }));

  const classes = useStyles();

  const translate = useTranslate();

  useEffect(() => {
    window.scrollTo({ top: 0 });
  });

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.typographyContainer}>
          <Typography align="center" variant="h2" component="h2" gutterBottom>
            {translate('name')}
          </Typography>
          <Typography align="center" variant="h6" component="h3">
            {translate('roleTitle')}
          </Typography>
        </div>
      </Container>
    </div>
  );
};

export { Home, Home as default };
