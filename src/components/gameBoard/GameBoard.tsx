import { GameBoardProps, PlayerX, PlayerO, NextTurn, TileSymbol } from "../types.ts";
import { Tile } from "./Tile.tsx";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import '../../css/gameBoard.css';
import { useState } from "react";

export const GameBoard = ({player1Pick, gameType, setHasGameStarted, setPlayer1Pick, setGameType}: GameBoardProps) => {
    const [nextTurn, setNextTurn] = useState<NextTurn>('X');
    const [tilesSymbols, setTilesSymbols] = useState<TileSymbol[]>(Array(9).fill(''));
    const [winCondition, setWinCondition] = useState<boolean>(false);

    
    const generateTiles = () => {
        const tiles = [];
        for (let i = 0; i < 9; i++) {
            tiles.push(<Tile key={i} id={i} handleTileClick={handleTileClick} tilesSymbols={tilesSymbols} />);
        }
        return tiles;
    }

    
    const checkIfWinCondition = (): void => {
        if (tilesSymbols[0] === tilesSymbols[1] && tilesSymbols[1] === tilesSymbols[2] && tilesSymbols[0] !== '') {
            setWinCondition(true);
        } 

        if (tilesSymbols[3] === tilesSymbols[4] && tilesSymbols[3] === tilesSymbols[5] && tilesSymbols[3] !== '') {
            setWinCondition(true);
        }

        if (tilesSymbols[6] === tilesSymbols[7] && tilesSymbols[6] === tilesSymbols[8] && tilesSymbols[6] !== '') {
            setWinCondition(true);
        }

        if (tilesSymbols[0] === tilesSymbols[3] && tilesSymbols[0] === tilesSymbols[6] && tilesSymbols[0] !== '') {
            setWinCondition(true);
        }

        if (tilesSymbols[1] === tilesSymbols[4] && tilesSymbols[1] === tilesSymbols[7] && tilesSymbols[1] !== '') {
            setWinCondition(true);
        }

        if (tilesSymbols[2] === tilesSymbols[5] && tilesSymbols[2] === tilesSymbols[8] && tilesSymbols[2] !== '') {
            setWinCondition(true);
        }

        if (tilesSymbols[0] === tilesSymbols[4] && tilesSymbols[0] === tilesSymbols[8] && tilesSymbols[0] !== '') {
            setWinCondition(true);
        }

        if (tilesSymbols[2] === tilesSymbols[4] && tilesSymbols[2] === tilesSymbols[6] && tilesSymbols[2] !== '') {
            setWinCondition(true);
        }

    }


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
            <Footer players={players} />
        </>
    );
}