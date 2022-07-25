import React from 'react';

import './Experiencia.scss';

import { Highlight } from '../highLight/Highlight';
import { CardContainer } from '../cardContainer/CardContainer';

import gengar from './../../img/gengar.png';
import mega from './../../img/mega.png';
import hamburguesa from './../../img/fullstack-removebg-preview.png';
import vw from './../../img/vwB.webp';
import uaeh from './../../img/uaeh.png';
import leganux from './../../img/circullogo.png';

export const Experiencia = () => {
	const changeSize = () => {
		console.log(document.querySelectorAll('.changeSize')[0]);
		const cardList = document.querySelectorAll('.changeSize');

		cardList.map((e) => {
			console.log(e);
		});
	};

	return (
		<div className='experienciaHobbis'>
			<div className='container-fluid mt-5'>
				<Highlight text={'Experiencias y Hobbis'} />
			</div>

			<div className='container'>
				<div className='row'>
					<div className='col'>
						<CardContainer
							color={'purple'}
							orientation={'orientationStart'}
							classes={['hoverGengar']}
							content={
								<div className='gengar'>
									<div>
										<img className='imgGengar' src={gengar} height={'200px'} alt='gengar' />
										<img className='mega' src={mega} height={'0'} alt='mega' />
									</div>

									<div>
										<h2>Mi pokémon favorito</h2>
										<p>
											Como parte de mi intención, la cuál es que se conozca a la persona que soy,
											presento un poco de mis hobbis y afinidades, los videojuegos y caricaturas de
											mi infancia. Una parte importante de mi infancia esta marcada por este pokémon
											<span className='blackText'> GENGAR!! </span>
										</p>
										<p>
											Este pokémon es mi favorito ya que, aparte de ser muy poderoso, me indentifíco
											con él. Gengar tiene una actitud timida y callada hasta perder el miedo y
											tomar confianza en si mismo y mostrar su verdadera
											<span className='blackText'> forma y capacidades. </span>
										</p>
									</div>
								</div>
							}
						/>
					</div>
				</div>
				<div className='row mt-5'>
					<div className='col'>
						<CardContainer
							color={'gray'}
							orientation={'orientationStart'}
							classes={['hoverPersonal']}
							content={
								<div className='personal'>
									<div>
										<h2>En mi carrera...</h2>
										<p>
											A lo largo de mi carrera me he desenvuelto en diferentes condiciones y
											diferentes circunstancias, desde trabajr en lugares pequeños pero con{' '}
											<span className='blackText'>
												muchas ganas de trascender y lograr algo en el mundo del desarrollo{' '}
											</span>
											, hasta
											<span className='blackText'> empresas de talla mundial .</span>
										</p>
										<p>
											He formado parte de equipos de desarrollo de diferentes caracterísitcas,
											siendo en su mayoria{' '}
											<span className='blackText'> desarrollador front-end </span>, el cual es mi
											puesto actual. Pero también he realizado trabajos como{' '}
											<span className='blackText'> desarrollador fullstack </span>
											encargandome de muchas de las{' '}
											<span className='blackText'>
												{' '}
												actividades primordiales de una desarrollo.{' '}
											</span>
										</p>
									</div>

									<div className='imgContainerBurger'>
										<img className='imgGengar' src={hamburguesa} height={'200px'} alt='gengar' />
										<img className='mega' src={vw} height={'0'} alt='vw' />
									</div>
								</div>
							}
						/>
					</div>
				</div>

				<div className='row mt-5'>
					<div
						className='col changeSize'
						onMouseEnter={() => {
							changeSize();
						}}>
						<CardContainer
							key={3}
							color={'brown'}
							orientation={'orientationStart'}
							classes={['uaehText']}
							content={
								<div className='text-center'>
									<img width={'80%'} src={uaeh} alt='uaeh' />
									<h5 className='mt-4'> Universidad Autónoma del Estado de Hidalgo</h5>
									<p>Desarrollador front-end</p>
									<p>2018 - 2019</p>
								</div>
							}
						/>
					</div>
					<div
						className='col changeSize'
						key={3}
						onMouseEnter={() => {
							changeSize();
						}}>
						<CardContainer
							color={'vw'}
							orientation={'orientationStart'}
							classes={['vwText']}
							content={
								<div className='text-center'>
									<img width={'36%'} src={vw} alt='vwTec' />
									<h5 className='mt-4'> Alten </h5>
									<p>Desarrollador web</p>
									<p>2022 - Actualidad</p>
								</div>
							}
						/>
					</div>
					<div
						className='col changeSize'
						key={3}
						onMouseEnter={() => {
							changeSize();
						}}>
						<CardContainer
							color={'leganux'}
							orientation={'orientationStart'}
							classes={['leganuxText']}
							content={
								<div className='text-center'>
									<img width={'36%'} src={leganux} alt='leganux' />
									<h5 className='mt-4'> Leganux </h5>
									<p>Desarrollador full-stack</p>
									<p>2020 - 2022</p>
								</div>
							}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
