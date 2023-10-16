export type Player1Pick = "" | "X" | "O";

export type GameType = "" |"vsCPU" | "vsPlayer2";

export type MenuMainProps = {
    player1Pick: Player1Pick;
    setPlayer1Pick: (player1Pick: Player1Pick) => void;
}