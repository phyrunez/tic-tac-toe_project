import { useState } from "react";

const GameOver = ({ winner, rematch }) => {
    const [displayGameOver, setDisplayOver] = useState(true)

    const handleDisplay = () => {
        setDisplayOver(prevState => !prevState)
    }

    return (
        <>
            {/* {displayGameOver && ( */}
                <div id="game-over">
                    <h2>Game Over</h2>
                    {winner && <p>{winner} won!</p>}
                    {!winner && <p>It's a draw!</p>}
                    <p>
                        <button onClick={rematch}>Rematch!</button>
                    </p>
                </div>
            {/* )} */}
        </>
    )
}

export default GameOver;