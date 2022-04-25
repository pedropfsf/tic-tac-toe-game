import {
  createContext,
  useContext
} from 'react';

import useGame from '../hooks/useGame';
import { 
  GameContextProps, 
  GameProviderProps,
  Game
} from '../types/GameContextTypes';

const GameContext = createContext({} as GameContextProps);

export function GameProvider({ children }: GameProviderProps) {
  const defaultDataGame: Game = {
    playerO: {
      name: 'Pedro',
      type: 'o',
      victories: 0
    },
    playerX: {
      name: 'Jonas',
      type: 'x',
      victories: 0
    },
    turn: 'x',
    currentVictory: {
      current: false,
      namePlayer: 'Pedro'
    },
    quantityVictories: '5',
    gameLogic: [
      [ 
        { 
          id: '1',
          value: 'x'
        }, 
        { 
          id: '2',
          value: 'o'
        }, 
        {
          id: '3',
          value: ''
        } 
      ],
      [ 
        {
          id: '4',
          value: ''
        }, 
        {
          id: '5',
          value: ''
        },
        {
          id: '6',
          value: ''
        } 
      ],
      [ 
        {
          id: '7',
          value: ''
        }
      , 
        {
          id: '8',
          value: ''
        },
        {
          id: '9',
          value: ''
        }
      ]
    ]
  };

  const game = useGame(defaultDataGame);
  
  return (
    <GameContext.Provider value={game}>
      {children}
    </GameContext.Provider>
  )
}

export function useContextGame() {
  return useContext(GameContext);
}