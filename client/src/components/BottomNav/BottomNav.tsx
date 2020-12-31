import React from 'react';
import {
  BottomNavigation,
  BottomNavigationAction,
  makeStyles,
} from '@material-ui/core';
import { Home, Folder, Person, ContactMail } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { useTranslate } from 'hooks';
import ReactGA from 'react-ga';

const BottomNav: React.FC = () => {
  const useStyles = makeStyles({
    root: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      left: 0,
    },
  });

  const classes = useStyles();

  const translate = useTranslate();

  const location = useLocation();

  const history = useHistory();

  const [value, setValue] = React.useState(
    location.pathname.trim().split('/')[1] || 'home'
  );

  const handleChange = (
    _: React.ChangeEvent<Record<string, unknown>>,
    newValue: string
  ) => {
    ReactGA.event({
      category: 'Bottom Navigation Links',
      action: `Clicked bottom navigation ${newValue}`,
      label: `Navigated to ${newValue}`,
    });
    setValue(newValue);
    history.push(`/${newValue}`);
  };

  return (
    <BottomNavigation
      value={value}
      className={classes.root}
      onChange={handleChange}
    >
      <BottomNavigationAction
        label={translate('home')}
        value="home"
        icon={<Home />}
      />
      <BottomNavigationAction
        label={translate('about')}
        value="about"
        icon={<Person />}
      />
      <BottomNavigationAction
        label={translate('portfolio')}
        value="portfolio"
        icon={<Folder />}
      />
      <BottomNavigationAction
        label={translate('contact')}
        value="contact"
        icon={<ContactMail />}
      />
    </BottomNavigation>
  );
};

export { BottomNav };
