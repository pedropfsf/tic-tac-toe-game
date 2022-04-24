import {
  createContext,
  useContext,
  useReducer
} from 'react';

import { 
  GameContextProps, 
  GameProviderProps 
} from '../types/GameContextTypes';

const GameContext = createContext({} as GameContextProps);

function GameProvider({ children }: GameProviderProps) {
  const defaultDataGame: GameContextProps = {
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
    turn: ''
  };

  
  return (
    <GameContext.Provider value={defaultDataGame}>
      {children}
    </GameContext.Provider>
  )
}