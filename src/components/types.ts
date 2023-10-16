export type Player1Pick = "" | "X" | "O";

export type GameType = "" |"PVP" | "CPU";

export type MenuProps = {
    setGameType: (gameType: GameType) => void;
    setHasGameStarted: (hasGameStarted: boolean) => void;
    player1Pick: Player1Pick;
    setPlayer1Pick: (player1Pick: Player1Pick) => void;
}

export type MenuFooterProps = {
    setGameType: (gameType: GameType) => void;
    setHasGameStarted: (hasGameStarted: boolean) => void;
}

export type MenuMainProps = {
    player1Pick: Player1Pick;
    setPlayer1Pick: (player1Pick: Player1Pick) => void;
}

export type GameBoardProps = {
    player1Pick: Player1Pick;
}