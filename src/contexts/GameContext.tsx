import {
  createContext,
  useContext
} from 'react';

import { GameContextProps, GameProviderProps } from '../types/GameContextTypes';
import defaultDataGame from '../data/defaultDataGame';
import useGame from '../hooks/useGame';

const GameContext = createContext({} as GameContextProps);

export function GameProvider({ children }: GameProviderProps) {
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