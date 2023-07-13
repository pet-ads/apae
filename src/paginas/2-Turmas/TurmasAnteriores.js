import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./TurmasAnteriores.css";

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

const TurmasAnteriores = () => {

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
    if (largura < 480) {
      return Math.min(filteredAlunos.length, 1);
    } else if (largura < 690) {
      return Math.min(filteredAlunos.length, 2);
    } else if (largura < 1024) {
      return Math.min(filteredAlunos.length, 3);
    } else if (largura < 1150){
      return Math.min(filteredAlunos.length, 4);
    } else {
      return Math.min(filteredAlunos.length, 5);
    }
  };

  const slidesToShow = getSlidesToShow(filteredAlunos, largura);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const sliderClassName = slidesToShow <= 4 ? "slider-default" : "";

  return (
    <div className="carousel-turmas">

      <div className="buttons-turmas">
        {distinctYears.map((year) => (
          <button
            className={selectedButton === year ? "selected" : ""}
            key={year}
            onClick={() => handleButtonClick(year)}>
            {year}
          </button>
        ))}
      </div>

      <Slider {...settings}>
        {filteredAlunos.map((item) => (
          <div className={`aluno ${sliderClassName}`} key={item.id}>
            <div className="foto">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="nome">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
}
export default TurmasAnteriores;