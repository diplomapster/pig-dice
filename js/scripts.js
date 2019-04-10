function Player(userName) {
  this.userName= userName;
  this.diceScore = 0;
  this.totalScore = 0;
}

Player.prototype.newRoll = function() {
  var currentRoll = roll();
  if(currentRoll === 1) {
    this.diceScore = 0;
    changeTurns();
  } else if ((this.totalScore + this.diceScore + currentRoll) >= 30) {
      this.totalScore += currentRoll;
      alert("You won!")
  } else {
    this.diceScore += currentRoll;
  } console.log(currentPlayer);
}

Player.prototype.saveScore = function() {
  this.totalScore += this.diceScore;
  this.diceScore = 0
  changeTurns();
}

function roll() {
  return parseInt(Math.random() * 6 + 1);
}

function changeTurns() {
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
  } else {
    currentPlayer = playerOne;
  } console.log(currentPlayer);
}

var playerOne = new Player('Zach');
var playerTwo = new Player('Brendan');

var currentPlayer = playerOne;


//Front End Logic

// var playerOne = new Player($("#username"));
//
// function update()
