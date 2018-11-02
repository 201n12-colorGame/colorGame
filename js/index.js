var scoreHolder = document.getElementById('score');
var easyScore = JSON.parse(localStorage.getItem('easy'));
var normalScore = JSON.parse(localStorage.getItem('normal'));
var hardScore = JSON.parse(localStorage.getItem('hard'));

var bestScore = 999999;

if(easyScore){
    bestScore = easyScore[0][1];
}

if(normalScore && normalScore[0][1] < bestScore){
    bestScore = normalScore[0][1];
}

if(hardScore && hardScore[0][1] < bestScore){
    bestScore = hardScore[0][1];
}

scoreHolder.textContent = bestScore;