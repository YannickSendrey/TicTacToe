import { GameBoardLogo } from "./GameBoardLogo"
import { Restart } from "./Restart"
import { Turn } from "./Turn"
import { HeaderProps } from "../types"

export const Header = ({ nextTurn, handleResetClick, handleMenuClick }: HeaderProps) => {
    return (
        <header>
            <GameBoardLogo handleMenuClick={handleMenuClick} />
            <Turn nextTurn={nextTurn} />
            <Restart handleResetClick={handleResetClick} />
        </header>
    )
}