import './Square.css';
import React, { useState } from "react";

interface PropsForSquare {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void;
}

const Square: React.FC<PropsForSquare> = ({ hasItem, clicked, onClick }) => {
    const [symbolVisible, setSymbolVisible] = useState(false);

    const handleClick = () => {
        if (!clicked) {
            onClick();
            setSymbolVisible(true);
        }
    };

    return (
        <div className='square-container' onClick={handleClick}>
            <div className={`square ${clicked ? 'hidden-square' : ''}`}></div>
            {symbolVisible && hasItem && <span className='symbol'>$</span>}
        </div>
    );
};

export default Square;

