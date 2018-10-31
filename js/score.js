'use strict';

//test variables to use until game logic is complete
//var scoreTest = 37;
//var testName = 'Yoda';

//Get WinnerArry from local Storage
//var score = JSON.parse(localStorage.getItem('moves')); //access local storage for moves
//var name = JSON.parse(localStorage.getItem('name')); // access local storage for player name
var easyArray = JSON.parse(localStorage.getItem('easy'));
var normalArray = JSON.parse(localStorage.getItem('normal'));
var hardArray = JSON.parse(localStorage.getItem('hard'));


for (var i = 0; i < easyArray.length; i++) {
  var table = document.createElement('table');
  var scorePass = document.createElement('tr'); //create tr node
  var textNode = document.createTextNode(easyArray[i]); //create text node
  scorePass.appendChild(textNode); // append score to li
  document.getElementById('High_Scores').appendChild(scorePass);
}
