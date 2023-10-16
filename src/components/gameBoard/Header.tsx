import { LogoHeader } from "../menu/LogoHeader"
import { Restart } from "./Restart"
import { Turn } from "./Turn"

export const Header = () => {
    return (
        <header>
            <LogoHeader />
            <Turn />
            <Restart />
        </header>
    )
}