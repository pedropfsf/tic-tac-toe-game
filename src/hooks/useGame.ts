import { useReducer } from 'react';

import forMatrix from '../utils/forMatrix';
import { Game } from '../types/GameContextTypes';
import { GameReducerAction, GameActions } from '../types/UseGameTypes';

function useGame(defaultDataGame: Game) {
  let [ state, dispatch ] = useReducer(gameReducer, defaultDataGame);

  function gameReducer(state: Game, action: GameReducerAction<string | number>) {
    const { type, payload } = action;
    let newState: Game = defaultDataGame;

    

    function toggleTurnPlayer() {
      if(state.turn === 'x') {
        state.turn = 'o';
      } else {
        state.turn = 'x';
      }
    }

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

        forMatrix(box => {
            const id_box = box.id;
  
            if(box.value === '') {
              if(id_element === id_box) {
                box.value = state.turn;
  
                toggleTurnPlayer();
              }
            }
        }, state.gameLogic);

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

  const selectPlayerTurn = () => {
    if(state.turn === 'o') {
      return state.playerO;
    } 

    return state.playerX;
  };

  // const TicTocGameMatrix = state.gameLogic;

  

  return {
    state,
    changePlayerO,
    changePlayerX,
    changeQuantityVictories,
    playCurrentPlayer,
    selectPlayerTurn
  }
}

export default useGame;