

export const Footer = () => {
    return (
        <footer className="grid-footer">
            <div className="score-x">
                <p>X</p>
                <p className="score-number">0</p>
            </div>
            <div className="score-ties">
                <p>TIES</p>
                <p className="score-number">0</p>
            </div>
            <div className="score-o">
                <p>O {/* cpu logic ? */}</p>
                <p className="score-number">0</p>
            </div>
        </footer>
    )
}