function AllPlayers(){
  this.allPlayer = [];
}

AllPlayers.prototype.addPlayer =function(newPlayer){
  this.allPlayer.push(newPlayer)
}

AllPlayers = [playerOne, playerTwo]
AllPlayers.push(playerOne);
AllPlayers.push(playerTwo);
