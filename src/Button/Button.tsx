import React from "react";

interface ButtonProps {
    resetSquares: () => void;
}

const Button: React.FC<ButtonProps> = ({ resetSquares }) => {
    return (
        <div>
            <button onClick={resetSquares}>Reset</button>
        </div>
    );
};

export default Button;