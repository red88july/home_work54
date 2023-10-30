import Square from "../Square/Square";
import './Box.css';



interface Square {
    hasItem: boolean,
    clicked: boolean,
}

const mainBox: React.FC<Square> = () => {

    // const arrayCurrent = () => {
    //     const initialArray = [];
    //     const arrayForms = {hasItem: false, clicked: false};
    //
    //     for(let i = 0; i < 36; i++) {
    //         initialArray.push({...arrayForms});
    //     }
    //
    //     const symbol =  '$';
    //
    //     const filtredArray = initialArray.filter((item) => item.symbol === symbol);
    //
    //     if (filtredArray.length) {
    //         const randomIndex = Math.floor(Math.random() * initialArray.length);
    //         const dollarSymbol = filtredArray[randomIndex];
    //         return dollarSymbol;
    //     }
    //
    //     return initialArray;
    // };
    const createItems = () => {
        const itemsArray = [];
        const randomIndex = Math.floor(Math.random() * 36);

        for (let i = 0; i < 36; i++) {
            const hasItem = i === randomIndex;
            itemsArray.push({ hasItem, clicked: false });
        }

        return itemsArray;
    };

const squaresArray = createItems();

// const [squares, setSquares] = useState(createItems());

    return (
        <div className='main-box'>
            {squaresArray.map((square) => (
                    <Square
                        hasItem={square.hasItem}
                        clicked={square.clicked}
                    />
                ))}
        </div>
    );
};

export default mainBox;