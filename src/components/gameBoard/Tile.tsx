import { TileProps } from "../types";

export const Tile = ( { handleTileClick, tilesSymbols, id}: TileProps) => {
    return (
        <div className="tile" onClick={() => handleTileClick(id)}>
            <img src={tilesSymbols[id]} alt='' className="tileImg"/>
        </div>
    );
}