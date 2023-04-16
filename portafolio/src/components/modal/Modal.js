import React, { useEffect, useRef } from "react";

import './Modal.scss'

import closeModal from './../../img/close.webp'


export const Modal = ({ isShow, content, hideModal }) => {


    return (
        <>
            {isShow && <div className="closeSpace">
                <div className="customModal">
                    <div className="customModal__close" onClick={() => {
                        hideModal()
                    }}>
                        <img src={closeModal} alt="closeModal" height='25' />
                    </div>
                    <div className="customModal__body">{content}</div>
                </div>
            </div>}

        </>);
};
