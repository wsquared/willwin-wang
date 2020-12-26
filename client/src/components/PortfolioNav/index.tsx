import React from 'react';
import {
  makeStyles,
  Button,
  ListItemText,
  ListItemIcon,
  SvgIcon,
  Menu,
  MenuItem,
} from '@material-ui/core';
import { ExitToApp, VideogameAsset, MenuOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { PORTFOLIO_ROUTE } from 'routes';
import { useTranslate } from 'hooks';

export const PortfolioNav: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    menu: {
      border: '1px solid #d3d4d5',
    },
    menuItemRoot: {
      '&:focus': {
        background: theme.palette.primary.main,
      },
    },
    menuItem: {
      padding: '5px 20px 5px 20px',
    },
  }));

  const classes = useStyles();

  const translate = useTranslate();

  const history = useHistory();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button aria-controls="menu" aria-haspopup="true" onClick={handleClick}>
        <SvgIcon>
          <MenuOutlined />
        </SvgIcon>
      </Button>
      <Menu
        id="menu"
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        className={classes.menu}
      >
        <MenuItem className={classes.menuItemRoot}>
          <ListItemIcon className={classes.menuItem}>
            <SvgIcon>
              <VideogameAsset />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText
            className={classes.menuItem}
            primary={translate('new')}
          />
        </MenuItem>
        <MenuItem
          onClick={() => history.push(PORTFOLIO_ROUTE)}
          className={classes.menuItemRoot}
        >
          <ListItemIcon className={classes.menuItem}>
            <SvgIcon>
              <ExitToApp />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText
            className={classes.menuItem}
            primary={translate('exit')}
          />
        </MenuItem>
      </Menu>
    </>
  );
};
