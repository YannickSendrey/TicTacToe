import logo from '/assets/logo.svg';
import '../../css/gameBoard.css';

export const GameBoardLogo = () => {
	return (
		<div className='logo-container'>
			<img
				src={logo}
				alt='logo blue X and orange O'
				className='logo'
			/>
		</div>
	);
};
