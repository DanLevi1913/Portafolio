import React, { useRef, useState } from 'react';
import './App.scss';
import { Experiencia } from './components/experiencia/Experiencia';
import { Presentation } from './components/presentation/Presentation';

export const App = () => {
	const [isStarted, setIsStarted] = useState(false);

	const startButton = useRef();
	const startView = useRef();

	const chargeStart = () => {
		startButton.current.classList.add('charging');
	};

	const disChargeStart = () => {
		startButton.current.classList.remove('charging');
	};

	const getStarted = (e) => {
		document.querySelector('*').style.overflow = 'auto';

		setIsStarted(true);
		startButton.current.remove('charging');
		startButton.current.style.display = 'none';
		console.log(e.target);

		e.target.style.display = 'none';
		startView.current.classList.add('removeStart');
	};

	return (
		<>
			<div className='containerPrincipal'>
				<div className='startView' ref={startView}>
					<h1 ref={startButton}>Bienvenido</h1>
					<button
						disabled={isStarted}
						onMouseEnter={() => {
							chargeStart();
						}}
						onMouseLeave={() => {
							disChargeStart();
						}}
						onClick={(e) => {
							getStarted(e);
						}}>
						Comenzar
					</button>
				</div>
				{isStarted && <Presentation />}
				{isStarted && <Experiencia />}
			</div>
		</>
	);
};
