import { GameBoardProps } from "../types.ts";

export const GameBoard = ({gameType, player1Pick}: GameBoardProps) => {
    return (
        <>
            <div>{gameType}</div>
            <div>{player1Pick}</div>
        </>
    );
}