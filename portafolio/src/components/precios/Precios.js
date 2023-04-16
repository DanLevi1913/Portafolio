import React from "react";
import { CardContainer } from "../cardContainer/CardContainer";
import { Highlight } from "../highLight/Highlight";

import './Precios.scss';

export const Precios = () => {
    return (
        <>
            <div className="precios" id="section2">
                <div className='container mt-5'>
                    <Highlight text={'Paquetes y precios'} />
                </div>

                <div className="container paquetes">
                    <div className="row">
                        <div className="col-md-3 offset-md-1">
                            <CardContainer
                                color={'pink'}
                                orientation={'orientationCenter'}
                                classes={['preciosPannel']}
                                content={
                                    <>
                                        <h3>Plan simple</h3>
                                        <hr />
                                        <p>
                                            El plan simple constituye una landing page con todo lo necesario para <span className="blackText"> tu negocio</span> o <span className="blackText">tu portafolio profesional</span>
                                        </p>
                                        <div>
                                            <p>
                                                Este paquete consiste en:
                                            </p>
                                            <ul>
                                                <li>- Diseño UX/UI</li>
                                                <li>- Diseño responsivo (Mobil y tablet)</li>
                                                <li>- Alojamiento en servidor y dominio*</li>
                                            </ul>
                                        </div>

                                    </>
                                }
                            />
                        </div>
                        <div className="col-md-4">
                            <CardContainer
                                color={'pink'}
                                orientation={'orientationCenter'}
                                classes={['preciosPannel']}
                                content={
                                    <>
                                        <h3>Plan simple</h3>
                                        <hr />
                                        <p>
                                            El plan Pro te ayudará a conseguir esa herramienta especifica que tanto necesitas, <span className="blackText">control de usuarios y logue</span>, <span className="blackText">envio de notificaciones y aplicativos especificos para todas tus necesidades </span>
                                        </p>
                                        <div>
                                            <p>
                                                Este paquete consiste en:
                                            </p>
                                            <ul>
                                                <li>- Plan Plus</li>
                                                <li>- Notificaciones mediante email</li>
                                                <li>- Funcionalidad especifica para tu solución</li>
                                                <li>- Gestion de cuentas</li>
                                            </ul>
                                        </div>

                                    </>
                                }
                            />
                        </div>
                        <div className="col-md-3">
                            <CardContainer
                                color={'pink'}
                                orientation={'orientationCenter'}
                                classes={['preciosPannel']}
                                content={
                                    <>
                                        <h3>Plan Plus</h3>
                                        <hr />
                                        <p>
                                            El plan plus constituye un sitio o una herramienta más compleja, si requieres guardar registros o bien,
                                            mantener un <span className="blackText"> stock de tus productos</span> o <span className="blackText"> control de algún sobre personal o material </span>, esta es tu opción
                                        </p>
                                        <div>
                                            <p>
                                                Este paquete consiste en:
                                            </p>
                                            <ul>
                                                <li>- Plan simple</li>
                                                <li>- Uso de base de datos</li>
                                                <li>- Panel de control admin</li>
                                            </ul>
                                        </div>

                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};
