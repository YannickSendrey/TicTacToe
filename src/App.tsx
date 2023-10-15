import './App.css'
import { GameBoard } from './components/GameBoard';
import { Menu } from './components/Menu';
import React, { useState } from 'react';

function App() {
  const [hasGameStarted, setHasGameStarted] = useState<boolean>(false);

  return (
    <>
      {hasGameStarted ? <GameBoard/> : <Menu/>}
    </>
    )
}

export default App
