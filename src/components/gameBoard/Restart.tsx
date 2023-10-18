
export const Restart = ( { handleResetClick}: { handleResetClick: () => void}) => {
    return (
        <div className='restart-container'>
            <div className='restart' onClick={handleResetClick}>
                <img src="/assets/icon-restart.svg" alt="restart game logo" className="restart-logo"></img>
            </div>
            {/* logic */}
        </div>
    );
}