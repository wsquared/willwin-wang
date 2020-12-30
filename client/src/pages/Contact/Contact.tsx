import React from 'react';
import { Container, SvgIcon, Button, makeStyles } from '@material-ui/core';
import { Twitter, LinkedIn, Email, GitHub } from '@material-ui/icons';
import { Links } from 'config';
import { useTranslate } from 'hooks';

export const Contact: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: '-50px',
      marginBottom: '-50px',
      height: '100%',
    },
    button: {
      [theme.breakpoints.up('md')]: {
        margin: '0 8px 0 8px',
      },
    },
  }));

  const classes = useStyles();

  const translate = useTranslate();

  return (
    <Container className={classes.root}>
      <main>
        <Button
          className={classes.button}
          href={`mailto:${Links.email}`}
          rel="noreferrer noopener"
          target="_blank"
          aria-label={translate('email')}
        >
          <SvgIcon fontSize="large">
            <Email />
          </SvgIcon>
        </Button>
        <Button
          className={classes.button}
          href={Links.linkedIn}
          rel="noreferrer noopener"
          target="_blank"
          aria-label={translate('linkedIn')}
        >
          <SvgIcon fontSize="large">
            <LinkedIn />
          </SvgIcon>
        </Button>
        <Button
          className={classes.button}
          href={Links.twitter}
          rel="noreferrer noopener"
          target="_blank"
          aria-label={translate('twitter')}
        >
          <SvgIcon fontSize="large">
            <Twitter />
          </SvgIcon>
        </Button>
        <Button
          className={classes.button}
          href={Links.gitHub}
          rel="noreferrer noopener"
          target="_blank"
          aria-label={translate('gitHub')}
        >
          <SvgIcon fontSize="large">
            <GitHub />
          </SvgIcon>
        </Button>
      </main>
    </Container>
  );
};
