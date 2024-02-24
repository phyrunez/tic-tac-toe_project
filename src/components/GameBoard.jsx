const GameBoard = ({ onSelectBox, board, winner }) => {
    const boxSelected = false;
   
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => 
                <li key={rowIndex}>
                    <ol>
                        {row.map((playerSymbol, colIndex) => 
                            <li key={colIndex}>
                                <button onClick={() => onSelectBox(rowIndex, colIndex)} disabled={playerSymbol || winner ? !boxSelected : boxSelected}>
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