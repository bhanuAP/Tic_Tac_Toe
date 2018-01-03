const Game = function() {
  this.player1 = new Player("player1","X");
  this.player2 = new Player("player2","O");
  this.players = [this.player1,this.player2];
  this.currentPlayer = this.player1;
  this.currentPlayerIndex = 0;
  this.status = 'continue';
  this.playedCells = [];
}

Game.prototype.changePlayerTurn = function() {
  this.currentPlayerIndex = 1 - this.currentPlayerIndex;
  this.currentPlayer = this.players[this.currentPlayerIndex];
}

Game.prototype.getCurrentPlayerName = function() {
  return this.currentPlayer.getName();
}

Game.prototype.getCurrentPlayerId = function() {
  return this.currentPlayer.getPlayerId();
}

Game.prototype.doesCellAlreadyPlayed = function(move) {
  let player1PlayedThisCell = this.player1.getPlayedMoves().includes(move);
  let player2PlayedThisCell = this.player2.getPlayedMoves().includes(move);
  return player1PlayedThisCell || player2PlayedThisCell;
}

Game.prototype.getWinningCombinations = function() {
  return [[1,2,3],[4,5,6],[7,8,9],[1,4,7],[2,5,8],[3,6,9],[1,5,9],[3,5,7]];
}

Game.prototype.anyPlayerWonTheGame = function() {
  let winningCombinations = this.getWinningCombinations();
  let player1WonGame = this.player1.hasWon(winningCombinations);
  let player2WonGame = this.player2.hasWon(winningCombinations);
  return player1WonGame || player2WonGame;
}

Game.prototype.isGameDrawn = function() {
  return this.playedCells.length == 9;
}

Game.prototype.getWinner = function() {
  let winningCombinations = this.getWinningCombinations();
  if(this.player1.hasWon(winningCombinations)) {
    return this.player1.getName();
  }
  return this.player2.getName();
}

Game.prototype.updateStatus = function(text) {
  this.status = text;
}
