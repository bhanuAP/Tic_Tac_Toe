const Player = function(player, symbol) {
  this.playerName = player;
  this.playerId = symbol;
  this.playedMoves = [];
}

Player.prototype.getName = function() {
  return this.playerName;
}

Player.prototype.getPlayerId = function() {
  return this.playerId;
}

Player.prototype.getPlayedMoves = function() {
  return this.playedMoves;
}

Player.prototype.hasWon = function(winningCombinations) {
  let playerRefference = this;
  return winningCombinations.some(function(combination) {
    return isSubSet(combination,playerRefference.getPlayedMoves());
  });
}
