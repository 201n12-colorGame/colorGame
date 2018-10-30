
var colorBoard = [];
var moves = 0;
var size = 5;

//initialize board state. for now, the entire board is initialized as zeroes.
var initializeBoard = function (num) {
  size = num;
  for (var row = 0; row < num; row++) {
    colorBoard.push([]);
    for (var col = 0; col < num; col++) {
      colorBoard[row].push(0);
    }
  }localStorage.getItem('winnerArray');
  console.log(colorBoard);
  renderBoard();
};


var renderBoard = function () {
  //render the board on the page
  var boardHolder = document.getElementById('board');

  while(boardHolder.firstChild){
    boardHolder.removeChild(boardHolder.firstChild);
  }

  //row iterates through table rows.
  for (var row = 0; row < size; row++) {
    var trEl = document.createElement('tr');
    boardHolder.appendChild(trEl);

    //col iterates through elements/columns.
    for (var col = 0; col < size; col++) {
      var tdEl = document.createElement('td');
      tdEl.className = 'style' + colorBoard[row][col];
      //we assign the content of the board as a class name so that its appearance can be manipulated in CSS
      tdEl.id = row + ' ' + col;
      // each box is named for its row and column for ease of manipulation
      tdEl.addEventListener('click', tileClickHandler);
      trEl.appendChild(tdEl);

    }
  }
};

var tileClickHandler = function (eventObject) {
  //this is where the magic happens!

  //pull out the coordinates of the clicked box
  var coord = eventObject.target.id.split(' ');
  coord[0] = parseInt(coord[0]);
  coord[1] = parseInt(coord[1]);

  //set the identities of clicked tile and adjacent tiles in memory
  for(var row = coord[0]-1; row < coord[0]+2; row++){
    for(var col = coord[1]-1; col< coord[1]+2; col++){
      if(col > -1 && row > -1 && col < size && row < size){
        if(colorBoard[row][col]){
          colorBoard[row][col] = 0;
        } else {
          colorBoard[row][col] = 1;
        }
      }
    }
  }
  renderBoard();
  if (checkWin()){
    winHandler();
  }
  // console.log(coord);
};

// randomizes the board 
var randomize = function(){
  
}

var winHandler = function(){
  var name = prompt('Congratulations you won! Please enter your name');
  var winnerArray = JSON.parse(localStorage.getItem('winnerArray'));

  console.log(winnerArray);
  if (winnerArray === null){
    winnerArray = [];
  }
  winnerArray.push([name, moves]);
  localStorage.setItem('winnerArray', winnerArray);
};


// check if game is won
var checkWin = function(){
  var cointainsOne = 0;
  var containsZero = 0;
  var row = 0;
  var col = 0;

  while (!(containsZero && cointainsOne) && row < size){
    if (colorBoard[row][col]){
      cointainsOne = 1;
    }
    else{
      containsZero = 1;
    }
    col++;
    if (col === size){
      col = 0; row++;
    }
    // console.log(row + ' ' + col + ' ' + colorBoard[row][col]);
  }

  return (row === size);

  // if(!((colorBoard.findIndex(0) + 1) && (colorBoard.findIndex(1) + 1))){
  //   var name = prompt('Congratulations you win! What is your name?');
  //}
}

//increment moves and write to local storage
moves++;
localStorage.setItem('moves', moves);

initializeBoard(9);
