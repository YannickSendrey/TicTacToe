import { GameType, MenuFooterProps } from "./types";

export const MenuFooter = ({setGameType, setHasGameStarted}: MenuFooterProps) => {
    const handleClick = (gametype: GameType): undefined => {
        setGameType(gametype);
        setHasGameStarted(true);
    }

    return (
        <footer>
            <button id="buttonCPU" onClick={() => handleClick('vsCPU')}>NEW GAME (VS CPU)</button>
            <button id="buttonPlayer" onClick={() => handleClick('vsPlayer2')}>NEW GAME (VS PLAYER)</button>
        </footer>
    )
}