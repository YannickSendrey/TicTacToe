

export const Tile = ( { handleTileClick }: { handleTileClick: () => void} ) => {
    return (
        <div className="tile" onClick={handleTileClick}>
            <img src="" alt="" />
        </div>
    );
}