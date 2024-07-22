import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SelectFigur.css';
import background from '../assets/SelectFigur.png';
import leftButtonS from '../assets/leftButton.png';
import ollieSelectImage from '../assets/OllieSelect.png';
import leoSelectImage from "../assets/LeoSelect.png";
import ariSelectImage from "../assets/AriSelect.png";
import alexSelectImage from '../assets/AlexSelect.png';
import asaSelectImage from "../assets/AsaSelect.png";
import jukiSelectImage from "../assets/JukiSelect.png";

const SelectFigur = () => {
    const navigate = useNavigate();
    const [showNotification, setShowNotification] = useState(false);

    const handleLeftButtonClick = () => {
        navigate('/leo-intro');
    };

    const handleClick = () => {
        navigate('/leo-intro');
    };

    const ollieHandleClick = () => {
        navigate('/ollie-game-portal');
    };

    const ariHandleClick = () => {
        navigate('/ari-game');
    };

    const leoHandleClick = () => {
        navigate('/leo-game');
    };

    const handleDevelopmentClick = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 1000);
    };

    return (
        <div className="screen" style={{ backgroundImage: `url(${background})` }}>
            <div className="left-button-s" onClick={handleLeftButtonClick}>
                <img src={leftButtonS} alt="Left Button" />
            </div>

            <div className="ollie-select" onClick={ollieHandleClick}>
                <img src={ollieSelectImage} alt="Ollie Select" />
            </div>

            <div className="leo-select" onClick={leoHandleClick}>
                <img src={leoSelectImage} alt="Leo Select" />
            </div>

            <div className="ari-select" onClick={ariHandleClick}>
                <img src={ariSelectImage} alt="Ari Select" />
            </div>

            <div className="alex-select" onClick={handleDevelopmentClick}>
                <img src={alexSelectImage} alt="Alex Select" />
            </div>

            <div className="asa-select" onClick={handleDevelopmentClick}>
                <img src={asaSelectImage} alt="Asa Select" />
            </div>

            <div className="juki-select" onClick={handleDevelopmentClick}>
                <img src={jukiSelectImage} alt="Juki Select" />
            </div>

            {showNotification && (
                <div className="notification">
                    Under Development
                </div>
            )}
        </div>
    );
};

export default SelectFigur;
