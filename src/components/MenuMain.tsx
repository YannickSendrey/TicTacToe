import React from "react";

export const MenuMain = () => {
    return (
        <main>
            <h2>PICK PLAYER 1'S MARK</h2>
            <section>
                <div className="letterbox" id="xbox">
                    <img src="/assets/icon-x.svg" alt="blue X" className="letterImg" />
                </div>
                <div className="letterbox" id="obox">
                    <img src="/assets/icon-o.svg" alt="orange O" id="o" className="letterImg" />
                </div>
            </section>
            <h2 id="remember">REMEMBER : X GOES FIRST</h2>
        </main>
    )
}