import React, { useState } from 'react';
import './OllieGamePortal.css';
import { useNavigate } from 'react-router-dom';
import introVideo from '../assets/DasistEdurino.mp4';
import Background from '../assets/OlliePortalBackground.png';
import edurinoLogo from '../assets/EdurinoLOGO.png';
import leftButton from '../assets/leftButton.png';

const OllieGamePortal = () => {
    const navigate = useNavigate();
    const [images, setImages] = useState([]);

    const handleLeftButtonClick = () => {
        navigate('/select-figur');
    };

    const BoxButtonClick = () => {
        navigate('/box');
    };

    const GameButtonClick = () => {
        navigate('/ollie-play');
    };

    const TestButtonClick = () => {
        navigate('/DraggableGame');
    };

    return (
        <div className="ollie-game-html">
            <h1 className="header-text">Was lernt mein Kind mit EDURINO?</h1>
            <div className="background-container-og">
                <img src={Background} alt="Intro Background" className="background-container-og" />
            </div>

            <div className="left-button-og" onClick={handleLeftButtonClick}>
                <img src={leftButton} alt="Left Button" />
            </div>

            <div className="edurino_logo-l">
                <img src={edurinoLogo} alt="Edurino LOGO" />
            </div>

            <div className="video-background">
                <div className="video-container-p">
                    <video className="edurino-video" autoPlay={true} muted={true} controls>
                        <source src={introVideo} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="game-background-container">
                <button className="start-the-game" onClick={GameButtonClick}>Start the Game</button>
            </div>

            <div className="intro-text-po">
                <button className="lern-mehr-ogh" onClick={TestButtonClick}>Lern Mehr</button>
                <button className="my-box-ogh" onClick={BoxButtonClick}>My Box</button>
            </div>
        </div>
    );
};

export default OllieGamePortal;
