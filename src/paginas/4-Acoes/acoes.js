import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from '../../componentes/Cards/Card_Acoes/card-acoes.js';
import img_aula from '../../componentes/Cards/Card_Acoes/aula_informatica.jpg';
import img_palestra from '../../componentes/Cards/Card_Acoes/palestra.jpg';
import img_visita from '../../componentes/Cards/Card_Acoes/visita_tecnica.jpg';
import "../div-cards.css";
import Modal from '../../componentes/Modal/modal.js';

export default function Acoes() {
    const [selectedCardId, setSelectedCardId] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const handleOpenModal = (cardId) => {
        setSelectedCardId(cardId);
    }

    const closeModal = () => {
        setSelectedCardId(null);
    }

    const updateWindowWidth = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', updateWindowWidth);
        return () => {
            window.removeEventListener('resize', updateWindowWidth);
        };
    }, []);

    const isMobile = windowWidth <= 1024; 

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <section className="container">
            <p className="titulo">Ações</p>
            <div className="cards-container">
                {isMobile ? (
                    <Slider {...settings}>
                        <div className='container-card-mobile'>
                            <Card
                                title='Aulas de Informática'
                                imageUrl={img_aula}
                                body='No curso de informática, os alunos aprendem desde tarefas básicas, como ligar o computador, manusear o mouse e escrever no teclado, até a utilização de softwares específicos, como navegadores e aplicativos do LibreOffice.'
                                cardId="informatica"
                                handleOpenModal={handleOpenModal}
                            />
                        </div>
                        <div className='container-card-mobile'>
                            <Card
                                title='Visita Técnica'
                                imageUrl={img_visita}
                                body='Durante a visita técnica, será agendada uma data para que os alunos bolsistas e voluntários visitem a APAE e tenham a oportunidade de conhecer o espaço e o trabalho desenvolvido por essa instituição.'
                                cardId="visita"
                                handleOpenModal={handleOpenModal}
                            />
                        </div>
                        <div className='container-card-mobile'>
                            <Card
                                title='Palestra'
                                imageUrl={img_palestra}
                                body='Na palestra, um profissional da APAE é convidado para ministrar uma apresentação no IFSP sobre pessoas com deficiência intelectual, visando promover maior compreensão e conscientização sobre o tema.'
                                cardId="palestra"
                                handleOpenModal={handleOpenModal}
                            />
                        </div>
                    </Slider>
                ) : (
                    <div className="cards">
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
                )}
            </div>
            <Modal cardId={selectedCardId} closeModal={closeModal} />
        </section>
    );
}
