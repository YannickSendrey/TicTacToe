import { LogoHeader } from "./LogoHeader";
import { MenuMain } from "./MenuMain";
import { MenuFooter } from "./MenuFooter";
import { MenuProps } from "./types.ts";
import "../css/menu.css";


export const Menu = ({setGameType, setHasGameStarted, player1Pick, setPlayer1Pick}: MenuProps) => {

    return (
        <div id="container">
            <LogoHeader />
            <MenuMain player1Pick={player1Pick} setPlayer1Pick={setPlayer1Pick} />
            <MenuFooter setGameType={setGameType} setHasGameStarted={setHasGameStarted}/>
        </div>
    );
}