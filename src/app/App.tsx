import './App.css'
import { GameBoard } from '../components/GameBoard';
import { Menu } from '../components/Menu';
import { GameType } from '../components/types.ts';
import { useState } from 'react';


function App() {
  const [hasGameStarted, setHasGameStarted] = useState<boolean>(false);
  const [gameType, setGameType] = useState<GameType>("");

  return (
    <>
      {hasGameStarted ? <GameBoard gametype={gameType} /> : <Menu setGameType={setGameType} />}
    </>
    )
}

export default App

