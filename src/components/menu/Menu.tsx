import { LogoHeader } from "./LogoHeader.tsx";
import { MenuMain } from "./MenuMain.tsx";
import { MenuFooter } from "./MenuFooter.tsx";
import { MenuProps } from "../types.ts";
import "../../css/menu.css";


export const Menu = ({setGameType, setHasGameStarted, player1Pick, setPlayer1Pick}: MenuProps) => {

    return (
        <div id="container">
            <LogoHeader />
            <MenuMain player1Pick={player1Pick} setPlayer1Pick={setPlayer1Pick} />
            <MenuFooter setGameType={setGameType} setHasGameStarted={setHasGameStarted}/>
        </div>
    );
}