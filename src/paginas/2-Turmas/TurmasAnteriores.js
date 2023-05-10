import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TurmasAnteriores.css"

import { Turma2017 } from './TurmasAlunos/Alunos2017.js'
import { Turma2018 } from './TurmasAlunos/Alunos2018.js'
import { Turma2019 } from './TurmasAlunos/Alunos2019.js'
import { Turma2022 } from './TurmasAlunos/Alunos2022.js'

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black"}}
            onClick={onClick}
        />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", background: "black"}}
            onClick={onClick}
        />
    );
  }

function TurmasAnteriores(){
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
          {/* <div className="ButtonsTurmas">
            <button className="Show2017Carousel">2017</button>
            <button className="Show2018Carousel">2018</button>
            <button className="Show2019Carousel">2019</button>
            <button className="Show2022Carousel">2022</button>
          </div> */}
    
          <div className="CarouselTurma2017">
            <h2> Turma 2017</h2>
            <Slider {...settings}>
              {Turma2017.map((item) => (
                <div className="aluno">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </Slider>
          </div>
    
          <div className="CarouselTurma2018">
            <h2> Turma 2018</h2>
            <Slider {...settings}>
              {Turma2018.map((item) => (
                <div className="aluno">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </Slider>
          </div>
    
          <div className="CarouselTurma2019">
            <h2> Turma 2019</h2>
            <Slider {...settings}>
              {Turma2019.map((item) => (
                <div className="aluno">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </Slider>
          </div>
    
          <div className="CarouselTurma2022">
            <h2> Turma 2022</h2>
            <Slider {...settings}>
              {Turma2022.map((item) => (
                <div className="aluno">
                  <img src={item.image} alt={item.name} />
                  <h3>{item.name}</h3>
                </div>
              ))}
            </Slider>
          </div>
    
        </div>
      );
}

export default TurmasAnteriores