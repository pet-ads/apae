import React from "react";
import img_aula from '../../componentes/Card_Acoes/aula_informatica.jpg';
import Card from '../../componentes/Card_Acoes/card';
import img_palestra from '../../componentes/Card_Acoes/palestra.jpeg';
import img_visita from '../../componentes/Card_Acoes/visita_tecnica.jpg';
import "./acoes.css";


export default function Acoes() {
    return (
        <div className="acoes-container">
            <h4>Ações</h4>
            <div className="cards-container-geral">
                <div className="cards-container">
                    <Card
                        title='Aulas de Informática'
                        imageUrl={img_aula}
                        body='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;No curso de informática, os alunos aprendem desde a fazer tarefas básicas, como ligar o computador, manusear o mouse e escrever com o teclado, até em mexer em softwares específicos, como o browser e aplicativos do LibreOffice.'
                    />

                    <Card
                        title='Visita Técnica'
                        imageUrl={img_visita}
                        body='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Na visita técnica, é marcada uma data para que os alunos bolsistas e voluntários façam uma visita técnica à APAE para conhecer o espaço e o trabalho desenvolvido nesta instituição.'
                    />

                    <Card
                        title='Palestra'
                        imageUrl={img_palestra}
                        body='&nbsp;&nbsp;&nbsp;&nbsp;Na palestra é convidado um um profissional da APAE para ministrar uma palestra no IFSP sobre as pessoas com deficiência intelectual.'
                    />
                </div>
            </div>
        </div>
    )
}
