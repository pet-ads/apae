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
    let updatedEquipeData = [];
    if (selectedButton === 1) {
      updatedEquipeData = equipe.filter(item => item.funcao === 'professor');
    } else if (selectedButton === 2) {
      updatedEquipeData = equipe.filter(item => item.funcao === 'monitor');
    } else if (selectedButton === 3) {
      updatedEquipeData = equipe.filter(item => item.funcao === 'ex-monitor');
    }
    updatedEquipeData.sort((a, b) => a.name.localeCompare(b.name));

    setEquipeData(updatedEquipeData);
  }, [selectedButton]);

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

  const getSlidesToShow = (equipeData, largura) => {
    if (largura < 480) {
      return Math.min(equipeData.length, 1);
    } else if (largura < 665) {
      return Math.min(equipeData.length, 2);
    } else if (largura < 1024) {
      return Math.min(equipeData.length, 3);
    } else if (largura < 1150) {
      return Math.min(equipeData.length, 4);
    } else {
      return Math.min(equipeData.length, 5);
    }
  };

  const slidesToShow = getSlidesToShow(equipeData, largura);

  const getDotsToShow = (largura) => {
    if (largura < 700) {
      return false;
    } else {
      return true;
    }
  }

  const dotsToShow = getDotsToShow(largura);

  const options = ['Professores', 'Monitores', 'Ex-Monitores'];

  const handleButtonClick = (value) => {
    setSelectedButton(value);
  };

  const renderButtons = () => {
    if (largura < 700) {
      return (
        <select className="select-equipe"
          value={selectedButton}
          onChange={(e) => handleButtonClick(parseInt(e.target.value))}
        >
          {options.map((type, index) => (
            <option value={index + 1} key={type}>
              {type}
            </option>
          ))}
        </select>
      );
    } else {
      return (
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
          <button
            className={selectedButton === 3 ? "selected" : ""}
            onClick={() => setSelectedButton(3)}>
            Ex-Monitores
          </button>
        </div>
      );
    }
  };

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
    <section className="equipe-container">
      <p className="titulo-equipe">Equipe</p>

      {renderButtons()}

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
