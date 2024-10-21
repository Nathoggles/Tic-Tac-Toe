//we need a runGame, player and gameboard object
//0, 1, 2 to each cell, or player=true?
//win logic is on each move run rechwinner funct and that looks if x-1/y0 & x+1/y0 == 1[or true] || x0/y-1 & x0/y-1 == 1 || x+1/y+1 && x-1 && x-1 y-1 == 1 (but that only for center, check if need own logic for sides)


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

function makePlayer(name){
    let score = 0;
    const getScore = () => score;
    const upScore = () => score++;
    return {name, getScore, upScore};
}

newPlayer = makePlayer("myname");
console.log(newPlayer);

