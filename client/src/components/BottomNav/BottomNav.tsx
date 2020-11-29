import React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  useMediaQuery,
} from "@material-ui/core";
import { Home, Folder, Person, ContactMail } from "@material-ui/icons";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

const BottomNav = () => {
  const useStyles = makeStyles({
    root: {
      width: "100%",
      position: "fixed",
      bottom: 0,
    },
  });

  const classes = useStyles();

  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down("md"));

  const history = useHistory();

  const [value, setValue] = React.useState(history.location.pathname.slice(1));

  const handleChange = (_: React.ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
    history.push(`/${newValue}`);
  };

  if (!matches) {
    return <></>;
  }

  return (
    <BottomNavigation
      value={value}
      className={classes.root}
      onChange={handleChange}
    >
      <BottomNavigationAction label="Home" value="home" icon={<Home />} />
      <BottomNavigationAction label="About" value="about" icon={<Person />} />
      <BottomNavigationAction
        label="Portfolio"
        value="portfolio"
        icon={<Folder />}
      />
      <BottomNavigationAction
        label="Contact"
        value="contact"
        icon={<ContactMail />}
      />
    </BottomNavigation>
  );
};

export { BottomNav };
