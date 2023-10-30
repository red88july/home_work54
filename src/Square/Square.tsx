import './Square.css';
import React from "react";


interface PropsForSquare {
    hasItem: boolean,
    clicked: boolean,
}
const Square:React.FC<PropsForSquare>= () => {
    return (
        <div className='square'>

        </div>
    );
};

export default Square;