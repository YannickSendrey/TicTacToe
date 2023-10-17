import { GameBoardLogo } from "./GameBoardLogo"
import { Restart } from "./Restart"
import { Turn } from "./Turn"
import { nextTurn } from "../types"

export const Header = ({ nextTurn }: { nextTurn: nextTurn}) => {
    return (
        <header>
            <GameBoardLogo />
            <Turn nextTurn={nextTurn} />
            <Restart />
        </header>
    )
}