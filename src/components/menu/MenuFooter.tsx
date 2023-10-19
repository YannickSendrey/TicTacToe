import { MenuFooterProps } from "../types";

export const MenuFooter = ({handleLaunchClick}: MenuFooterProps) => {


    return (
        <footer>
            <button id="buttonCPU" onClick={() => handleLaunchClick('CPU')}>NEW GAME (VS CPU)</button>
            <button id="buttonPlayer" onClick={() => handleLaunchClick('PVP')}>NEW GAME (VS PLAYER)</button>
        </footer>
    )
}