import React from "react";
import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TurmasAnteriores.css"

import alunos2017 from './TurmasAlunos/Alunos2017.json';
import alunos2018 from './TurmasAlunos/Alunos2018.json'
import alunos2019 from './TurmasAlunos/Alunos2019.json'
import alunos2022 from './TurmasAlunos/Alunos2022.json'

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
}

const TurmasAnteriores = () => {

  const [turma2017, setTurma2017] = useState([]);
  useEffect(() => { setTurma2017(alunos2017); }, []);

  const [turma2018, setTurma2018] = useState([]);
  useEffect(() => { setTurma2018(alunos2018); }, []);

  const [turma2019, setTurma2019] = useState([]);
  useEffect(() => { setTurma2019(alunos2019); }, []);

  const [turma2022, setTurma2022] = useState([]);
  useEffect(() => { setTurma2022(alunos2022); }, []);

  const [activeSlide, setActiveSlide] = useState(4);
  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="CarouselTurma">
      <div className="ButtonsTurmas">
        <button className="Show2017Carousel" onClick={() => handleSlideChange(1)}>2017</button>
        <button className="Show2018Carousel" onClick={() => handleSlideChange(2)}>2018</button>
        <button className="Show2019Carousel" onClick={() => handleSlideChange(3)}>2019</button>
        <button className="Show2022Carousel" onClick={() => handleSlideChange(4)}>2022</button>
      </div>

      <div className={`CarouselTurma2017 ${activeSlide === 1 ? 'active' : ''}`}>
        <h2> Turma 2017</h2>
        <Slider {...settings}>
          {turma2017.map((item) => (
            <div className="aluno">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className={`CarouselTurma2018 ${activeSlide === 2 ? 'active' : ''}`}>
        <h2> Turma 2018</h2>
        <Slider {...settings}>
          {turma2018.map((item) => (
            <div className="aluno">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className={`CarouselTurma2019 ${activeSlide === 3 ? 'active' : ''}`}>
        <h2> Turma 2019</h2>
        <Slider {...settings}>
          {turma2019.map((item) => (
            <div className="aluno">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>

      <div className={`CarouselTurma2022 ${activeSlide === 4 ? 'active' : ''}`}>
        <h2> Turma 2022</h2>
        <Slider {...settings}>
          {turma2022.map((item) => (
            <div className="aluno">
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
}

export default TurmasAnteriores