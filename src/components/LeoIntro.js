import React from 'react';
import './LeoIntro.css';
import { useNavigate } from 'react-router-dom';
import introVideo from '../assets/Leo.mp4';
import introBackground from '../assets/IntroBackground.png';
import edurinoLogo from '../assets/EdurinoLOGO.png';
import leoFigurImage from '../assets/LeoFigur.png';
import ariFigurImage from '../assets/AriFigurS.png';
import ollieFigurImage from '../assets/OllieFigurS.png';
import leftButton from '../assets/leftButton.png';
import rightButton from '../assets/rightButton.png';
const LeoIntro = () => {

    const navigate = useNavigate();

    const handleRightButtonClick = () => {
        navigate('/ollie-intro');
    };

    const handleLeftButtonClick = () => {
        navigate('/ari-intro');
    };

    const SpielenButtonClick = () => {
        navigate('/select-figur');
    };

    const ExitButtonClick = () => {
        navigate('/');
    };

    return (
        <div className="leo-intro">
            <div className="background-container">
                <img src={introBackground} alt="Intro Background" className="intro-background" />
            </div>

            <div className="left-button" onClick={handleLeftButtonClick}>
                <img src={leftButton} alt="Left Button" />
            </div>

            <div className="right-button-l" onClick={handleRightButtonClick}>
                <img src={rightButton} alt="Right Button" />
            </div>

            <div className="leo-figur-l">
                <img src={leoFigurImage} alt="Leo Figur" />
            </div>

            <div className="ari-figur-l">
                <img src={ariFigurImage} alt="Ari Figur" />
            </div>

            <div className="ollie-figur-l">
                <img src={ollieFigurImage} alt="Ollie Figur" />
            </div>

            <div className="video-container">
                <video className="leo-video" autoPlay={true} muted={true} controls>
                    <source src={introVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="intro-text-l">

                <button className="floating-button-l" onClick={SpielenButtonClick}>Spielen</button>

                <button className="exit-button-l" onClick={ExitButtonClick}>Exit</button>

            </div>
        </div>
    );
};

export default LeoIntro;
