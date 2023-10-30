import React from "react";
import Square from "../Square/Square";
import Button from "../Button/Button";
import {useState} from "react";
import './Box.css';

interface Square {
    hasItem: boolean,
    clicked: boolean,
}

const MainBox: React.FC<Square> = () => {

    const createItems = () => {
        const itemsArray = [];
        const randomIndex = Math.floor(Math.random() * 36);

        for (let i = 0; i < 36; i++) {
            const hasItem = i === randomIndex;
            itemsArray.push({ hasItem, clicked: false });
        }
        return itemsArray;
    };

    const [squares, setSquares] = useState(createItems());

    const newStateForSquare = (index: number) => {
        const squaresCopy = [...squares];
        squaresCopy[index].clicked = true;
        setSquares(squaresCopy);
    };

    const [tries, setTries] = useState(0);

    const incrementTries = () => {
        setTries(tries + 1);
    };

    const resetSquares = () => {
        const newSquares = createItems();
        setSquares(newSquares);
        setTries(0);
    };

    return (
        <div>
            <div className='main-box'>
                {squares.map((square, index) => (
                    <Square key={index} hasItem={square.hasItem}
                            clicked={square.clicked} onClick={() => {
                            newStateForSquare(index);
                            incrementTries();
                        }}
                    />
                ))}
                <span>Tries: {tries}</span>
            </div>
            <div>
                <Button resetSquares={resetSquares} />
            </div>
        </div>
    );
};

export default MainBox;