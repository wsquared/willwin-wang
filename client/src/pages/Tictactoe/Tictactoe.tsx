import React from 'react';
import { Button, SvgIcon, Typography } from '@material-ui/core';
import {
  RadioButtonUncheckedOutlined,
  CloseOutlined,
} from '@material-ui/icons';
import { useStyles } from './Tictactoe.styles';
import { v4 as uuid } from 'uuid';
import { range } from 'common';
import { useTranslate } from 'hooks';
import { useGameState, useGameDispatch, TictactoePlayer } from 'stores';

// TODO: Add analytics
// TODO: Implement score
// TODO: Implement AI
export const Tictactoe: React.FC = () => {
  const classes = useStyles();

  const translate = useTranslate();

  const state = useGameState();

  const { game, size, showWinner, player, moveCount } = state.tictactoe;

  const dispatchMove = useGameDispatch();

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

  const getMove = (move: number) => {
    return game ? game[Math.floor(move / size)][move % size] : undefined;
  };

  const handleClick = (box: number) => () => {
    if (showWinner) {
      return;
    }

    if (getMove(box) !== 0) {
      return;
    }

    game[Math.floor(box / size)][box % size] = player;

    if (isMoveWin(box, game)) {
      dispatchMove({
        type: 'updateTictactoeGame',
        state: {
          ...state,
          tictactoe: {
            ...state.tictactoe,
            game,
            moveCount: state.tictactoe.moveCount + 1,
            showWinner: true,
          },
        },
      });
      return;
    }

    dispatchMove({
      type: 'updateTictactoeGame',
      state: {
        ...state,
        tictactoe: {
          ...state.tictactoe,
          game,
          moveCount: state.tictactoe.moveCount + 1,
          player: -player as TictactoePlayer,
        },
      },
    });
  };

  const PlayerMove: React.FC<{
    box: number;
  }> = ({ box }) => {
    if (!getMove(box)) {
      return null;
    }

    if (getMove(box) === TictactoePlayer.One) {
      return <RadioButtonUncheckedOutlined data-testid="circle" />;
    }
    return <CloseOutlined data-testid="cross" />;
  };

  const PlayerMoveText: React.FC<{ player: TictactoePlayer }> = ({
    player,
  }) => {
    return (
      <Typography className={classes.header} variant="h5" component="h2">
        {translate('playerCurrentMove', {
          player:
            player === TictactoePlayer.One
              ? translate('playerOne')
              : translate('playerTwo'),
        })}
      </Typography>
    );
  };

  return (
    <main className={classes.root}>
      {showWinner ? (
        <Typography className={classes.header} variant="h5" component="h2">
          {translate('congratsWinner', {
            player:
              player === TictactoePlayer.One
                ? translate('playerOne')
                : translate('playerTwo'),
          })}
        </Typography>
      ) : moveCount === size * size ? (
        <Typography className={classes.header} variant="h5" component="h2">
          {translate('draw')}
        </Typography>
      ) : (
        <PlayerMoveText player={player} />
      )}
      <div className={classes.gameContainer}>
        <div className={classes.gameBoard}>
          {range(1, size * size).map((box) => (
            <Button
              key={uuid()}
              className={classes.box}
              onClick={handleClick(box - 1)}
              role={'button'}
              aria-label={`box ${box}`}
            >
              <SvgIcon fontSize={'large'}>
                <PlayerMove box={box - 1} />
              </SvgIcon>
            </Button>
          ))}
        </div>
      </div>
    </main>
  );
};
