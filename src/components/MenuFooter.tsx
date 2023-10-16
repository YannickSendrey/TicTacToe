import { GameType } from "./types";

export const MenuFooter = ({setGameType}: {setGameType(gametype: GameType): void}) => {
    const handleClick = (gametype: GameType): undefined => {
        setGameType(gametype);
    }

    return (
        <footer>
            <button id="buttonCPU" onClick={() => handleClick('vsCPU')}>NEW GAME (VS CPU)</button>
            <button id="buttonPlayer" onClick={() => handleClick('vsPlayer2')}>NEW GAME (VS PLAYER)</button>
        </footer>
    )
}