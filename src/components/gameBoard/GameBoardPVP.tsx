import { GameBoardProps } from "../types.ts";

export const GameBoardPVP = ({player1Pick}: GameBoardProps) => {
    return (
        <>
            <h1>VS Player2 youhou</h1>
            <div>{player1Pick}</div>
        </>
    );
}