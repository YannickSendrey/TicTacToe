import { GameBoardProps } from "../types"
import { playerX, playerO } from "../types";


export const Footer = ({gameType, player1Pick}: GameBoardProps) => {
    let playerX: playerX = 'X (YOU)';
    if (gameType === 'CPU' && player1Pick === 'X') {
        playerX = 'X (YOU)';
    } else if (gameType === 'CPU' && player1Pick === 'O') {
        playerX = 'X (CPU)';
    } else if (gameType === 'PVP' && player1Pick === 'X') {
        playerX = 'X (PLAYER 1)';
    } else {
        playerX = 'X (PLAYER 2)';
    }

    let playerO: playerO = 'O (CPU)';
    if (gameType === 'CPU' && player1Pick === 'X') {
        playerO = 'O (CPU)';
    } else if (gameType === 'CPU' && player1Pick === 'O') {
        playerO = 'O (YOU)';
    } else if (gameType === 'PVP' && player1Pick === 'X') {
        playerO = 'O (PLAYER 2)';
    } else {
        playerO = 'O (PLAYER 1)';
    }


    return (
        <footer className="grid-footer">
            <div className="score-x">
                <p>{playerX}</p>
                <p className="score-number">0</p>
            </div>
            <div className="score-ties">
                <p>TIES</p>
                <p className="score-number">0</p>
            </div>
            <div className="score-o">
                <p>{playerO}</p>
                <p className="score-number">0</p>
            </div>
        </footer>
    )
}