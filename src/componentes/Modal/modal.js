import React from "react";
import Modal from "react-modal";
import Slider from '../../componentes/Slider/modal/slider.js';
import './modal.css';
import sliderData from '../../componentes/Slider/modal/sliderData.json';

function CustomModal({ cardId, closeModal }) {
    return (
        <div className="container-modal">
            <Modal
                isOpen={!!cardId}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                overlayClassName="modal-overlay"
                className="conteudo-modal"
                appElement={document.getElementById('root')}
            >
                {cardId && (
                    <>
                        <p className="titulo">Galeria de fotos</p>
                        <Slider slides={sliderData.sets.find(set => set.id === cardId)} />
                        <button className="button-modal" onClick={closeModal}>Close</button>
                    </>
                )}
            </Modal>
        </div>
    );
}

export default CustomModal;

