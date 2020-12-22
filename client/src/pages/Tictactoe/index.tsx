import React, { useState } from 'react';
import { Button, makeStyles, SvgIcon } from '@material-ui/core';
import {
  RadioButtonUncheckedOutlined,
  CloseOutlined,
} from '@material-ui/icons';
import { v4 as uuid } from 'uuid';
import { range } from 'common';

enum Player {
  One = 1,
  Two = -1,
}

const playerMoveMap = new Map<number, Player>();

export const Tictactoe: React.FC = () => {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    },
    gameBoard: {
      [theme.breakpoints.up('lg')]: {
        width: '800px',
        height: '800px',
      },
      [theme.breakpoints.only('md')]: {
        width: '600px',
        height: '600px',
      },
      [theme.breakpoints.down('sm')]: {
        width: '300px',
        height: '300px',
      },
      display: 'grid',
      gridTemplateRows: '1fr 1fr 1fr',
      gridTemplateColumns: '1fr 1fr 1fr',
    },
    box: {
      border: '1px solid #555',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  }));

  const classes = useStyles();

  const [player, setPlayer] = useState<Player>(Player.One);

  const handleClick = (box: number) => () => {
    if (playerMoveMap.has(box)) {
      return;
    }

    playerMoveMap.set(box, player);
    setPlayer(-player as Player);
  };

  const PlayerMove: React.FC<{
    box: number;
  }> = ({ box }) => {
    if (!playerMoveMap.get(box)) {
      return null;
    }

    if (playerMoveMap.get(box) === Player.One) {
      return <RadioButtonUncheckedOutlined />;
    }
    return <CloseOutlined />;
  };

  return (
    <div className={classes.root}>
      <div className={classes.gameBoard}>
        {range(1, 9).map((box) => (
          <Button
            key={uuid()}
            className={classes.box}
            onClick={handleClick(box)}
          >
            <SvgIcon fontSize={'large'}>
              <PlayerMove box={box} />
            </SvgIcon>
          </Button>
        ))}
      </div>
    </div>
  );
};
