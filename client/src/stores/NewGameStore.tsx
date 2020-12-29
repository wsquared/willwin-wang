import React, { useReducer, createContext, Dispatch, useContext } from 'react';

export enum TictactoePlayer {
  One = 1,
  Two = -1,
}

interface GameState {
  tictactoe: {
    game: number[][];
    size: number;
    showWinner: boolean;
    player: TictactoePlayer;
    moveCount: number;
  };
}

interface GameAction {
  type: 'newTictactoeGame' | 'newSudokuGame' | 'updateTictactoeGame';
  state: GameState;
}

export const gameReducer = (
  state: GameState,
  action: GameAction
): GameState => {
  if (action.type === 'newTictactoeGame') {
    return {
      ...state,
      tictactoe: {
        ...state.tictactoe,
        game: Array.from(Array(action.state.tictactoe.size), () =>
          Array(action.state.tictactoe.size).fill(0)
        ),
        showWinner: false,
        player: TictactoePlayer.One,
        moveCount: 0,
      },
    };
  } else if (action.type === 'updateTictactoeGame') {
    return {
      ...action.state,
    };
  }

  return state;
};

const GameStateContext = createContext<GameState | undefined>(undefined);

const GameDispatchContext = createContext<Dispatch<GameAction> | undefined>(
  undefined
);

export const NewGameProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(gameReducer, {
    tictactoe: {
      game: Array.from<number[], number[]>(Array(3), () => Array(3).fill(0)),
      size: 3,
      showWinner: false,
      player: TictactoePlayer.One,
      moveCount: 0,
    },
  });

  return (
    <GameStateContext.Provider value={state}>
      <GameDispatchContext.Provider value={dispatch}>
        {children}
      </GameDispatchContext.Provider>
    </GameStateContext.Provider>
  );
};

export const useGameState = (): GameState => {
  const context = useContext(GameStateContext);
  if (context === undefined) {
    throw new Error('useGameState must be used within a NewGameProvider');
  }
  return context;
};

export const useGameDispatch = (): Dispatch<GameAction> => {
  const context = useContext(GameDispatchContext);
  if (context === undefined) {
    throw new Error(
      'useGameDispatch must be used within a NewGameDispatchProvider'
    );
  }
  return context;
};
