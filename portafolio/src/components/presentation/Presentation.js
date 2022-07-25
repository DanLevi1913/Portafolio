import React from 'react';
import { ButtonOptions } from '../buttonOptions/ButtonOptions';
import { CardContainer } from '../cardContainer/CardContainer';
import { Game } from '../game/Game';
import { Tec } from '../tecnologies/Tec';
import './Presentation.scss';

export const Presentation = () => {
	return (
		<div className='presentationView'>
			<div className='container'>
				<div className='row'>
					<div className='col'>
						<h1>Hola, soy Levi Torres</h1>
						<p>
							Soy desarrollador web y esta es mi página personal ...
							<span className='minnorText'>y profesional</span>. Mi proposito con esta página es que
							las personas que la lean, sean amigos, colegas o ...
							<span className='minnorText'>potenciales clientes,</span> puedan conocer algo sobre
							mí, no sólo como el profesional, carrera o habilidades que tengo, sino a la persona
							que soy.
						</p>
					</div>
				</div>
			</div>

			<div className='container mt-5'>
				<div className='row'>
					<div className='col-12 col-md-5 p-1'>
						<CardContainer
							color={'pink'}
							orientation={'orientationCenter'}
							content={
								<>
									<h3>Escolaridad</h3>
									<hr />
									<p>
										Soy egresado y titulado de la licenciatura en{' '}
										<span className='blackText'>ciencias computacionales</span> por la
										<span className='blackText'>
											{' '}
											Universidad Autonónoma del Estado De Hidalgo.
										</span>
									</p>
									<p>
										Culminé mis estudios el año 2019 y conseguí mi titulación por EGEL con
										testimonio de sobresaliente.
									</p>
								</>
							}
						/>
					</div>
					<div className='col-12 col-md-7 p-1'>
						<CardContainer
							color={'blue'}
							orientation={'orientationStart'}
							classes={['h-100']}
							content={
								<>
									<h3>Personalidad</h3>
									<hr />
									<p>
										Me concidero una persona <span className='blackText'> alegre y curiosa</span>,
										tiendo a ser muy enérgico en ambientes en los que me siento cómodo. La mayor
										parte de mi tiempo libre lo utilizo tratando de aprender cosas nuevas y
										disfrutar de algunos de mis hobbies que van normalmente cambian con el tiempo,
										tales como
										<span className='blackText'> videojuegos, coleccionismo y deportes.</span>
									</p>
								</>
							}
						/>
					</div>
				</div>
			</div>

			<div className='container-fluid mt-5'>
				<div className='row'>
					<ButtonOptions />
				</div>
			</div>
		</div>
	);
};
