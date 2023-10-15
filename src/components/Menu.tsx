import React from "react";
import { LogoHeader } from "./LogoHeader";
import "../css/menu.css";

export const Menu = () => {
    return (
        <div id="container">
            <LogoHeader />
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
            <footer>
                <button id="buttonCPU">NEW GAME (VS CPU)</button>
                <button id="buttonPlayer">NEW GAME (VS PLAYER)</button>
            </footer>
        </div>
    );
}