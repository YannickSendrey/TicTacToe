import React, { useState } from "react";
import { LogoHeader } from "./LogoHeader";
import { MenuMain } from "./MenuMain";
import { MenuFooter } from "./MenuFooter";
import { GameType, Player1Pick } from "./types.ts";
import "../css/menu.css";


export const Menu = ({setGameType}: {setGameType(gametype: GameType): void}) => {
    const [player1Pick, setPlayer1Pick] = useState<Player1Pick>("");

    return (
        <div id="container">
            <LogoHeader />
            <MenuMain />
            <MenuFooter setGameType={setGameType}/>
        </div>
    );
}