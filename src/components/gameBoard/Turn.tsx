import { nextTurn } from "../types"

export const Turn = ({ nextTurn }: { nextTurn: nextTurn}) => {
    return (
        <div className="turn-container">
            <div className='turn'>
                <img src={nextTurn === 'X' ? '/assets/icon-x.svg' : '/assets/icon-o.svg'} alt="player turn letter" className='turn-logo'/>
                <h2>TURN</h2>
                {/* logic */}
            </div>
        </div>
    )
}