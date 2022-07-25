import React, { useRef } from 'react';
import { Highlight } from '../highLight/Highlight';

import './ButtonOptions.scss';

export const ButtonOptions = () => {
	const divOne = useRef();
	const divTwo = useRef();

	const showExplain = (e) => {
		const target = e.current.classList[0];
		document.querySelector('.' + target + ' .explain').style.height = '100%';
		document.querySelector('.' + target + ' .explain div').classList.add('selected');
		document.querySelector('.' + target + ' .explain div h2').style.color = 'white';
		document.querySelector('.' + target + ' .explain div p').style.color = 'white';
	};
	const hideExplain = (e) => {
		const target = e.current.classList[0];
		document.querySelector('.' + target + ' .explain').style.height = '0';
		document.querySelector('.' + target + ' .explain div').classList.remove('selected');
		document.querySelector('.' + target + ' .explain div h2').style.color = 'black';
		document.querySelector('.' + target + ' .explain div p').style.color = 'black';
	};
	return (
		<>
			<Highlight text={'Accesso rápido'} />
			<div className='buttonOptions'>
				<div
					className='spaceOne'
					ref={divOne}
					onMouseEnter={() => {
						showExplain(divOne);
					}}
					onMouseLeave={() => {
						hideExplain(divOne);
					}}>
					<h1>clientes</h1>
					<div className='explain'>
						<div>
							<h2>¿Necesitas una página web?</h2>
							<p>Consulta mi paquetes y pide Información para tu proyecto.</p>
						</div>
					</div>
				</div>
				<div
					ref={divTwo}
					className='spaceTwo'
					onMouseEnter={() => {
						showExplain(divTwo);
					}}
					onMouseLeave={() => {
						hideExplain(divTwo);
					}}>
					<h1>Reclutadores</h1>
					<div className='explain'>
						<div>
							<h2>Información sobre mi perfil</h2>
							<p>
								Una propuesta siempre debe ser escuchada, conoce más a fondo mi perfil de
								desarrollo.
							</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
