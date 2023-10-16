import { GameBoardProps } from "../types.ts";

export const GameBoardCPU = ({player1Pick}: GameBoardProps) => {
    return (
        <>
            <h1>VS CPU youhou</h1>
            <div>{player1Pick}</div>
        </>
    );
}