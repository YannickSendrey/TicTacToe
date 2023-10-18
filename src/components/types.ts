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
    gameType: GameType;
}

export type nextTurn = 'X' | 'O';

export type PlayerX = 'X (YOU)' | 'X (CPU)' | 'X (PLAYER 1)' | 'X (PLAYER 2)';

export type PlayerO = 'O (YOU)' | 'O (CPU)' | 'O (PLAYER 1)' | 'O (PLAYER 2)';