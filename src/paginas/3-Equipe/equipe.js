import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./equipe.css";

import equipe from './equipe.json';

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

const Equipe = () => {
  const [selectedButton, setSelectedButton] = useState(1);
  const [equipeData, setEquipeData] = useState([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      let updatedEquipeData = [];
      if (selectedButton === 1) {
        updatedEquipeData = equipe.filter(item => item.funcao === 'professor');
      } else if (selectedButton === 2) {
        updatedEquipeData = equipe.filter(item => item.funcao === 'monitor');
      }
      
      updatedEquipeData.sort((a, b) => a.name.localeCompare(b.name));
      
      setEquipeData(updatedEquipeData);
    }, 10);

    return () => clearTimeout(delay);
  }, [selectedButton]);

  const slidesToShow = equipeData.length <= 4 ? equipeData.length : 5;

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
    <section className="equipe-container">
      <h1>Equipe</h1>
      <div className="buttons-equipe">
        <button
          className={selectedButton === 1 ? "selected" : ""}
          onClick={() => setSelectedButton(1)}>
          Professores
        </button>
        <button
          className={selectedButton === 2 ? "selected" : ""}
          onClick={() => setSelectedButton(2)}>
          Monitores
        </button>
      </div>

      <Slider {...settings}>
        {equipeData.map((item) => (
          <div className={`card-equipe ${sliderClassName}`} key={item.id}>
            <div className="foto">
              <img src={item.image} alt={item.name} />
            </div>
            <div className="nome">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default Equipe;

