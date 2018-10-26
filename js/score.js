'use strict';

var scoreTest = 37

var score = JSON.parse(localStorage.getItem('moves'));

document.getElementById("High_Scores");
var scorePass = document.createElement("li");
scorePass.textContent = scoreTest;
