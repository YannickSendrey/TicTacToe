import { GameBoardLogo } from "./GameBoardLogo"
import { Restart } from "./Restart"
import { Turn } from "./Turn"

export const Header = () => {
    return (
        <header>
            <GameBoardLogo />
            <Turn />
            <Restart />
        </header>
    )
}