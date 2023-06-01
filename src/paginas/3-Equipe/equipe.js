import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./equipe.css"

import monitoresInfo from './monitores.json';
import professoresInfo from './professores.json';

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

const Monitores = () => {

    const [professores, setProfessores] = useState([]);
    useEffect(() => { setProfessores(professoresInfo); }, []);

    const [monitores, setMonitores] = useState([]);
    useEffect(() => { setMonitores(monitoresInfo); }, []);

    const [activeSlide, setActiveSlide] = useState(1);
    const handleSlideChange = (slideNumber) => {
        setActiveSlide(slideNumber);
    };

    const [selectedButton, setSelectedButton] = useState(1);

    const settingsProfessores = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 10000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    const settingsMonitores = {
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
        <section className="monitores-container">
            <h1>Equipe</h1>
            <div className="ButtonsEquipe">
                <button className={`ShowProfessoresCarousel ${selectedButton === 1 ? 'selected' : ''}`}
                    onClick={() => {
                        handleSlideChange(1);
                        setSelectedButton(1);
                    }}>Professores</button>
                <button className={`ShowMonitoresCarousel ${selectedButton === 2 ? 'selected' : ''}`}
                    onClick={() => {
                        handleSlideChange(2);
                        setSelectedButton(2);
                    }}>Monitores</button>
            </div>
            
            <div className={`CarouselProfessores ${activeSlide === 1 ? 'active' : ''}`}>
                <Slider {...settingsProfessores}>
                    {professores.map((item) => (
                        <div className="CardProfessor" key={item.id}>
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
            <div className={`CarouselMonitores ${activeSlide === 2 ? 'active' : ''}`}>
                <Slider {...settingsMonitores}>
                    {monitores.map((item) => (
                        <div className="CardMonitor" key={item.id}>
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

        </section>
    )
}
export default Monitores
