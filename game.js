//we need a runGame, player and gameboard object
//0, 1, 2 to each cell, or player=true?
//win logic is on each move run rechwinner funct and that looks if x-1/y0 & x+1/y0 == 1[or true] || x0/y-1 & x0/y-1 == 1 || x+1/y+1 && x-1 && x-1 y-1 == 1 (but that only for center, check if need own logic for sides)

function MakePlayer(name){
    let score = 0;
    const getScore = () => score;
    const upScore = () => score++;
    return {name, getScore, upScore};
}


const gameboard = (function() {
    const makeBoard = (x, y) => {
    const rows = x;
    const columns = y;
    const board = {};

    for (let y = 1; y <= rows; y++) {
        for (let x = 1; x <= columns; x++){
            const coordinate = `x${x}y${y}`;
            board[coordinate] = {x, y};
            board[coordinate].state = 0;
        }
    }
    return board;}
    return {makeBoard};
})();

/* console.log(gameboard.makeBoard(3, 3)); */


function playGame(){

    player1 = MakePlayer("player1");
    player2 = MakePlayer("player2");
    let currentPlayer = player1;

    const board = gameboard.makeBoard(3,3);


    function makeMove(x, y, player){
        board[`x${x}y${y}`].state = 1;
        board[`x${x}y${y}`].player = player;
        //console.log(board[`x${x}y${y}`]);
        switchPlayer();
    } 

    function switchPlayer(){
        currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1; 
        console.log(currentPlayer);
        }

       makeMove(2, 3, currentPlayer);
       makeMove(3, 3, currentPlayer);
}

playGame();

