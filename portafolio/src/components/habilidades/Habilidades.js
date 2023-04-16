import React, { useEffect, useState } from "react";

import './Habilidades.scss'


import pug from './../../img/pug.png'
import html from './../../img/html.png'
import css from './../../img/css.png'
import Bootstrap from './../../img/Bootstrap.png'
import tailwind from './../../img/tailwind.png'
import js from './../../img/js.png'
import cpp from './../../img/cpp.png'
import react from './../../img/react.png'
import next from './../../img/next.png'
import vue from './../../img/vue.png'
import jquery from './../../img/jquery.png'
import mongodb from './../../img/mongodb.png'
import mysql from './../../img/mysql.png'
import node from './../../img/node.png'
import git from './../../img/git.png'
import github from './../../img/github.png'
import bitbucket from './../../img/bitbucket.webp'
import npm from './../../img/npm.png'

export const Habilidades = () => {

    const [heightBox, setheightBox] = useState('auto');


    useEffect(() => {
        let boxes = document.getElementsByClassName('contentHab')
        let innerArray = [...boxes]
        console.log('boxes', boxes, boxes.length);


        console.log(boxes[0].clientHeight);

        let mayor = boxes[0].clientHeight;

        if (innerArray?.length > 0) {

            innerArray.forEach(element => {
                console.log(element);

                if (element.clientHeight > mayor) {
                    mayor = element.clientHeight
                }

            });

        }
        setheightBox(mayor)
        console.log(mayor);


    }, []);



    return (
        <>
            <div className="col-md-4">
                <div className="text-center contentHab" style={{ 'height': heightBox }} >
                    <h4 className="pb-2">Lenguaje de Marcado</h4>
                    <div className="row">
                        <div className="col-6">
                            <img src={html} className="customImg" alt="html" />
                            <p>HTML 5</p>
                        </div>
                        <div className="col-6">
                            <img src={pug} className="customImg" alt="pug" />
                            <p>PUG / Jade</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="text-center contentHab" style={{ 'height': heightBox }}>
                    <h4 className="pb-2">Estilos</h4>
                    <div className="row">
                        <div className="col-6">
                            <img src={Bootstrap} className="customImg" alt="Bootstrap" />
                            <p>Bootstrap</p>
                        </div>
                        <div className="col-6">
                            <img src={tailwind} className="customImg" alt="tailwind" />
                            <p>Tailwind</p>
                        </div>
                        <div className="col-6">
                            <img src={css} className="customImg" alt="css" />
                            <p>CSS 6</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="text-center contentHab" style={{ 'height': heightBox }}>

                    <h4 className="pb-2">Lenguaje de programación</h4>
                    <div className="row">
                        <div className="col-6">
                            <img src={js} className="customImg" alt="css" />
                            <p>JavaScript</p>
                        </div>
                        <div className="col-6">
                            <img src={cpp} className="customImg" alt="Bootstrap" />
                            <p>C++</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="text-center contentHab" style={{ 'height': heightBox }}>

                    <h4 className="pb-2">js Frameworks/Librerias</h4>

                    <div className="row">

                        <div className="col-6">
                            <img src={next} className="next" alt="Bootstrap" />
                            <p>Next js</p>
                        </div>
                        <div className="col-6">
                            <img src={vue} className="customImg" alt="tailwind" />
                            <p>Vue</p>
                        </div>
                        <div className="col-6">
                            <img src={react} className="customImg" alt="css" />
                            <p>ReactJs</p>
                        </div>
                        <div className="col-6">
                            <img src={jquery} className="customImg" alt="jquery" />
                            <p>Jquery</p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="col-md-4">
                <div className="text-center contentHab" style={{ 'height': heightBox }}>
                    <h4 className="pb-2">Base de datos</h4>
                    <div className="row">
                        <div className="col-6">
                            <img src={mongodb} className="customImg" alt="css" />
                            <p>mongo DB</p>
                        </div>
                        <div className="col-6">
                            <img src={mysql} className="customImg" alt="Bootstrap" />
                            <p>Mysql</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="text-center contentHab" style={{ 'height': heightBox }}>
                    <div className="layoutDos">
                        <h4 className="pb-2">Entornos</h4>
                        <div className="row">
                            <div className="col-6">
                                <img src={node} className="customImg" alt="css" />
                                <p>NodeJs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="text-center contentHab" style={{ 'height': heightBox }}>
                    <h4 className="pb-2">Gestion de versiones</h4>
                    <div className="row">
                        <div className="col-6">
                            <img src={git} className="customImg" alt="html" />
                            <p>Git</p>
                        </div>
                        <div className="col-6">
                            <img src={github} className="customImg" alt="pug" />
                            <p>Github</p>
                        </div>
                        <div className="col-6">
                            <img src={bitbucket} className="customImg" alt="pug" />
                            <p>Bitbucket</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="col-md-4">
                <div className="text-center contentHab" style={{ 'height': heightBox }}>
                    <div className="layoutDos">
                        <h4 className="pb-2">Gestor de paquetes</h4>
                        <div className="row">
                            <div className="col-6">
                                <img src={npm} className="npm" alt="Bootstrap" />
                                <p>npm</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
