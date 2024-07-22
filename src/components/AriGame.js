import React from 'react';
import './AriGame.css';
import { useNavigate } from 'react-router-dom';
import introVideo from '../assets/DasistEdurino.mp4';
import Background from '../assets/AriGameBackground.png';
import edurinoLogo from '../assets/EdurinoLOGO.png';
import leftButton from '../assets/leftButton.png';
const AriGame = () => {

    const navigate = useNavigate();
    const SelectFigur = () => {
        console.log('Button clicked!');
    };


    const handleLeftButtonClick = () => {
        navigate('/select-figur');
    };

    const SpielenButtonClick = () => {
        navigate('/ollie-game-portal');
    };

    const BoxButtonClick = () => {
        navigate('/box');
    };

    return (
        <div className="ollie-game">
            <div className="background-container-og">
                <img src={Background} alt="Intro Background" className="background-container-og" />
            </div>

            <div className="left-button-og" onClick={handleLeftButtonClick}>
                <img src={leftButton} alt="Left Button" />
            </div>

            <div className="edurino_logo-l">
                <img src={edurinoLogo} alt="Edurino LOGO" />
            </div>

            <div className="video-container-og">
                <video className="leo-video" autoPlay={true} muted={true} controls>
                    <source src={introVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="intro-text">

                <button className="lern-mehr-ag" onClick={SpielenButtonClick}>Lern Mehr</button>

                <button className="my-box-ag" onClick={BoxButtonClick}>My Box</button>

            </div>
        </div>
    );
};

export default AriGame;
