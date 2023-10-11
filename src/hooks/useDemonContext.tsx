import { useContext } from 'react';
import { useContextGame } from '../context/useGameDemon';

function useDemonHook() {
  const context = useContext(useContextGame);

  if (context === undefined) {
    throw new Error('useDemonContext must be used within a GameProvider');
  }

  return context;
}

export default useDemonHook;