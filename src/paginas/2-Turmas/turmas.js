import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./turmas.css"

import alunos from './Alunos.json';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "none" }}
            onClick={onClick}
        />
    );
}

const Turmas = () => {

    const [turma, setTurma] = useState([]);
    useEffect(() => { setTurma(alunos); }, []);

    const [selectedButton, setSelectedButton] = useState();
    const handleButtonClick = (ano) => {
        setTimeout(() => {
            setSelectedButton(ano);
        }, 10);
    };

    const filteredAlunos = turma.filter((item) => item.ano === selectedButton);
    filteredAlunos.sort((a, b) => a.name.localeCompare(b.name));

    const getDistinctYears = () => {
        const years = turma.map((item) => item.ano);
        const distinctYears = [...new Set(years)];
        return distinctYears;
    };
    const distinctYears = getDistinctYears();

    const maxYear = Math.max(...distinctYears);
    useEffect(() => { setSelectedButton(maxYear); }, [maxYear]);

    const [largura, setLargura] = useState(window.innerWidth);

    useEffect(() => {
        const handleRedimensionamento = () => {
            setLargura(window.innerWidth);
        };

        window.addEventListener('resize', handleRedimensionamento);

        return () => {
            window.removeEventListener('resize', handleRedimensionamento);
        };
    }, []);

    const getSlidesToShow = (filteredAlunos, largura) => {
        if (largura < 622) {
            return Math.min(filteredAlunos.length, 1);
        } else if (largura < 769) {
            return Math.min(filteredAlunos.length, 2);
        } else if (largura < 1250) {
            return Math.min(filteredAlunos.length, 3);
        } else if (largura < 1550) {
            return Math.min(filteredAlunos.length, 4);
        } else {
            return Math.min(filteredAlunos.length, 5);
        }
    };

    const getDotsToShow = (largura) => {
        if (largura < 700) {
            return false
        } else {
            return true
        }
    }

    const dotsToShow = getDotsToShow(largura);

    const renderButtons = () => {
        if (largura < 700) {
            return (
                <select className="select-turmas"
                    value={selectedButton}
                    onChange={(e) => handleButtonClick(parseInt(e.target.value))}
                >
                    {distinctYears.map((year) => (
                        <option value={year} key={year}>
                            {year}
                        </option>
                    ))}
                </select>
            );
        } else {
            return (
                <div className="buttons-turmas">
                    {distinctYears.map((year) => (
                        <button
                            className={selectedButton === year ? 'selected' : ''}
                            key={year}
                            onClick={() => handleButtonClick(year)}
                        >
                            {year}
                        </button>
                    ))}
                </div>
            );
        }
    };

    const slidesToShow = getSlidesToShow(filteredAlunos, largura);

    const settings = {
        dots: dotsToShow,
        infinite: true,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToShow,
        autoplay: true,
        autoplaySpeed: 10000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const sliderClassName = slidesToShow <= 4 ? "slider-default" : "";

    return (
        <section className="turmas-container">
            <p className="titulo-turmas">Turmas</p>
            <div className="carousel-turmas">

                {renderButtons()}

                <Slider {...settings}>
                    {filteredAlunos.map((item) => (
                        <div className={`aluno ${sliderClassName}`} key={item.id}>
                            <div className="foto">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="nome">
                                <b><p>{item.name}</p></b>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
}
export default Turmas;