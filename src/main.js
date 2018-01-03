const playMove = function(event) {
  let cell = document.getElementById(event.target.id);
  cell.innerText = game.getCurrentPlayerId();
  game.currentPlayer.playedMoves.push(event.target.id);
  game.playedCells.push(event.target.id);
}

const resetGridText = function() {
  let gridElements = [1,2,3,4,5,6,7,8,9];
  gridElements.forEach(function(element) {
    document.getElementById(element).innerText = "";
  });
}

const clearGameStatus = function() {
  document.getElementById('gameStatus').innerText = "";
}

const resetGame = function () {
  resetGridText();
  clearGameStatus();
  createGame();
  startGame();
}

const checkResetClick = function() {
  let button = document.getElementById('playOrReplayButton');
  button.onclick = resetGame;
}

const checkWonOrDrawn = function() {
  if(game.anyPlayerWonTheGame()) {
    let gameStatus = game.getWinner()+'Won'
    action[gameStatus]();
    game.updateStatus(gameStatus);
  } else if(game.isGameDrawn()) {
    action['gameDrawn']();
    game.updateStatus(gameStatus);
  }
}

const checkGameStatus = function() {
  checkResetClick();
  checkWonOrDrawn();
}

const checkMove = function(event) {
  let cellAlreadyPlayed = game.doesCellAlreadyPlayed(event.target.id);
  if(!cellAlreadyPlayed && game.status == 'continue') {
    playMove(event);
    game.changePlayerTurn();
    checkGameStatus();
    displayPlayerTurn(game.getCurrentPlayerName());
  }
}

const changeButtonText = function() {
  let button = document.getElementById('playOrReplayButton');
  button.innerText = "restart game";
}

const startGame = function() {
  changeButtonText();
  displayPlayerTurn(game.getCurrentPlayerName());
  let table = document.getElementById('tic_toc_toe');
  table.onclick = checkMove;
}

const addClickListenerForButton = function() {
  let button = document.getElementById('playOrReplayButton');
  button.onclick = startGame;
}

const createGame = function() {
  game = new Game();
}

const addKeyListener = function() {
  createGame();
  addClickListenerForButton();
}

window.onload=addKeyListener;
