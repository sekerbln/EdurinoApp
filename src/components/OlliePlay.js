import React, { useState, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { useNavigate } from 'react-router-dom';
import './OlliePlay.css';
import Pear from '../assets/Pear.png';
import Mushroom from '../assets/Mushroom.png';
import Raspberry from '../assets/Raspberry.png';
import DragonFruit from '../assets/DragonFruit.png';
import Cheese from '../assets/Cheese.png';
import YellowApple from '../assets/YellowApple.png';
import GreenApple from '../assets/GreenApple.png';
import BlueApple from '../assets/BlueApple.png';
import YellowApple2 from '../assets/YellowApple2.png';
import Background from '../assets/OlliePlayBackground.png';

const ItemTypes = {
    FRUIT: 'fruit',
};

const initialItems = [
    { id: '1', src: Pear },
    { id: '2', src: Mushroom },
    { id: '3', src: Raspberry },
    { id: '4', src: DragonFruit },
    { id: '5', src: Cheese },
    { id: '6', src: YellowApple },
    { id: '7', src: GreenApple },
    { id: '8', src: BlueApple },
    { id: '9', src: YellowApple2 }
];

const DraggableFruit = ({ id, src }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.FRUIT,
        item: { id, src },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    return (
        <img
            ref={drag}
            src={src}
            alt="Fruit"
            className="food-image"
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move',
                width: '60px',
                height: '60px',
            }}
        />
    );
};

const GridCell = ({ index, fruit, setFruit }) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: ItemTypes.FRUIT,
        drop: (item) => setFruit(index, item),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));

    return (
        <div ref={drop} className="grid-cell" style={{ backgroundColor: isOver ? 'lightgreen' : 'rgba(255, 255, 255, 0.2)' }}>
            {fruit && <DraggableFruit id={fruit.id} src={fruit.src} />}
        </div>
    );
};

const OlliePlay = () => {
    const [grid, setGrid] = useState(Array(12).fill(null));
    const [gameComplete, setGameComplete] = useState(false);
    const navigate = useNavigate();

    const setFruit = (index, { id, src }) => {
        setGrid((prevGrid) => {
            const newGrid = [...prevGrid];
            newGrid[index] = { id, src };
            return newGrid;
        });
    };

    useEffect(() => {
        const isComplete = grid.every(cell => cell !== null);
        setGameComplete(isComplete);
    }, [grid]);

    const handleCompleteGame = () => {
        navigate('/box');
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="drag-drop-game">
                <div className="background-container">
                    <img src={Background} alt="Background" className="background-image" />
                </div>
                <div className="items-container">
                    {initialItems.map((item) => (
                        <DraggableFruit key={item.id} id={item.id} src={item.src} />
                    ))}
                </div>
                <div className="grid-container">
                    <div className="grid">
                        {grid.map((fruit, index) => (
                            <GridCell key={index} index={index} fruit={fruit} setFruit={setFruit} />
                        ))}
                    </div>
                </div>
                {gameComplete && (
                    <button className="complete-game-button" onClick={handleCompleteGame}>
                        Complete Game
                    </button>
                )}
            </div>
        </DndProvider>
    );
};

export default OlliePlay;
