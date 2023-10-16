import React from "react";
import { GameType } from "./types";

export const MenuFooter = ({setGameType}: {setGameType(gametype: GameType): void}) => {
    return (
        <footer>
            <button id="buttonCPU">NEW GAME (VS CPU)</button>
            <button id="buttonPlayer">NEW GAME (VS PLAYER)</button>
        </footer>
    )
}