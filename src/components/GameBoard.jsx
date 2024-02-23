const initialGameValue = [
    [ null, null, null ],
    [ null, null, null ],
    [ null, null, null ]
];

const GameBoard = ({ onSelectBox, turns }) => {

    let gameBoard = initialGameValue;

    for(const turn of turns) {
        const { box, player } = turn;
        const { row, col } = box

        gameBoard[row][col] = player
    }

    // const [gameBoard, setGameBoard] = useState(initialGameValue);

    // const handleSelectedBox = (rowIndex, colIndex) => {
    //     setGameBoard(prevState => {
    //         let updatedGameBoard = [...prevState.map((innerArray) => [...innerArray])]
    //         updatedGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return updatedGameBoard;
    //     })

    //     onSelectBox();
    // }

    return (
        <ol id="game-board">
            {gameBoard.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => onSelectBox(rowIndex, colIndex)}>
                                    {playerSymbol}
                                </button>
                            </li>
                        )}
                    </ol>
                </li>
            )}
        </ol>
    )
}

export default GameBoard;