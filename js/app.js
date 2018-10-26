
var colorBoard = [];
var moves = 0;
var size = 5;

//initialize board state. for now, the entire board is initialized as zeroes.
var initializeBoard = function (num) {
  size = num;
  for (var i = 0; i < num; i++) {
    colorBoard.push([]);
    for (var j = 0; j < num; j++) {
      colorBoard[i].push(0);
    }
  }
  console.log(colorBoard);
  renderBoard();
};


var renderBoard = function () {
  //render the board on the page
  var boardHolder = document.getElementById('board');

  while(boardHolder.firstChild){
    boardHolder.removeChild(boardHolder.firstChild);
  }

  //i iterates through table rows.
  for (var i = 0; i < size; i++) {
    var trEl = document.createElement('tr');
    boardHolder.appendChild(trEl);

    //j iterates through elements/columns.
    for (var j = 0; j < size; j++) {
      var tdEl = document.createElement('td');
      tdEl.className = 'style' + colorBoard[i][j];
      //we assign the content of the board as a class name so that its appearance can be manipulated in CSS
      tdEl.id = i + ' ' + j;
      // each box is named for its row and column for ease of manipulation
      tdEl.addEventListener('click', tileClickHandler);
      trEl.appendChild(tdEl);

    }
  }
};

var tileClickHandler = function (eventObject) {
  //this is where the magic happens!

  //increment moves and write to local storage
  moves++;
  localStorage.setItem('moves', moves);

  //pull out the coordinates of the clicked box
  var coord = eventObject.target.id.split(' ');
  coord[0] = parseInt(coord[0]);
  coord[1] = parseInt(coord[1]);

  //set the identities of clicked tile and adjacent tiles in memory
  for(var i = coord[0]-1; i < coord[0]+2; i++){
    for(var j = coord[1]-1; j< coord[1]+2; j++){
      if(j > -1 && i > -1 && j < size && i < size){
        if(colorBoard[i][j]){
          colorBoard[i][j] = 0;
        } else {
          colorBoard[i][j] = 1;
        }
      }
    }
  }
  renderBoard();
console.log(coord);
};

initializeBoard(9);
