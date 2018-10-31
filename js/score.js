'use strict';

//test variables to use until game logic is complete
//var scoreTest = 37;
//var testName = 'Yoda';

//Get WinnerArry from local Storage
//var score = JSON.parse(localStorage.getItem('moves')); //access local storage for moves
//var name = JSON.parse(localStorage.getItem('name')); // access local storage for player name
// var easyArray = JSON.parse(localStorage.getItem('easy'));
// var normalArray = JSON.parse(localStorage.getItem('normal'));
// var hardArray = JSON.parse(localStorage.getItem('hard'));


var makeTable = function(mode){
  var arr = JSON.parse(localStorage.getItem(mode));
  var tableHolder = document.getElementById(mode);

  for (var i = 0; i < arr.length; i++) {
    var scorePass = document.createElement('tr'); //create tr node
    //   var textNode = document.createTextNode(easyArray[i]); //create text node
    var td = document.createElement('td');
    td.textContent = arr[i][0];
    scorePass.appendChild(td);
    td = document.createElement('td');
    td.textContent = arr[i][1];
    scorePass.appendChild(td);
    tableHolder.appendChild(scorePass);
  }
}

makeTable('easy');
makeTable('normal');
makeTable('hard');
// document.getElementById('easy').appendChild(makeTable(easyArray));
// document.getElementById('normal').appendChild(makeTable(normalArray));
// document.getElementById('hard').appendChild(makeTable(hardArray));
// for (var i = 0; i < normalArray.length; i++) {
//   var scorePass = document.createElement('tr'); //create tr node
//   var textNode = document.createTextNode(normalArray[i]); //create text node
//   scorePass.appendChild(textNode); // append score to li
//   document.getElementById('normal').appendChild(scorePass);
// }

// for (var i = 0; i < hardArray.length; i++) {
//   var scorePass = document.createElement('tr'); //create tr node
//   var textNode = document.createTextNode(hardArray[i]); //create text node
//   scorePass.appendChild(textNode); // append score to li
//   document.getElementById('hard').appendChild(scorePass);
// }

