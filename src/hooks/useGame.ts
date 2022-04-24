import { useReducer } from 'react';

import { Player, Game } from '../types/GameContextTypes';
import { GameReducerAction, GameActions } from '../types/UseGameTypes';

function useGame(defaultDataGame: Game) {
  let [ state, dispatch ] = useReducer(gameReducer, defaultDataGame);

  function gameReducer(state: Game, action: GameReducerAction<Player['name']>) {
    const { type, payload } = action;
    let newState: Game = defaultDataGame;

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