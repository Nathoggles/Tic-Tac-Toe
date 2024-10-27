//we need a runGame, player and gameboard object
//0, 1, 2 to each cell, or player=true?
//win logic is on each move run rechwinner funct and that looks if x-1/y0 & x+1/y0 == 1[or true] || x0/y-1 & x0/y-1 == 1 || x+1/y+1 && x-1 && x-1 y-1 == 1 (but that only for center, check if need own logic for sides)



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


function playGame(x, y){
    const board = gameboard.makeBoard(x,y);
    
    function MakePlayer(name){
        let score = 0;
        const getScore = () => score;
        const upScore = () => score++;
        board[name] = []; //array to track each player's moves
        return {name, getScore, upScore};
    }
    player1 = MakePlayer("Player1");
    player2 = MakePlayer("Player2");
    let currentPlayer = player1;



   


    function makeMove(x, y){
    
        board[`x${x}y${y}`].state = 1;
        board[currentPlayer.name].push({x, y});
        //console.log(board[`x${x}y${y}`]);
        checkWin(x, y, currentPlayer);
        switchPlayer();
    } 

    function switchPlayer(){
        currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1; 
/*         console.log(currentPlayer); */
        }



    
       function checkWin(x, y, player){
        console.log(board[player.name]);
       board[player.name].forEach(baseCoord => {
        console.log(baseCoord.x, baseCoord.y);
        if ((board[player.name].find(element => element.x == baseCoord.x + 1 && element.y == baseCoord.y) && 
            board[player.name].find(element => element.x == baseCoord.x + 2 && element.y == baseCoord.y))
        || (board[player.name].find(element => element.x == baseCoord.x && element.y == baseCoord.y + 1) && 
            board[player.name].find(element => element.x == baseCoord.x && element.y == baseCoord.y + 2))
        || (board[player.name].find(element => element.x == baseCoord.x + 1 && element.y == baseCoord.y + 1) && 
            board[player.name].find(element => element.x == baseCoord.x + 2 && element.y == baseCoord.y + 2))
        || (board[player.name].find(element => element.x == baseCoord.x + 1 && element.y == baseCoord.y - 1) && 
            board[player.name].find(element => element.x == baseCoord.x + 2 && element.y == baseCoord.y - 2)))
           {
            alert(player.name + " has won");
        }
        
        });  
  } 
return {
    makeMove,
    switchPlayer,
    checkWin,
    player1,
    player2,
    board
}
}




function displayGame(){
    const initialGame = playGame(3, 3);

    const displayedBoard = document.querySelector(".board");


    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }; 

    function displayBoard(board) {
        removeAllChildNodes(displayedBoard);

        Object.keys(board).forEach((key) => {
            console.log(board[key]);

            const cellButton = document.createElement("button");
            cellButton.classList.add("cell");
            cellButton.dataset.x = board.x;
            cellButton.dataset.y = board.y;
            displayedBoard.appendChild(cellButton);

        });
    }

displayBoard(initialGame.board);

/*     const initialGame = function(){
        playGame(3, 3);
        
    }();
    
    
    playGame(3, 3);
    initialGame();    
 */
    
/* 
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
})(); */


}

displayGame();
/* playGame(); */
/* const game = playGame();


        game.makeMove(1, 2);
         game.makeMove(3, 3);
       game.makeMove(3, 2);
         game.makeMove(3, 1); 
       game.makeMove(2, 2);
   */
