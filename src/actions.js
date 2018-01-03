action = {}
action['player1Won'] = function() {
  diplayWinner('player 1');
}

action['player2Won'] = function() {
  diplayWinner('player 2');
}

action['gameDrawn'] = function() {
  displayDraw();
}
