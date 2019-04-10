function Player(userName) {
  this.userName= userName;
  this.diceScore = 0;
  this.totalScore = 0;
}

Player.prototype.newRoll = function() {
  currentRoll = roll();
  if(currentRoll === 1) {
    this.diceScore = 0;
    changeTurns();
    newTurnUpdate();
  } else if ((this.totalScore + this.diceScore + currentRoll) >= playTo) {
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
var currentRoll;

var playTo = 50;
//Front End Logic
function midTurnUpdate(){
  $("#turn-dice-score").text(currentPlayer.diceScore);
  $("#dice-showing").text(currentRoll);
  $("#dice-image").empty();
  $("#dice-image").append('<img id="dice" src="img/' + currentRoll + '.jpg" alt="' + currentRoll + '">');
}

function newTurnUpdate(){
  currentRoll;
  $("#current-player-name").text(currentPlayer.userName)
  $("#player-one-total-score").text(playerOne.totalScore);
  $("#player-two-total-score").text(playerTwo.totalScore);
  $("#turn-dice-score").text(currentPlayer.diceScore);
  $("#dice-showing").text(currentRoll);
  $("#dice-image").empty();
  $("#dice-image").append('<img id="dice" src="img/' + currentRoll + '.jpg" alt="' + currentRoll + '">');
}

function startGame(playerOneName, playerTwoName) {
  playerOne.userName = playerOneName;
  playerTwo.userName = playerTwoName;
  $("#current-player-name").text(currentPlayer.userName)
  $("#player-one-name-display").text(playerOneName);
  $("#player-two-name-display").text(playerTwoName);
  $('#configure-game').slideUp();
}

$(document).ready(function(){
  $('#player-one-name').val('Zach');
  $('#player-two-name').val('Brendan');
  newTurnUpdate();
  $("#roll-dice").click(function(){
    currentPlayer.newRoll();
    midTurnUpdate();
  });
  $("#pass-turn").click(function(){
    currentPlayer.saveScore();
    newTurnUpdate();
  });
  $('#name-form').submit(function(event){
    event.preventDefault();
    startGame($('#player-one-name').val(), $('#player-two-name').val());
  });
});
