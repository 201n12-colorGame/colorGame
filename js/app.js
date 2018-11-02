
var colorBoard = JSON.parse(localStorage.getItem('boardState'));
var size;
var moves = parseInt(localStorage.getItem('moves'));

//initialize board state. for now, the entire board is initialized as zeroes.
var initializeBoard = function (num) {
  size = num;
  moves = 0;
  colorBoard = [];
  for (var row = 0; row < num; row++) {
    colorBoard.push([]);
    for (var col = 0; col < num; col++) {
      // colorBoard[row].push(0);
      colorBoard[row].push(Math.round(Math.random()));
    }
  }
  localStorage.setItem('boardState', JSON.stringify(colorBoard));
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
  //play sound effect
  var pop = new Audio('sounds/popnew.wav');
  pop.play();

  moves++;
  localStorage.setItem('moves', moves);

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
  } else {
    localStorage.setItem('boardState', JSON.stringify(colorBoard));
  }
  // console.log(coord);
};

// stuff that needs doing when player wins
var winHandler = function(){
  var shhhh = new Audio('shhhhnew.wav');
  shhhh.play();

  var name = prompt('Congratulations! You won in ' + moves + ' moves. Please enter your name.');
  
  var mode;
  if(size === 4){
    mode = 'easy';
  } else if (size ===7){
    mode = 'normal';
  } else{
    mode = 'hard'
  }
  
  var winnerArray = JSON.parse(localStorage.getItem(mode));

  console.log(winnerArray);
  if (winnerArray === null){ //if we haven't gotten a winning score yet
    winnerArray = [];
  }

  //finds the appropriate position in the winner array to insert the new score
  var i = 0;
  while(i < winnerArray.length && moves > winnerArray[i][1]){
    i++;
  }
  winnerArray.splice(i, 0, [name, moves]);

  winnerArray.splice(5);

  localStorage.setItem(mode, JSON.stringify(winnerArray));

  initializeBoard(size);

  window.location.href = 'score.html';
};


// check if game is won
var checkWin = function(){
  var containsOne = 0;
  var containsZero = 0;
  var row = 0;
  var col = 0;

  while (!(containsZero && containsOne) && row < size){
    if (colorBoard[row][col]){
      containsOne = 1;
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

  return (!(containsOne && containsZero));

  // if(!((colorBoard.findIndex(0) + 1) && (colorBoard.findIndex(1) + 1))){
  //   var name = prompt('Congratulations you win! What is your name?');
  //}
}

//increment moves and write to local storage

if(colorBoard){
  size = colorBoard.length;
  renderBoard();
  console.log(colorBoard);
} 
// else {
//   initializeBoard(4);
// }
