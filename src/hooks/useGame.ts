import { useReducer } from 'react';

import forMatrix from '../utils/forMatrix';
import { Game } from '../types/GameContextTypes';
import { GameReducerAction, GameActions } from '../types/UseGameTypes';
import gameWinningChecker from '../utils/gameWinningChecker';

function useGame(defaultDataGame: Game) {
  let [state, dispatch] = useReducer(gameReducer, defaultDataGame);

  function gameReducer(state: Game, action: GameReducerAction<string | number>) {
    const { type, payload } = action;
    let newState: Game = defaultDataGame;

    function toggleTurnPlayer(state: Game) {
      if (state.turn === 'x') {
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
          const searchBox = id_element === id_box;
          
          if (box.clicked || !searchBox) {
            return
          }

          box.value = state.turn;
          box.clicked = true;
          state.numberOfMovesGame++;
          const resultWin = gameWinningChecker(state.gameLogic);
          const actionsGame = {
            isPlayerXWinner: () => {
              if (resultWin === 'progress') {
                return;
              }

              if (resultWin.winner === 'o') {
                state.currentVictory = {
                  status: 'winner',
                  namePlayer: state.playerO.name
                }
    
                const newVictoriesPlayerO = state.playerO.victories += 1;
    
                state.playerO = {
                  ...state.playerO,
                  victories: newVictoriesPlayerO
                }

                state.typeLineWinGame = resultWin.type;
    
                return;
              }
            },
            isPlayerOWinner: () => {
              if (resultWin === 'progress') {
                return;
              }

              if (resultWin.winner === 'x') {
                state.currentVictory = {
                  status: 'winner',
                  namePlayer: state.playerX.name
                }
    
                const newVictoriesPlayerX = state.playerX.victories += 1;
    
                state.playerX = {
                  ...state.playerX,
                  victories: newVictoriesPlayerX
                }
                
                state.typeLineWinGame = resultWin.type;

                return;
              }
            },
            isNotAnyWinner: () => {
              if (state.currentVictory.status !== 'winner') {              
                state.currentVictory = {
                  status: 'got-old',
                  namePlayer: ''
                }
              }
            }
          }
          
          toggleTurnPlayer(state);
          
          if (state.numberOfMovesGame === 9) {
            actionsGame.isPlayerOWinner();
            actionsGame.isPlayerXWinner();
            actionsGame.isNotAnyWinner();

            return;
          }

          actionsGame.isPlayerOWinner();
          actionsGame.isPlayerXWinner();

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
    if (state.turn === 'o') {
      return state.playerO;
    }

    return state.playerX;
  };

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