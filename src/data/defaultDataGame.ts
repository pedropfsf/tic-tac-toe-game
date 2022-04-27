import { Game } from "../types/GameContextTypes";

const defaultDataGame: Game = {
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

export default defaultDataGame;