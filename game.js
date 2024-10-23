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


function playGame(){
    const board = gameboard.makeBoard(3,3);
    
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



   


    function makeMove(x, y, player){
    
        board[`x${x}y${y}`].state = 1;
        board[player.name].push({x, y});
        //console.log(board[`x${x}y${y}`]);
        checkWin(x, y, player);
        switchPlayer();
    } 

    function switchPlayer(){
        currentPlayer == player1 ? currentPlayer = player2 : currentPlayer = player1; 
/*         console.log(currentPlayer); */
        }

/*        makeMove(1, 2, currentPlayer);
         makeMove(3, 3, currentPlayer);
       makeMove(3, 2, currentPlayer);
         makeMove(3, 1, currentPlayer); */
       makeMove(2, 2, currentPlayer);
  


       function checkWin(x, y, player){
        console.log(element);
     /*    player.name.forEach(element => {
           
        }); */
    //const filteredX = Object.keys(board.map)//.filter(isX);
    //console.log(filteredX);
        

  /*       const directions = [
            {dx: 1, dy: 0}, //right
            {dx: 0, dy: 1}, //down
            {dx: 1, dy: 1}, //down-right
            {dx: 1, dy: -1} //down-left
        ]
        console.log(board);
        Object.keys(board).forEach(key => {
            if (board[key].state == player) {
                if (board[key])
            }
        }
            
            console.log(board[key].x, board[key].y)); */
/*     for ({dx, dy} of directions){

    }  */
    
      /*   function countCells(dx, dy)
        {
            let count = 0;
            let nx = x;
            let ny = y;
            while (board)
        } */

       }
       
  /*       let currentCell = [`x${x}y${y}`];
        console.log(currentCell); */
        /* if (board[`x${x + 1}y${y}`].state == player && board[`x${x - 1}y${y}`].state == player ||
            board[`x${x - 1}y${y - 1}`].state == player && board[`x${x - 2 }y${y - 2}`].state == player
            //pontentially a lot of win conditions to check

        ) */
       
            //alert(player.name + " has won")}; 

    }

playGame();
