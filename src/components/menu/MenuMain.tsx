import { MenuMainProps } from "../types";

export const MenuMain = ({player1Pick, handlePickClick}: MenuMainProps) => {
    

    return (
        <main className="menu-main">
            <h2>PICK PLAYER 1'S MARK</h2>
            <section className="menu-section">
                <div className="letterbox" id="xbox" onClick={() => handlePickClick('X')} style={{
                         filter: player1Pick === 'X' ? 'none' : 'grayscale(80%)' 
                    }}>
                    <img src="/assets/icon-x.svg" alt="blue X" className="letterImg" />
                </div>
                <div className="letterbox" id="obox" onClick={() => handlePickClick('O')}>
                    <img src="/assets/icon-o.svg" alt="orange O" id="o" className="letterImg" style={{
                         filter: player1Pick === 'O' ? 'none' : 'invert(100%) brightness(10%)' 
                    }} />
                </div>
            </section>
            <h2 id="remember">REMEMBER : X GOES FIRST</h2>
        </main>
    )
}