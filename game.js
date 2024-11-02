//we need a runGame, player and gameboard object
//0, 1, 2 to each cell, or player=true?
//win logic is on each move run rechwinner funct and that looks if x-1/y0 & x+1/y0 == 1[or true] || x0/y-1 & x0/y-1 == 1 || x+1/y+1 && x-1 && x-1 y-1 == 1 (but that only for center, check if need own logic for sides)



const gameboard = (function() {
    const makeBoard = (x, y) => {
    const rows = x;
    const columns = y;
    const coordinates = {};
    for (let y = 1; y <= rows; y++) {
        for (let x = 1; x <= columns; x++){
            const coordinate = `x${x}y${y}`;
            coordinates[coordinate] = {x, y};
            coordinates[coordinate].state = 0;
        }
    }
    return {coordinates, rows, columns};}
    return {makeBoard};
})();



/* console.log(gameboard.makeBoard(3, 3)); */


function playGame(x, y){
    let board = gameboard.makeBoard(3,3);
    /* console.log(board); */
    
    function MakePlayer(name){
        let score = 0;
        const id = name.toLowerCase();
        const getScore = () => score;
        const upScore = () => score++;
        const moves = []; //array to track each player's moves
        return {name, id, moves, getScore, upScore};
    }
    player1 = MakePlayer("Player1");
    player2 = MakePlayer("Player2");
    let currentPlayer = player1;



    const getCurrentPlayer = () => ({
        id: currentPlayer.id,
        score: currentPlayer.getScore(),
        name: currentPlayer.name
    });


    function makeMove(x, y){
        //console.log(board);
        x = parseInt(x);
        y = parseInt(y);
        board.coordinates[`x${x}y${y}`].state = 1;
        currentPlayer.moves.push({x, y});
       // console.table(currentPlayer.moves);
       // alert(`${currentPlayer.name} chose ${currentPlayer.moves[currentPlayer.moves.length - 1].x} ${currentPlayer.moves[currentPlayer.moves.length - 1].y}`);
        //console.log(board[`x${x}y${y}`]);
        //console.table(currentPlayer.moves);
        if (checkWin(x, y, currentPlayer)){
            alert(`${currentPlayer.name} has won!`);
            currentPlayer.upScore();
            resetGame(3,3);
            return;
        }
        switchPlayer();
    } 

    function switchPlayer(){
        currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1; 
        displayPlayer(currentPlayer);
/*         console.log(currentPlayer); */
        }



    
       function checkWin(x, y, player){
  //old checkWin function. on a 3x3 board, it for each of max 5 player moves checks agaisnt the other thus max 5 player moves  max four win conditions with two find calls perr check. Thus, max 8 × 5 × 5 = 200 checks
  //the new, alternative wincondition meanwhile has 10 winning patterns with 3 coordinates per pattern which it checks against max 5 player moves. Thus, max 10 × 3 × 5 = 150 checks
  //moreover, if expanding the board, the number of checks increase only linearly compared to function 1.
  //Thus, moving to new function but preserving old one to document evolution of my approach. 
    /*    console.table(player.moves);
       player.moves.forEach(baseCoord => {
        if ((player.moves.find(element => element.x == baseCoord.x + 1 && element.y == baseCoord.y) && 
            player.moves.find(element => element.x == baseCoord.x + 2 && element.y == baseCoord.y))
        || (player.moves.find(element => element.x == baseCoord.x && element.y == baseCoord.y + 1) && 
            player.moves.find(element => element.x == baseCoord.x && element.y == baseCoord.y + 2))
        || (player.moves.find(element => element.x == baseCoord.x + 1 && element.y == baseCoord.y + 1) && 
            player.moves.find(element => element.x == baseCoord.x + 2 && element.y == baseCoord.y + 2))
        || (player.moves.find(element => element.x == baseCoord.x + 1 && element.y == baseCoord.y - 1) && 
            player.moves.find(element => element.x == baseCoord.x + 2 && element.y == baseCoord.y - 2)))
           {
            alert(player.name + " has won");
        }
        
        });    */
//add guarding statement checking for not draw if some cell state == 0;
        const winningPatterns = [
            //horizontal
            [{dx: 0, dy: 0}, {dx: 1, dy: 0}, {dx: 2, dy: 0}],
            [{dx: -1, dy: 0}, {dx: 0, dy: 0}, {dx: 1, dy: 0}],
            [{dx: -2, dy: 0}, {dx: -1, dy: 0}, {dx: 0, dy: 0}],

            //vertical
            [{dx: 0, dy: 0}, {dx: 0, dy: 1}, {dx: 0, dy: 2}],
            [{dx: 0, dy: -1}, {dx: 0, dy: 0}, {dx: 0, dy: 1}],
            [{dx: 0, dy: -2}, {dx: 0, dy: -1}, {dx: 0, dy: 0}],

            //diagonal  
            [{dx: 0, dy: 0}, {dx: 1, dy: 1}, {dx: 2, dy: 2}],
            [{dx: 0, dy: 0}, {dx: -1, dy: -1}, {dx: -2, dy: -2}],

            [{dx: 0, dy: 0}, {dx: 1, dy: -1}, {dx: 2, dy: -2}],
            [{dx: 0, dy: 0}, {dx: -1, dy: 1}, {dx: -2, dy: 2}]
        ];

        return winningPatterns.some(pattern => {
            return pattern.every(position => {
                const checkX = x + position.dx;
                const checkY = y + position.dy;
                return player.moves.some(move => move.x === checkX && move.y === checkY);
            });
        }); 
  } 

  function resetGame(x, y){
    board = gameboard.makeBoard(x,y);
    player1.moves = [];
    player2.moves = [];
    //console.log(currentPlayer.getScore());
    displayGame({ board, getCurrentPlayer, makeMove });  // Pass required parts of game
    currentPlayer = player1;
  }
resetGame(3, 3);
return {
    makeMove,
    switchPlayer,
    checkWin,
    getCurrentPlayer,
    resetGame,
    player1,
    player2,
    board
}
}




function displayGame(game) {
    const displayedBoard = document.querySelector(".board");

    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    function displayScore(player){
        if (player.score != 0) {
            
       
        const score = document.querySelector(`.${player.id}.score`);
        console.log(score);
        score.textContent = player.score;
    }}

    function displayBoard(board) {
        displayScore(game.getCurrentPlayer());    
        removeAllChildNodes(displayedBoard);



        Object.keys(board.coordinates).forEach((key) => {
            const cellButton = document.createElement("button");
            cellButton.classList.add("cell");
            cellButton.dataset.x = board.coordinates[key].x;
            cellButton.dataset.y = board.coordinates[key].y;

            cellButton.addEventListener("click", event => {
                if (board.coordinates[key].state == 1){
                    return;
                }
                const activePlayer = game.getCurrentPlayer().id; 

                cellButton.textContent = activePlayer === "player1" ? "X" : "O";
                game.makeMove(event.target.dataset.x, event.target.dataset.y);
            });

            if (board.coordinates[key].x != board.rows) {
                cellButton.classList.add("borderR");
            }

            if (board.coordinates[key].y != board.columns) {
                cellButton.classList.add("borderB");
            }

            displayedBoard.appendChild(cellButton);
        });
    }

    displayBoard(game.board); 
}

function displayPlayer(player){
    //console.log(player.id);
    const activePlayer = document.querySelector(`.${player.id}.player`);
    console.log(activePlayer.id)
    const previousPlayer = player.id === "player1" ? document.querySelector(`.player2.player`) : document.querySelector(`.player1.player`);
    console.log(previousPlayer);
    const underline = activePlayer.querySelector(".underline-svg");
    const previousUnderline = previousPlayer.querySelector(".underline-svg");
    previousUnderline.classList.remove("animate-draw");
   // console.log(underline);
    underline.classList.add("animate-draw");
   // underline.style.opacity = 1;
    //console.log(activePlayer);
   // activePlayer.classList.add("animate-draw");
}
playGame();
//displayGame(game);
