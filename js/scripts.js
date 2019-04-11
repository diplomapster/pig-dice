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
  } else if ((this.totalScore + this.diceScore + currentRoll) > playTo - 1) {
      this.totalScore += (this.diceScore + currentRoll);
      endGame();
  } else {
    this.diceScore += currentRoll;
    midTurnUpdate();
  }
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
  enableButtons();
  if (currentPlayer === playerOne) {
    currentPlayer = playerTwo;
    opponentPlayer = playerOne;
  } else {
    currentPlayer = playerOne;
    opponentPlayer = playerTwo;
  } if (currentPlayer.robot === true) {
    robotTurn();
  }
  newTurnUpdate();
  console.log(currentPlayer);
}

function robotTurn() {
  if(currentPlayer.robot){
    disableButtons();
    setTimeout(()=>{
      currentPlayer.newRoll();
      if(robotLogic()){
        robotTurn()
      }else{
        currentPlayer.saveScore();
      }
    }, (Math.random(5) + 1) * 1000)
  }
}

function robotLogic() {
  if ((currentPlayer.totalScore + currentPlayer.diceScore) - opponentPlayer.totalScore <= (-(0.15*playTo))) {
    return true;
  // } else if ((currentPlayer.totalScore + currentPlayer.diceScore) - opponentPlayer.totalScore >= (0.20*playTo)) {
  //   return false;
  } else if (currentPlayer.diceScore <= 19) {
    return true;
  }
  return false;
}

var playerOne = new Player('Zach');
var playerTwo = new Player('Brendan');

var currentPlayer = playerOne;
var opponentPlayer;
var currentRoll;

var playTo = 10;

//Front End Logic
function disableButtons() {
  $(".btn").attr("disabled", true)
}
function enableButtons() {
  $(".btn").attr("disabled", false)
}
function endGame(){
  newTurnUpdate();
  playerOne.robot = false;
  playerTwo.robot = false;
  $("#gamePlay").hide();
  $("#winImage").show();
  $("#winner-name").text(currentPlayer.userName);
}

function midTurnUpdate(){
  $("#turn-dice-score").text(currentPlayer.diceScore);
  $("#dice-image").empty();
  $("#dice-image").append('<img id="dice" src="img/' + currentRoll + '.jpg" alt="' + currentRoll + '">');
}

function newTurnUpdate(){
  currentRoll;
  $("#current-player-name").text(currentPlayer.userName)
  $("#player-one-total-score").text(playerOne.totalScore);
  $("#player-two-total-score").text(playerTwo.totalScore);
  $("#turn-dice-score").text(currentPlayer.diceScore);
  $("#dice-image").empty();
  $("#dice-image").append('<img id="dice" src="img/' + currentRoll + '.jpg" alt="' + currentRoll + '">');
}

function startGame() {
  enableButtons();

  playerOne.userName = $('#player-one-name').val();
  playerTwo.userName = $('#player-two-name').val();
  playTo = $('#play-to-points').val();
  $("#current-player-name").text(currentPlayer.userName)
  $("#player-one-name-display").text(playerOne.userName);
  $("#player-two-name-display").text(playerTwo.userName);
  $('#player-one-info-name').text(playerOne.userName);
  $('#player-two-info-name').text(playerTwo.userName);
  $('#play-to-display').text(playTo);
  $('#configure-game').slideUp();
  $('#game-info').show();
  if ($("#number-of-players").val() === "2") {
    playerTwo.robot = true;
  }
  if ($("#number-of-players").val() === "3") {
    playerOne.robot = true;
    playerTwo.robot = true;
    changeTurns();
  }
}

function modeSelect() {
  if($("#number-of-players").val() === "2") {
    $('#player-two-name').val('RoboPig');
    $('#player-two-name').attr('disabled', true);
    $('#player-one-name').attr('disabled', false);
  } else if ($("#number-of-players").val() === "3") {
    $('#player-one-name').val('Pig-o-Tron');
    $('#player-one-name').attr('disabled', true);
    $('#player-two-name').val('RoboPig');
    $('#player-two-name').attr('disabled', true);
  }
    else {
    $('#player-one-name').attr('disabled', false);
    $('#player-two-name').attr('disabled', false);
  }
}

$(document).ready(function(){
  $('#player-one-name').val('Zach');
  $('#player-two-name').val('Brendan');
  $('#play-to-points').val(100);
  newTurnUpdate();
  $('#number-of-players').change(function(){
    modeSelect();
  })
  $("#roll-dice").click(function(){
    currentPlayer.newRoll();
  });
  $("#pass-turn").click(function(){
    currentPlayer.saveScore();

  });
  $('#name-form').submit(function(event){
    event.preventDefault();
    startGame();
  });
  $('#play-again').click(function(){
    location.reload();
  })
});
