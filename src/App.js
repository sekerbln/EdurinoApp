import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FloatingButton from './components/FloatingButton.js';
import LeoIntro from './components/LeoIntro.js';
import OllieIntro from './components/OllieIntro.js';
import AriIntro from './components/AriIntro.js';
import SelectFigur from "./components/SelectFigur.js";
import OllieGamePortal from "./components/OllieGamePortal.js";
import OlliePlay from "./components/OlliePlay.js";
import LeoGame from "./components/LeoGame.js";
import AriGame from "./components/AriGame.js";
import Box from "./components/Box.js";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<FloatingButton />} />
                <Route path="/leo-intro" element={<LeoIntro />} />
                <Route path="/ollie-intro" element={<OllieIntro />} />
                <Route path="/ari-intro" element={<AriIntro />} />
                <Route path="/select-figur" element={<SelectFigur />} />
                <Route path="/ollie-game-portal" element={<OllieGamePortal />} />
                <Route path="/ollie-play" element={<OlliePlay />} />
                <Route path="/leo-game" element={<LeoGame />} />
                <Route path="/ari-game" element={<AriGame />} />
                <Route path="/box" element={<Box />} />
            </Routes>
        </Router>
    );
};

export default App;
