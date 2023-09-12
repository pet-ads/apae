import React from "react";
import img_aula from '../../componentes/Card_Acoes/aula_informatica.jpg';
import Card from '../../componentes/Card_Acoes/card';
import img_palestra from '../../componentes/Card_Acoes/palestra.jpg';
import img_visita from '../../componentes/Card_Acoes/visita_tecnica.jpg';
import "./acoes.css";


export default function Acoes() {
    return (
        <div className="acoes-container">
            <p className="titulo-acoes">Ações</p>
            <div className="cards-container-geral">
                <div className="cards-container">
                    <Card
                        title='Aulas de Informática'
                        imageUrl={img_aula}
                        body='&nbsp;&nbsp;&nbsp;No curso de informática, os alunos aprendem desde tarefas básicas, como ligar o computador, manusear o mouse e escrever no teclado, até a utilização de softwares específicos, como navegadores e aplicativos do LibreOffice.'
                    />

                    <Card
                        title='Visita Técnica'
                        imageUrl={img_visita}
                        body='&nbsp;&nbsp;&nbsp;Durante a visita técnica, será agendada uma data para que os alunos bolsistas e voluntários visitem a APAE e tenham a oportunidade de conhecer o espaço e o trabalho desenvolvido por essa instituição.'
                    />

                    <Card
                        title='Palestra'
                        imageUrl={img_palestra}
                        body='&nbsp;&nbsp;&nbsp;Na palestra, um profissional da APAE é convidado para ministrar uma apresentação no IFSP sobre pessoas com deficiência intelectual e os desafios enfrentados ordienalmente pelas mesmas.'
                    />
                </div>
            </div>
        </div>
    )
}
