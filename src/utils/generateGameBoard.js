export function generateGameBoard(initialGameBoard, gameTurns) {
    let gameBoard = [...initialGameBoard.map(innerArray => [...innerArray])];
    gameTurns.forEach((row)=>{
        const {player, square} = row;
        const {rowIndex, colIndex} = square;
        gameBoard[rowIndex][colIndex] = player;
    })
    return gameBoard;
}