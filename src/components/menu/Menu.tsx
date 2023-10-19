import { LogoHeader } from "./LogoHeader.tsx";
import { MenuMain } from "./MenuMain.tsx";
import { MenuFooter } from "./MenuFooter.tsx";
import { MenuProps } from "../types.ts";
import { Player1Pick, GameType } from "../types.ts";
import "../../css/menu.css";


export const Menu = ({setGameType, setHasGameStarted, player1Pick, setPlayer1Pick}: MenuProps) => {

    const handlePickClick = (pick: Player1Pick): undefined => {
        setPlayer1Pick(pick);
    }

    const handleLaunchClick = (gametype: GameType): undefined => {
        if (player1Pick !== '') {
            setGameType(gametype);
            setHasGameStarted(true);
        } else {
            alert('Please pick a symbol first!');
        }
    }

    return (
        <div id="container">
            <LogoHeader />
            <MenuMain player1Pick={player1Pick} handlePickClick={handlePickClick} />
            <MenuFooter handleLaunchClick={handleLaunchClick}/>
        </div>
    );
}