import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./TurmasAnteriores.css";

import alunos2017 from './TurmasAlunos/Alunos2017.json';
import alunos2018 from './TurmasAlunos/Alunos2018.json';
import alunos2019 from './TurmasAlunos/Alunos2019.json';
import alunos2022 from './TurmasAlunos/Alunos2022.json';
import alunos2023 from './TurmasAlunos/Alunos2023.json';

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

  const [turma2017, setTurma2017] = useState([]);
  useEffect(() => { setTurma2017(alunos2017); }, []);

  const [turma2018, setTurma2018] = useState([]);
  useEffect(() => { setTurma2018(alunos2018); }, []);

  const [turma2019, setTurma2019] = useState([]);
  useEffect(() => { setTurma2019(alunos2019); }, []);

  const [turma2022, setTurma2022] = useState([]);
  useEffect(() => { setTurma2022(alunos2022); }, []);

  const [turma2023, setTurma2023] = useState([]);
  useEffect(() => { setTurma2023(alunos2023); }, []);

  const [activeSlide, setActiveSlide] = useState(5);
  const handleSlideChange = (slideNumber) => {
    setActiveSlide(slideNumber);
  };

  const [selectedButton, setSelectedButton] = useState(5);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 10000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <div className="CarouselTurma">
      <div className="ButtonsTurmas">

        <button className={`Show2017Carousel ${selectedButton === 1 ? 'selected' : ''}`}
          onClick={() => {
            handleSlideChange(1);
            setSelectedButton(1);
          }}>2017</button>

        <button className={`Show2018Carousel ${selectedButton === 2 ? 'selected' : ''}`}
          onClick={() => {
            handleSlideChange(2);
            setSelectedButton(2);
          }}>2018</button>

        <button className={`Show2019Carousel ${selectedButton === 3 ? 'selected' : ''}`}
          onClick={() => {
            handleSlideChange(3);
            setSelectedButton(3);
          }}>2019</button>

        <button className={`Show2022Carousel ${selectedButton === 4 ? 'selected' : ''}`}
          onClick={() => {
            handleSlideChange(4);
            setSelectedButton(4);
          }}>2022</button>

        <button className={`Show2023Carousel ${selectedButton === 5 ? 'selected' : ''}`}
          onClick={() => {
            handleSlideChange(5);
            setSelectedButton(5);
          }}>2023</button>

      </div>

      <div className={`CarouselTurma2017${activeSlide === 1 ? 'active' : ''}`}>
        <Slider {...settings}>
          {turma2017.map((item) => (
            <div className="CardAluno" key={item.id}>
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

      <div className={`CarouselTurma2018 ${activeSlide === 2 ? 'active' : ''}`}>
        <Slider {...settings}>
          {turma2018.map((item) => (
            <div className="CardAluno" key={item.id}>
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

      <div className={`CarouselTurma2019 ${activeSlide === 3 ? 'active' : ''}`}>
        <Slider {...settings}>
          {turma2019.map((item) => (
            <div className="CardAluno" key={item.id}>
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

      <div className={`CarouselTurma2022 ${activeSlide === 4 ? 'active' : ''}`}>
        <Slider {...settings}>
          {turma2022.map((item) => (
            <div className="CardAluno" key={item.id}>
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

      <div className={`CarouselTurma2023 ${activeSlide === 5 ? 'active' : ''}`}>
        <Slider {...settings}>
          {turma2023.map((item) => (
            <div className="CardAluno" key={item.id}>
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
      
    </div>
  );
}

export default TurmasAnteriores