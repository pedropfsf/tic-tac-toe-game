import { useReducer } from 'react';

import { Player, GameContextProps } from '../types/GameContextTypes';

enum GameActions {
  ADD_PLAYER_O = 'ADD_PLAYER_O',
  ADD_PLAYER_X = 'ADD_PLAYER_X',
}

type GameReducerAction = {
  type: GameActions,
  payload: Player['name'];
}

function useGame(defaultDataGame: GameContextProps) {
  let [ state, dispatch ] = useReducer(gameReducer, defaultDataGame);

  function gameReducer(state: GameContextProps, action: GameReducerAction) {
    const { type, payload } = action;
    let newState: GameContextProps = defaultDataGame;

    switch (type) {
      case GameActions.ADD_PLAYER_O:
        newState = Object.assign(state, {
          playerO: {
            name: payload
          }
        });

        return newState;

      case GameActions.ADD_PLAYER_X:
        newState = Object.assign(state, {
          playerX: {
            name: payload
          }
        });

        return newState;

      default:
        return newState
    }
  }

  const changePlayerO = (name: string) => dispatch({ type: GameActions.ADD_PLAYER_O, payload: name });
  const changePlayerX = (name: string) => dispatch({ type: GameActions.ADD_PLAYER_X, payload: name });

  return {
    state,
    changePlayerO,
    changePlayerX
  }
}

export default useGame;