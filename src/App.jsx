import { useState } from "react"

import Player from "./components/Player"
import Gameboard from "./components/Gameboard"
import Log from "./components/Log";
import { isGameOver } from "./utils/gameWinner";
import GameOver from "./components/GameOver";
import { generateGameBoard } from "./utils/generateGameBoard";

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

const PLAYERS = {
  X : "PLAYER 1",
  O : "PLAYER 2",
}

function App() {
  const [gameTurns, setGameTurns] = useState([])
  const [playerNames, setPlayerNames] = useState(PLAYERS)

  function updatePlayerName(playerSymbol, playerName) {
    setPlayerNames(prevPlayerNames => {
      return {
        ...prevPlayerNames,
        [playerSymbol] : playerName,
      }
    })
  }

  function getActivePlayer(turns) {
    let activePlayer = "X";

    if(gameTurns.length && turns[0].player === "X") {
      activePlayer = "O";
    }
    return activePlayer;
  }

  function resetGame() {
    setGameTurns([]);
  }

  function handleSquareClick(rowIndex, colIndex) {
    setGameTurns(prevGameTurns => {
      const activePlayer = getActivePlayer(prevGameTurns);

      const newGameTurns = [{player:activePlayer , square: {rowIndex:rowIndex, colIndex:colIndex} } ,...prevGameTurns];
      return newGameTurns;
    })
  }


  const gameBoard = generateGameBoard(INITIAL_GAME_BOARD, gameTurns);

  let gameWinner;
  gameWinner = isGameOver(gameBoard);

  let isDraw = (gameWinner === undefined) && gameTurns.length === 9;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player playerName={PLAYERS.X} playerSymbol="X" isActve={getActivePlayer(gameTurns) === "X"} onUpdatePlayerName={updatePlayerName} />
          <Player playerName={PLAYERS.O} playerSymbol="O" isActve={getActivePlayer(gameTurns) === "O"} onUpdatePlayerName={updatePlayerName} />
        </ol>
        {(gameWinner || isDraw) && <GameOver winner={playerNames[gameWinner]} onRematch={resetGame}/> }
        <Gameboard onSquareClick={handleSquareClick} gameBoard={gameBoard}/>
      </div>
      <Log turns={gameTurns} />  
    </main>
  )
}

export default App
