import React from 'react';
import './OllieIntro.css';
import { useNavigate } from 'react-router-dom';
import introVideo from '../assets/Ollie.mp4';
import introBackground from '../assets/IntroBackground.png';
import leoFigurImage from '../assets/LeoFigurS.png';
import ariFigurImage from '../assets/AriFigurS.png';
import ollieFigurImage from '../assets/OllieFigur.png';
import leftButton from '../assets/leftButton.png';
import rightButton from '../assets/rightButton.png';

const OllieIntro = () => {

    const navigate = useNavigate();

    const handleRightButtonClick = () => {
        navigate('/ari-intro');
    };

    const handleLeftButtonClick = () => {
        navigate('/leo-intro');
    };

    const SpielenButtonClick = () => {
        navigate('/select-figur');
    };

    const ExitButtonClick = () => {
        navigate('/');
    };


    return (
        <div className="ollie-intro">
            <div className="background-container">
                <img src={introBackground} alt="Intro Background" className="intro-background" />
            </div>


            <div className="left-button" onClick={handleLeftButtonClick}>
                <img src={leftButton} alt="Left Button" />
            </div>

            <div className="right-button" onClick={handleRightButtonClick}>
                <img src={rightButton} alt="Right Button" />
            </div>

            <div className="leo-figur-o">
                <img src={leoFigurImage} alt="Leo Figur" />
            </div>

            <div className="ari-figur-o">
                <img src={ariFigurImage} alt="Ari Figur" />
            </div>

            <div className="ollie-figur-o">
                <img src={ollieFigurImage} alt="Ollie Figur" />
            </div>

            <div className="video-container">
                <video className="leo-video" autoPlay={true} muted={true} controls>
                    <source src={introVideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>
            <div className="intro-text-l">

                <button className="floating-button-o" onClick={SpielenButtonClick}>Spielen</button>

                <button className="exit-button-o" onClick={ExitButtonClick}>Exit</button>
            </div>
        </div>
    );
};

export default OllieIntro;
