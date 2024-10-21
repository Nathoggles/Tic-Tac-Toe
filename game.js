//we need a runGame, player and gameboard object


function gameboard() {
    const rows = 3;
    const columns = 3;
    const board = [];

    for (let y = 1; y <= rows; y++) {
        for (let x = 1; x <= columns; x++){
            console.log(y);
            board.push({x,y});
        }
    }
    return board;
}


console.log(gameboard());