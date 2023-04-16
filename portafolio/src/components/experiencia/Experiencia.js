import React, { useState } from 'react';

import './Experiencia.scss';

import { Highlight } from '../highLight/Highlight';
import { CardContainer } from '../cardContainer/CardContainer';

import gengar from './../../img/gengar.png';
import mega from './../../img/mega.png';
import hamburguesa from './../../img/fullstack-removebg-preview.png';
import vw from './../../img/vwB.webp';
import alten from './../../img/ALTEN-Logo.svg.png';
import uaeh from './../../img/uaeh.png';
import leganux from './../../img/circullogo.png';
import { Modal } from '../modal/Modal';
import { useModal } from '../../hooks/useModal';
import { Habilidades } from '../habilidades/Habilidades';

export const Experiencia = () => {

	const [contentModal, setContentModal] = useState(<div></div>);

	let { isShow, showModal, hideModal } = useModal()


	const modalConstructor = (number) => {
		showModal()
		if (number === 1) {
			setContentModal((
				<>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<h1>Universidad Autónoma del Estado de Hidalgo</h1>
								<p>Durante mi estadía en la UAEH como desarrollador practicante realicé un sistema de revalidación de materias que sería usado en toda la Universidad y algunas de sus dependencias</p>
								<p>Me desempeñé como desarrollador front-end durante este proyecto pudiendo adquirir experiencia y una visión de cómo es que era el mundo laboral realmente.</p>
								<p>Durante esta estadia aprendi tecnologías como <span className="blackText">JavaScript, HTML y CSS</span>.</p>
							</div>
						</div>
					</div>
				</>
			))
			return
		}
		if (number === 2) {
			setContentModal((
				<>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<h1>Alten / VolksWagen</h1>
								<p>Actualmente me encuentro trabajando para la empresa francesa Alten, prestando mis servicios a tiempo completo en Volkswagen de México.</p>
								<p>Hasta el momento volviendose mi mayor reto profesional ayudando a mejorar procesos y servicios a una de las empresas más grandes del mundo y lider absoluto en la industria automotriz.</p>
								<p>Actualmente me encuentro en el puesto de <span className="blackText">desarrollador web</span>, cumpliento tareas de <span className="blackText">front-end</span> como de <span className="blackText">back-end</span> ocupando multiples tecnologías.</p>
							</div>
						</div>
					</div>
				</>
			))
			return
		}
		if (number === 3) {
			setContentModal((
				<>
					<div className="container">
						<div className="row">
							<div className="col-12 text-center">
								<h1>Leganux</h1>
								<p>El startUp leganux fue mi primer empleo formal en mi carrera, durante este periodo aprendí la mayorias de cosas que sé y adquirí gran parte de mi experiencia.</p>
								<p>Leganux es un startup dedicado a hacer páginas web y servicios a medida para todo tipo de clientes, trabajando codo a codo con todo tipo de empresas e incluso personalidades del mundo "influencer".</p>
								<p>Durante mi tiempo aquí trabaje dentro de la mayoría de aspectos que comprende un desarrollador web, pasando desde el front-end, back-end y Dev-ops, ocupando tecnologias como <span className="blackText">JavaScript, Jquery, CSS, npm, github, PUG, mongoDB, NodeJs.</span></p>
							</div>
						</div>
					</div>
				</>
			))
			return
		}
	}

	return (
		<>
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

					<div className='container-fluid mt-5'>
						<Highlight text={'Curriculum y gustos'} />
					</div>

					<div title="section1" id="section1" className='containerCurriculum' >
						<div onClick={() => {
							modalConstructor(1)
						}}>
							<CardContainer
								color={'brown'}
								orientation={'orientationStart'}
								classes={['uaehText']}
								content={
									<div className='text-center exp'>
										<img width={'80%'} src={uaeh} alt='uaeh' />
										<h5 className='mt-4'> Universidad Autónoma del Estado de Hidalgo</h5>
										<p>Desarrollador front-end</p>
										<p>2018 - 2019</p>
									</div>
								}
							/>
						</div>
						<div onClick={() => {
							modalConstructor(2)
						}}>
							<CardContainer
								orientation={'orientationStart'}
								classes={['vwText']}
								color={'vw'}
								content={
									<div className='text-center exp'>
										<div className="container">
											<div className="row">
												<div className="col-6"><img width={'47.9%'} src={alten} alt='alten' /></div>
												<div className="col-6"><img width={'84%'} src={vw} alt='vwTec' /></div>
											</div>
										</div>
										<h5 className='mt-4'> Alten / VW de México </h5>
										<p>Desarrollador web</p>
										<p>2022 - Actualidad</p>
									</div>
								}
							/>
						</div>
						<div onClick={() => {
							modalConstructor(3)
						}}>
							<CardContainer
								color={'leganux'}
								orientation={'orientationStart'}
								classes={['leganuxText']}
								content={
									<div className='text-center exp'>
										<img width={'36%'} src={leganux} alt='leganux' />
										<h5 className='mt-4'> Leganux </h5>
										<p>Desarrollador full-stack</p>
										<p>2020 - 2022</p>
									</div>
								}
							/>
						</div>
					</div>


					<div className='container-fluid mt-5'>
						<Highlight text={'Habilidades y tecnologías'} />
						<div className="row">
							<Habilidades />
						</div>

					</div>
				</div>
			</div>
			<Modal isShow={isShow} content={contentModal} hideModal={hideModal} />
		</>
	);
};
