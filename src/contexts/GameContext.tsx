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

  const game = useGame(defaultDataGame);
  
  return (
    <GameContext.Provider value={{ ...game }}>
      {children}
    </GameContext.Provider>
  )
}

export function useContextGame() {
  return useContext(GameContext);
}