import React, { useState } from "react";
import Modal from "react-modal";
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
                <h2>Hello - I am a modal!</h2>
                <p>DSANFJANJRBGKRBSKGf kfdjs fisj</p>

                <button className = "button-modal" onClick={closeModal}>Close</button>

            </Modal>
        </div>
    );
}

export default CustomModal;