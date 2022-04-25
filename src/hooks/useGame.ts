import { useReducer } from 'react';

import { Game } from '../types/GameContextTypes';
import { GameReducerAction, GameActions } from '../types/UseGameTypes';

function useGame(defaultDataGame: Game) {
  let [ state, dispatch ] = useReducer(gameReducer, defaultDataGame);

  function gameReducer(state: Game, action: GameReducerAction<string | number>) {
    const { type, payload } = action;
    let newState: Game = defaultDataGame;

    switch (type) {
      case GameActions.ADD_PLAYER_O:
        newState = Object.assign({}, state, {
          playerO: {
            ...state.playerO,
            name: payload
          }
        });

        return newState;

      case GameActions.ADD_PLAYER_X:
        newState = Object.assign({}, state, {
          playerX: {
            ...state.playerX,
            name: payload
          }
        });

        return newState;
      
      case GameActions.ADD_VICTORIES:
        newState = Object.assign({}, state, {
          quantityVictories: payload
        });

        return newState;
      
      case GameActions.PLAY:
        const id_element = payload;

        for(let i = 0; i < state.gameLogic.length; i++) {
          for(let j = 0; j < state.gameLogic[i].length; j++) {
            const id_box = state.gameLogic[i][j].id;

            state.gameLogic[i][j].value = id_element === id_box ? state.turn : '';
          }
        }

        newState = Object.assign({}, state);

        return newState;

      default:
        return newState
    }
  }

  const changePlayerO = (name: string) => dispatch({ 
    type: GameActions.ADD_PLAYER_O, 
    payload: name 
  });

  const changePlayerX = (name: string) => dispatch({ 
    type: GameActions.ADD_PLAYER_X, 
    payload: name 
  });
  
  const changeQuantityVictories = (value: string) => dispatch({ 
    type: GameActions.ADD_VICTORIES, 
    payload: value 
  });

  const playCurrentPlayer = (id: string) => dispatch({
    type: GameActions.PLAY,
    payload: id
  });

  return {
    state,
    changePlayerO,
    changePlayerX,
    changeQuantityVictories,
    playCurrentPlayer
  }
}

export default useGame;