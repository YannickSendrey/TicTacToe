import { GameBoardProps } from "../types.ts";
import { Tile } from "./Tile.tsx";
import { Header } from "./Header.tsx";

export const GameBoardPVP = ({player1Pick}: GameBoardProps) => {
    return (
        <body>
            <Header />
            <div>{player1Pick}</div>
        </body>
    );
}