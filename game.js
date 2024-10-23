//we need a runGame, player and gameboard object
//0, 1, 2 to each cell, or player=true?
//win logic is on each move run rechwinner funct and that looks if x-1/y0 & x+1/y0 == 1[or true] || x0/y-1 & x0/y-1 == 1 || x+1/y+1 && x-1 && x-1 y-1 == 1 (but that only for center, check if need own logic for sides)


function gameboard() {
    const rows = 3;
    const columns = 3;
    const board = {};

    for (let y = 1; y <= rows; y++) {
        for (let x = 1; x <= columns; x++){
            const coordinate = `x${x}y${y}`;
            board[coordinate] = {x, y};
        }
    }
    return board;
}

 
/* console.log(gameboard()); */


function MakePlayer(name){
    let score = 0;
    const getScore = () => score;
    const upScore = () => score++;
    return {name, getScore, upScore};
}

Player1 = MakePlayer("Player1");
Player2 = MakePlayer("Player2");
/* console.log(Player1); */

const board = gameboard();

console.log(board.x1y2.x);

/* let testArray = ["x1y2", "x2y3"];
console.log(testArray[1]); */

//player chooses x2 y3
//player chooses x3 

/* function makeMove(x, y){
    
} */
