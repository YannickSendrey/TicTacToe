import logo from '/assets/logo.svg';
import '../../css/gameBoard.css';

export const GameBoardLogo = ({ handleMenuClick }: { handleMenuClick: () => void}) => {
	return (
		<div className='logo-container'>
			<img 
				onClick={handleMenuClick}
				src={logo}
				alt='logo blue X and orange O'
				className='logo'
			/>
		</div>
	);
};
