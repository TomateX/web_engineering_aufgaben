var board = document.getElementById('board');
var winner = document.getElementById('winner');
var currentPlayer = 'X';
var gameOver = false;

function makeMove(index) {
    if(gameOver){
        return;
    }
    if(board.children[index].innerHTML === ''){
        board.children[index].innerHTML = currentPlayer;
        checkWin(currentPlayer);
        if(currentPlayer === 'X'){
           currentPlayer = 'O';
        }
        else{
            currentPlayer = 'X';
        }
    }
}

function resetGame() {
    for(let i = 0; i < board.childElementCount; i++){
        board.children[i].innerHTML = '';
    }
    gameOver = false;
    winner.innerHTML = 'Spiel startet!';
}

function checkWin(player){
    let count = 0;

    //check horizontal lines
    for(let i = 0; i < board.childElementCount; i++){
        if(board.children[i].innerHTML === player){
            count++;
        }
        if(count == 3){
            gameOver = true;
        }
        if((i+1)%3 == 0){
            count = 0;
        }
    }

    //check vertical lines
    for(let z = 0; z < 3; z++){
        for(let i = z; i < 7+z; i = i+3){
            if(board.children[i].innerHTML === player){
                count++;
            }
            if(count == 3){
                gameOver = true;
            }
        }
        count = 0;
    }

    //check cross lines
    if(board.children[0].innerHTML === player && board.children[4].innerHTML === player && board.children[8].innerHTML === player){
        gameOver = true;
    }
    if(board.children[2].innerHTML === player && board.children[4].innerHTML === player && board.children[6].innerHTML === player){
        gameOver = true;
    }

    if(gameOver){
       winner.innerHTML = "Winner: " + player;
    }
}