import './App.css'
import { GameBoard } from '../components/gameBoard/GameBoard.tsx';
import { Menu } from '../components/menu/Menu.tsx';
import { GameType, Player1Pick } from '../components/types.ts';
import { useState } from 'react';


function App() {
  const [hasGameStarted, setHasGameStarted] = useState<boolean>(false);
  const [gameType, setGameType] = useState<GameType>("");
  const [player1Pick, setPlayer1Pick] = useState<Player1Pick>("");

  return (
    <>
      {hasGameStarted ? <GameBoard gameType={gameType} player1Pick={player1Pick} /> : <Menu setGameType={setGameType} setHasGameStarted={setHasGameStarted} player1Pick={player1Pick} setPlayer1Pick={setPlayer1Pick} />}
    </>
    )
}

export default App

