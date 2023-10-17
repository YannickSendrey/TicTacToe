import { PlayerO, PlayerX } from "../types"


export const Footer = ({ players }: {players: [PlayerX, PlayerO]}) => {
    const [playerX, playerO] = players;


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