import { useContext } from 'react';

import { usePlayerMusic } from '../context/usePlayMusic';

function usePlayerDemonHook() {
  const context = useContext(usePlayerMusic);

  if (context === undefined) {
    throw new Error('useDemonContext must be used within a GameProvider');
  }

  return context;
}

export default usePlayerDemonHook;