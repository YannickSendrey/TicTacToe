import { GameBoardProps, PlayerX, PlayerO, nextTurn } from "../types.ts";
import { Tile } from "./Tile.tsx";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import '../../css/gameBoard.css';
import { useState } from "react";

export const GameBoard = ({player1Pick, gameType}: GameBoardProps) => {
    const [nextTurn, setNextTurn] = useState<nextTurn>('X');

    const generateTiles = () => {
        const tiles = [];
        for (let i = 1; i <= 9; i++) {
            tiles.push(<Tile key={i} />);
        }
        return tiles;
    }
    
    const handleClick = () => {
        nextTurn === 'X' ? setNextTurn('O') : setNextTurn('X');
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
            <Header nextTurn={nextTurn} />
            <main className="grid">
                {generateTiles()}
            </main>
            <Footer players={players} />
        </>
    );
}