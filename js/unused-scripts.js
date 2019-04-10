function AllPlayers(){
  this.allPlayer = [];
}

AllPlayers.prototype.addPlayer =function(newPlayer){
  this.allPlayer.push(newPlayer)
}

AllPlayers = [playerOne, playerTwo]
AllPlayers.push(playerOne);
AllPlayers.push(playerTwo);

playerTwo as computer  (rollsx2)
roll()
roll()
changeTurns()

playerTwo as computer (diceScore)
roll() (if diceScore <= 15){
  roll()
} else {
  saveScore()
}

playerTwo as computer ()
roll() (if playerOne.totalScore >= (computer.totalScore + diceScore 
