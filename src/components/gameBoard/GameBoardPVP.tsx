import { GameBoardProps } from "../types.ts";
import { Tile } from "./Tile.tsx";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import '../../css/gameBoard.css';

const generateTiles = () => {
    const tiles = [];
    for (let i = 0; i < 9; i++) {
        tiles.push(<Tile key={i} />);
    }
    return tiles;
}

export const GameBoardPVP = ({player1Pick}: GameBoardProps) => {
    return (
        <>
            <Header />
            <main className="grid">
                {generateTiles()}
            </main>
            <Footer />
        </>
    );
}