export function isGameOver(gameBoard) {
    let res;
    for (const row of gameBoard) {
        if(row[0] === row[1] && row[1] === row[2] && row[0] !== null ) {
            res = row[0];
        }
    }
    // check the 2 diagonals
    if (((gameBoard[0][0] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][2]) || (gameBoard[0][2] === gameBoard[1][1] && gameBoard[1][1] === gameBoard[2][0])) && gameBoard[1][1] !== null){
        res = gameBoard[1][1];
    }

    // check the 2 verticals
    for (let col = 0; col < 3; col++) {
        if ((gameBoard[0][col] === gameBoard[1][col] && gameBoard[1][col] === gameBoard[2][col]) && gameBoard[1][col] !== null) {
          res = gameBoard[1][col];
        }
    }

    console.log(res);

    return res;
}