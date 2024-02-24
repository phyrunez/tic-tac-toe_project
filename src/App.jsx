import { useState } from "react";
import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import Log from "./components/Log";
import GameOver from "./components/GameOver";
import { WINNING_COMBINATIONS } from "./data/winning-combinations";

const PLAYERS = {
  X: 'Player 1',
  O: 'Player 2'
}

const initialGameValue = [
  [ null, null, null ],
  [ null, null, null ],
  [ null, null, null ]
];


const deriveActivePlayer = (gameTurns) => {
  let currentPlayer = 'X';

  if(gameTurns.length > 0 && gameTurns[0].player === 'X') currentPlayer = 'O';
  
  return currentPlayer
}

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [handlePlayer, setHandlePlayer] = useState(PLAYERS)

  const activePlayer = deriveActivePlayer(gameTurns)

  let gameBoard = [...initialGameValue.map(innerArray => [...innerArray])];

  for(const turn of gameTurns) {
    const { box, player } = turn;
    const { row, col } = box

    gameBoard[row][col] = player
  }

  let winner;

  for(const combination of WINNING_COMBINATIONS) {
    const firstBoxSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondBoxSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdBoxSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstBoxSymbol && firstBoxSymbol === secondBoxSymbol && firstBoxSymbol === thirdBoxSymbol) {
      winner = handlePlayer[firstBoxSymbol]
      console.log(winner)
    }
  }

  const handleDraw = gameTurns.length === 9 && !winner;

  const handleSelectBox = (rowIndex, colIndex) => {
    setGameTurns(prevTurns => {
      const currentPlayer = deriveActivePlayer(prevTurns)

      const updatedTurns = [
        { box: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns
      ]

      return updatedTurns;
    })
  }

  const handleRematch = () => { setGameTurns([]) }

  const handlePlayerNameChange = (symbol, newName) => {
    setHandlePlayer(prevState => {
      return {
        ...prevState,
        [symbol]: newName
      }
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name={handlePlayer.X} onChangeName={handlePlayerNameChange} symbol="X" isActive={activePlayer === 'X'} />
          <Player name={handlePlayer.O} onChangeName={handlePlayerNameChange} symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        {(winner || handleDraw) && <GameOver winner={winner} rematch={handleRematch} />}
        <GameBoard onSelectBox={handleSelectBox} board={gameBoard} winner={winner} />
      </div>
      <Log turns={gameTurns} />
    </main>
  )
}

export default App;
