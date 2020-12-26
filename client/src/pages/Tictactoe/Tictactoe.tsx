import React, { useState } from 'react';
import { Button, SvgIcon, Typography } from '@material-ui/core';
import {
  RadioButtonUncheckedOutlined,
  CloseOutlined,
} from '@material-ui/icons';
import { useStyles } from './Tictactoe.styles';
import { v4 as uuid } from 'uuid';
import { range } from 'common';
import { useTranslate } from 'hooks';

// TODO: Implement start again
// TODO: Implement when tie
// TODO: Add analytics
// TODO: Add internationalisation
// TODO: Implement score
export const Tictactoe: React.FC<{ size?: number }> = ({ size = 3 }) => {
  enum Player {
    One = 1,
    Two = -1,
  }

  const classes = useStyles();

  const translate = useTranslate();

  const [player, setPlayer] = useState<Player>(Player.One);

  const [playerMoves, setPlayerMoves] = useState<number[][]>(
    Array.from(Array(size), () => Array(size).fill(0))
  );

  const [showWinner, setShowWinner] = useState<boolean>(false);

  const isMoveWin = (move: number, playerMoves: number[][]) => {
    const row = Math.floor(move / size);
    const column = move % size;
    let winColumn = true;
    let winRow = true;
    let winDiagonal = true;
    let winReverseDiagonal = true;

    for (let i = 0; i < playerMoves.length; i++) {
      if (playerMoves[i][column] !== player) {
        winColumn = false;
      }
      if (playerMoves[row][i] !== player) {
        winRow = false;
      }
      if (playerMoves[i][i] !== player) {
        winDiagonal = false;
      }
      if (playerMoves[i][playerMoves.length - 1 - i] !== player) {
        winReverseDiagonal = false;
      }
    }

    return winColumn || winRow || winDiagonal || winReverseDiagonal;
  };

  const getMove = (move: number) =>
    playerMoves[Math.floor(move / size)][move % size];

  const handleClick = (box: number) => () => {
    if (showWinner) {
      return;
    }

    if (getMove(box) !== 0) {
      return;
    }

    playerMoves[Math.floor(box / size)][box % size] = player;
    setPlayerMoves(playerMoves);

    if (isMoveWin(box, playerMoves)) {
      setShowWinner(true);
      return;
    }

    setPlayer(-player as Player);
  };

  const PlayerMove: React.FC<{
    box: number;
  }> = ({ box }) => {
    if (!getMove(box)) {
      return null;
    }

    if (getMove(box) === Player.One) {
      return <RadioButtonUncheckedOutlined data-testid="circle" />;
    }
    return <CloseOutlined data-testid="cross" />;
  };

  const PlayerMoveText: React.FC<{ player: Player }> = ({ player }) => {
    return (
      <Typography className={classes.header} variant="h5" component="h2">
        {translate('playerCurrentMove', {
          player:
            player === Player.One
              ? translate('playerOne')
              : translate('playerTwo'),
        })}
      </Typography>
    );
  };

  return (
    <div>
      {showWinner ? (
        <Typography className={classes.header} variant="h5" component="h2">
          {translate('congratsWinner', {
            player:
              player === Player.One
                ? translate('playerOne')
                : translate('playerTwo'),
          })}
        </Typography>
      ) : (
        <PlayerMoveText player={player} />
      )}
      <div className={classes.gameContainer}>
        <div className={classes.gameBoard}>
          {range(0, size * size - 1).map((box) => (
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
    </div>
  );
};
