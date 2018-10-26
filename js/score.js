'use strict';

//test variables to use until game logic is complete
var scoreTest = 37;
var testName = 'Yoda';


var score = JSON.parse(localStorage.getItem('moves')); //access local storage for moves
var name = JSON.parse(localStorage.getItem('name')); // access local storage for player name

var scorePass = document.createElement('li'); //create li node
var textNode = document.createTextNode(testName + ' - ' + scoreTest); //create text node
scorePass.appendChild(textNode); // append score to li

document.getElementById('High_Scores').appendChild(scorePass);

// thoughts - may need to put the score(s) and name(s) into an array and loop them