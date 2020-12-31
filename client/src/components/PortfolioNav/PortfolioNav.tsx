import React from 'react';
import ReactGA from 'react-ga';
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
import { useTranslate } from 'hooks';
import { useGameDispatch, TictactoePlayer } from 'stores';
import { Routes } from 'config';

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
    if (location.pathname.indexOf(Routes.tictactoe)) {
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

      ReactGA.event({
        category: 'New Game',
        action: 'Clicked new game for tictactoe',
      });
    }

    setAnchorEl(null);
  };

  const gameMap = new Map<string, string>([
    [`${Routes.portfolio}${Routes.tictactoe}`, 'tictactoe'],
  ]);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    ReactGA.event({
      category: 'Menu',
      action: `Clicked menu from ${gameMap.get(location.pathname)}`,
    });

    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleExitClick = () => {
    history.push(Routes.portfolio);

    ReactGA.event({
      category: 'Exit Game',
      action: `Clicked exit from ${gameMap.get(location.pathname)}`,
    });
  };

  return (
    <>
      <Button
        aria-controls="menu"
        aria-haspopup="true"
        aria-label={translate('menu')}
        onClick={handleMenuClick}
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
        <MenuItem onClick={handleExitClick} className={classes.menuItemRoot}>
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
