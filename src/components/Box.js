import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Box.css';
import background from '../assets/BoxBg.png';
import leftButtonS from '../assets/leftButton.png';
import ollieBoxImage from '../assets/OllieBox.png';
import leoBoxImage from "../assets/LeoBox.png";
import ariBoxImage from "../assets/AriBox.png";
import alexBoxImage from '../assets/AlexBox.png';
import asaBoxImage from "../assets/AsaBox.png";
import jukiBoxImage from "../assets/JukiBox.png";

const Box = () => {
    const navigate = useNavigate();

    const handleLeftButtonClick = () => {
        navigate('/leo-intro');
    };

    const handleClick = () => {
        navigate('/leo-intro');
    };

    const ollieHandleClick = () => {
        navigate('/ollie-game');
    };

    const ariHandleClick = () => {
        navigate('/ari-game');
    };

    const leoHandleClick = () => {
        navigate('/leo-game');
    };

    const alexHandleClick = () => {
        navigate('/leo-intro');
    };

    const asaHandleClick = () => {
        navigate('/leo-intro');
    };

    const jukiHandleClick = () => {
        navigate('/leo-intro');
    };


    return (


        <div className="screen" style={{ backgroundImage: `url(${background})` }}>

            <div className="left-button-box" onClick={handleLeftButtonClick}>
                <img src={leftButtonS} alt="Left Button" />
            </div>

            <div className="ollie-box" onClick={ollieHandleClick}>
                <img src={ollieBoxImage} alt="Ollie Select" />
            </div>

            <div className="leo-box" onClick={leoHandleClick}>
                <img src={leoBoxImage} alt="Leo Select" />
            </div>

            <div className="ari-box" onClick={ariHandleClick}>
                <img src={ariBoxImage} alt="Ari Select" />
            </div>

            <div className="alex-box" onClick={alexHandleClick}>
                <img src={alexBoxImage} alt="Alex Select" />
            </div>

            <div className="asa-box" onClick={asaHandleClick}>
                <img src={asaBoxImage} alt="Asa Select" />
            </div>

            <div className="juki-box" onClick={jukiHandleClick}>
                <img src={jukiBoxImage} alt="Juki Select" />
            </div>

        </div>
    );
};

export default Box;
