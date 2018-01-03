const displayPlayerTurn = function(player) {
  document.getElementById('playerTurn').innerText = `${player}'s turn`;
}

const diplayWinner = function(player) {
  document.getElementById('gameStatus').innerText = `${player} won the game`;
}

const displayDraw = function() {
  document.getElementById('gameStatus').innerText = 'game is drawn';
}
