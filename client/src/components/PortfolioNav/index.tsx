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
import { useHistory, useLocation } from 'react-router';
import { PORTFOLIO_ROUTE, TICTACTOE_ROUTE } from 'routes';
import { useTranslate } from 'hooks';
import { useGameDispatch, TictactoePlayer } from 'stores';

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

  const location = useLocation();

  const history = useHistory();

  const gameDispatch = useGameDispatch();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleNewGameClick = () => {
    if (location.pathname.indexOf(TICTACTOE_ROUTE)) {
      const size = 3;

      gameDispatch({
        type: 'newTictactoeGame',
        state: {
          tictactoe: {
            game: Array.from<number[], number[]>(Array(size), () =>
              Array(size).fill(0)
            ),
            size,
            showWinner: false,
            player: TictactoePlayer.One,
            moveCount: 0,
          },
        },
      });
    }

    setAnchorEl(null);
  };

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        aria-label={translate('menu')}
        onClick={handleClick}
      >
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
        <MenuItem className={classes.menuItemRoot} onClick={handleNewGameClick}>
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
