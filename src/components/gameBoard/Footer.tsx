import { FooterProps } from "../types"


export const Footer = ({ players, XScore, OScore, tiesScore }: FooterProps) => {
    const [playerX, playerO] = players;


    return (
        <footer className="grid-footer">
            <div className="score-x">
                <p>{playerX}</p>
                <p className="score-number">{XScore}</p>
            </div>
            <div className="score-ties">
                <p>TIES</p>
                <p className="score-number">{tiesScore}</p>
            </div>
            <div className="score-o">
                <p>{playerO}</p>
                <p className="score-number">{OScore}</p>
            </div>
        </footer>
    )
}