const game = (function () {
  let gameBoard = [['', '', ''], ['', '', ''], ['', '', '']];

  const getGameBoard = () => gameBoard;
  const updateBoard = (row, col, mark) => {
    if (gameBoard[row][col] == '') {
      gameBoard[row][col] = mark;
    } else {
      alert('Invalid Move');
    }
  }
  return {getGameBoard, updateBoard};
})();

const controller = (function () {
  let currentPlayer = '';

  const player1 = player('Jason', 'O');
  const player2 = player('Jake', 'X');

  currentPlayer = player1;
  let getCurrentPlayer = () => currentPlayer;

  playRound(0,1);
  console.log(game.getGameBoard());

  function playRound (row, col) {
    game.updateBoard(row,col, currentPlayer.marker);
    if (currentPlayer == player1) {
      currentPlayer = player2;
    } else if (currentPlayer == player2) {
      currentPlayer = player1;
    }
  }
  
  return {getCurrentPlayer, player1, player2};
})();


function player (name, marker) {
  return {name, marker};
}


