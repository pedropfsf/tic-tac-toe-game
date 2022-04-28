import { useReducer } from 'react';

import { Game } from '../types/GameContextTypes';
import { GameActions, GameReducerAction } from '../types/UseGameTypes';
import forMatrix from '../utils/forMatrix';
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
          const actionsDefinesDestinyGame = {
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
            actionsDefinesDestinyGame.isPlayerOWinner();
            actionsDefinesDestinyGame.isPlayerXWinner();
            actionsDefinesDestinyGame.isNotAnyWinner();

            return;
          }

          actionsDefinesDestinyGame.isPlayerOWinner();
          actionsDefinesDestinyGame.isPlayerXWinner();

        }, state.gameLogic);

        newState = Object.assign({}, state);

        return newState;

      case GameActions.RESTART_GAME:
        forMatrix(box => {
          box.value = '';
          box.clicked = false;
        }, state.gameLogic);

        state.currentVictory = {
          status: 'progress',
          namePlayer: ''
        }

        state.numberOfMovesGame = 0;
        state.typeLineWinGame = '';

        newState = Object.assign({}, state);

        return newState;

      case GameActions.RESET_TO_START_NEW_GAME:
        state.playerO = {
          ...state.playerO,
          victories: 0
        };

        state.playerX = {
          ...state.playerX,
          victories: 0
        };

        state.quantityVictories = '';

        newState = Object.assign({}, state);

        return newState;

      case GameActions.RESET_TOTAL:
        state = {
          playerO: {
            name: '',
            type: 'o',
            victories: 0
          },
          playerX: {
            name: '',
            type: 'x',
            victories: 0
          },
          turn: 'x',
          currentVictory: {
            status: 'progress',
            namePlayer: ''
          },
          quantityVictories: '',
          numberOfMovesGame: 0,
          typeLineWinGame: '',
          gameLogic: [
            [
              {
                id: '1',
                value: '',
                clicked: false
              },
              {
                id: '2',
                value: '',
                clicked: false
              },
              {
                id: '3',
                value: '',
                clicked: false
              }
            ],
            [
              {
                id: '4',
                value: '',
                clicked: false
              },
              {
                id: '5',
                value: '',
                clicked: false
              },
              {
                id: '6',
                value: '',
                clicked: false
              }
            ],
            [
              {
                id: '7',
                value: '',
                clicked: false
              }
              ,
              {
                id: '8',
                value: '',
                clicked: false
              },
              {
                id: '9',
                value: '',
                clicked: false
              }
            ]
          ]
        };

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

  const restartGame = () => dispatch({
    type: GameActions.RESTART_GAME
  });

  const resetToStartNewGame = () => dispatch({
    type: GameActions.RESET_TO_START_NEW_GAME
  });

  const resetTotal = () => dispatch({
    type: GameActions.RESET_TOTAL
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
    selectPlayerTurn,
    restartGame,
    resetToStartNewGame,
    resetTotal
  }
}

export default useGame;