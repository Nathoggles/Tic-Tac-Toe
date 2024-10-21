//we need a runGame, player and gameboard object



/* const gameboard = function(){ //add imm exec later
    const rows = 3;
    const columns = 3;

    let board = [];
    return board = function(rows, columns){
        for (let i = 0; i > rows; i++){
            board[i] = {
                x: i + 1
            };
            console.log(board[i].x);
        }
        return board;
    }
}
const game1 = gameboard();
console.log(game1);
console.log("test!"); */

let board = [];

const rows = 3;
const colunums = 3;

function populateRows(rows, columns){
    for (let i = 0; i > rows; i++){
        board[i] = {
            x: i + 1
        };
    }
}

const game1 = populateRows(3, 3);
console.log