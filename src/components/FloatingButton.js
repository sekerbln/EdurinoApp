import React from 'react';
import { useNavigate } from 'react-router-dom';
import './FloatingButton.css';
import background from '../assets/background.png';

const FloatingButton = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/leo-intro');
    };

    return (
        <div className="screen" style={{ backgroundImage: `url(${background})` }}>
            <button className="floating-button-home" onClick={handleClick}>
                Öffne die Box
            </button>
        </div>
    );
};

export default FloatingButton;
