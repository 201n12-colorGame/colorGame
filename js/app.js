
var colorBoard = [];
var moves = 0;

//initialize board state. for now, the entire board is initialized as zeroes.
var initializeBoard = function(num){
    for(var i = 0; i < num; i++){
        for(var j = 0; j < num; j++){
            colorBoard[i][j] = 0;
        }
    }
    renderBoard();
}


var renderBoard = function(){
    //render the board on the page
    var boardHolder = document.getElementById('board');

    //i iterates through table rows.
    for(var i = 0; i < colorBoard.length; i++){
        var trEl = document.createElement('tr');
        boardHolder.appendChild(trEl);

        //j iterates through elements/columns.
        for(var j = 0; j < colorBoard.length; j++){
            var tdEl = document.createElement('td');
            tdEl.className = 'style' + colorBoard[i][j]; 
                //we assign the content of the board as a class name so that its appearance can be manipulated in CSS
            tdEl.id = i + ' ' + j;
                // each box is named for its row and column for ease of manipulation
            trEl.appendChild(tdEl);

        }
    }
}

initializeBoard(5);