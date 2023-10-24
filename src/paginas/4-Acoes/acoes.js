import React, { useState } from 'react';
import Card from '../../componentes/Card_Acoes/card';
import img_aula from '../../componentes/Card_Acoes/aula_informatica.jpg';
import img_palestra from '../../componentes/Card_Acoes/palestra.jpg';
import img_visita from '../../componentes/Card_Acoes/visita_tecnica.jpg';
import "./acoes.css";
import Modal from '../../componentes/Modal/modal.js';

export default function Acoes() {
    const [selectedCardId, setSelectedCardId] = useState(null);

    const handleOpenModal = (cardId) => {
        setSelectedCardId(cardId);
    }

    const closeModal = () => {
        setSelectedCardId(null);
    }

    return (
        <section className="container">
            <p className="titulo">Ações</p>

            <div className="cards-container-geral">

                <div className="cards-container">
                    <Card
                        title='Aulas de Informática'
                        imageUrl={img_aula}
                        body='No curso de informática, os alunos aprendem desde tarefas básicas, como ligar o computador, manusear o mouse e escrever no teclado, até a utilização de softwares específicos, como navegadores e aplicativos do LibreOffice.'
                        cardId="informatica"
                        handleOpenModal={handleOpenModal}
                    />
                    <Card
                        title='Visita Técnica'
                        imageUrl={img_visita}
                        body='Durante a visita técnica, será agendada uma data para que os alunos bolsistas e voluntários visitem a APAE e tenham a oportunidade de conhecer o espaço e o trabalho desenvolvido por essa instituição.'
                        cardId="visita"
                        handleOpenModal={handleOpenModal}
                    />
                    <Card
                        title='Palestra'
                        imageUrl={img_palestra}
                        body='Na palestra, um profissional da APAE é convidado para ministrar uma apresentação no IFSP sobre pessoas com deficiência intelectual, visando promover maior compreensão e conscientização sobre o tema.'
                        cardId="palestra"
                        handleOpenModal={handleOpenModal}
                    />

                </div>

            </div>

            <Modal cardId={selectedCardId} closeModal={closeModal} />
        </section>
    );
}
    

