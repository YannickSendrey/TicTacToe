import { GameBoardLogo } from "./GameBoardLogo"
import { Restart } from "./Restart"
import { Turn } from "./Turn"
import '../../css/gameBoard.css';

export const Header = () => {
    return (
        <header>
            <GameBoardLogo />
            <Turn />
            <Restart />
        </header>
    )
}