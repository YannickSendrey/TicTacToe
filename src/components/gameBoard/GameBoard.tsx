import { GameBoardProps, PlayerX, PlayerO, NextTurn, TileSymbol } from "../types.ts";
import { Tile } from "./Tile.tsx";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import '../../css/gameBoard.css';
import { useState, useEffect } from "react";

export const GameBoard = ({player1Pick, gameType, setHasGameStarted, setPlayer1Pick, setGameType}: GameBoardProps) => {
    const [nextTurn, setNextTurn] = useState<NextTurn>('X');
    const [tilesSymbols, setTilesSymbols] = useState<TileSymbol[]>(Array(9).fill(''));
    const [winCondition, setWinCondition] = useState<boolean>(false);
    const [XScore, setXScore] = useState<number>(0);
    const [OScore, setOScore] = useState<number>(0);
    const [tiesScore, setTiesScore] = useState<number>(0);

    useEffect(() => {
    if (winCondition) {
        setTimeout(() => {
            if (nextTurn === 'X') {
                alert('O has won the game!');
                setOScore(OScore + 1);
            } else if (nextTurn === 'O') {
                alert('X has won the game!');
                setXScore(XScore + 1);
            }

        }, 200);
    }

    if (!winCondition && !tilesSymbols.includes('')) {
        setTimeout(() => {
            alert('Tie!');
            setTiesScore(tiesScore + 1);
        }, 200);
    }
    }, [winCondition, nextTurn]);

    
    const generateTiles = () => {
        const tiles = [];
        for (let i = 0; i < 9; i++) {
            tiles.push(<Tile key={i} id={i} handleTileClick={handleTileClick} tilesSymbols={tilesSymbols} />);
        }
        return tiles;
    }

    
    const checkIfWinCondition = (): void => {
        const winCombinations = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
        // Check if any of the win combinations are met
        for (const combination of winCombinations) {
          const [a, b, c] = combination;
          if (tilesSymbols[a] === tilesSymbols[b] && tilesSymbols[b] === tilesSymbols[c] && tilesSymbols[a] !== '') {
            setWinCondition(true);
            return; // Sort the loop early when a win condition is found
          }
        }
      };


    const handleMenuClick = (): void => {
        setHasGameStarted(false);
        setNextTurn('X');
        setTilesSymbols(Array(9).fill(''));
        setWinCondition(false);
        setGameType('');
        setPlayer1Pick('');
    }

    
    const handleTileClick = (id: number): void => {
        if (tilesSymbols[id] === '') {
            nextTurn === 'X' ? setNextTurn('O') : setNextTurn('X');
            tilesSymbols[id] = nextTurn === 'X' ? '/assets/icon-x.svg' : '/assets/icon-o.svg';
            checkIfWinCondition();
        }

    }

    const handleResetClick = (): void => {
        setNextTurn('X');
        setTilesSymbols(['', '', '', '', '', '', '', '', '']);
        setWinCondition(false);
    }
    
    // handle footer players logic 
    const assignPlayersToFooter = () => {
        let playerX: PlayerX = 'X (YOU)';
    
        if (gameType === 'CPU' && player1Pick === 'X') {
            playerX = 'X (YOU)';
        } else if (gameType === 'CPU' && player1Pick === 'O') {
            playerX = 'X (CPU)';
        } else if (gameType === 'PVP' && player1Pick === 'X') {
            playerX = 'X (PLAYER 1)';
        } else {
            playerX = 'X (PLAYER 2)';
        }
    
        let playerO: PlayerO = 'O (CPU)';
    
        if (gameType === 'CPU' && player1Pick === 'X') {
            playerO = 'O (CPU)';
        } else if (gameType === 'CPU' && player1Pick === 'O') {
            playerO = 'O (YOU)';
        } else if (gameType === 'PVP' && player1Pick === 'X') {
            playerO = 'O (PLAYER 2)';
        } else {
            playerO = 'O (PLAYER 1)';
        }

        const players: [PlayerX, PlayerO] = [playerX, playerO];

        return players;
    }

    const players = assignPlayersToFooter();

    return (
        <>
            <Header nextTurn={nextTurn} handleResetClick={handleResetClick} handleMenuClick={handleMenuClick} />
            <main className="grid">
                {generateTiles()}
            </main>
            <Footer players={players} XScore={XScore} OScore={OScore} tiesScore={tiesScore} />
        </>
    );
}