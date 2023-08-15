import React, { useState } from "react";
import Modal from "react-modal";
import Slider from '../Slider/slider.js';
import './modal.css';


function CustomModal(){
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal(){
        setIsOpen(true);
    }

    function closeModal(){
        setIsOpen(false);
    }

    return(
        <div className="container-modal">
            <button className = "button-modal" onClick={openModal}>Saiba mais</button>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName ="modal-overlay"
                className="conteudo-modal"
            >
                <h2 className="titulo-modal">Galeria de fotos</h2>
                <Slider></Slider>
                <button className = "button-modal" onClick={closeModal}>Close</button>

            </Modal>
        </div>
    );
}

export default CustomModal;