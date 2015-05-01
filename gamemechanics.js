var currentPlayer = 'X';
var winner = '';
var gameover = false;
var gameCells = document.querySelectorAll('.gamecell');

function restart(){
  for (var i = 0; i < gameCells.length; i++) {
    gameCells[i].setAttribute('data-occupied', 'false');
    gameCells[i].innerHTML = '';
  };
  currentPlayer = 'X';
  winner = '';
  result.innerText = '';
  gameover = false;
  console.log('game restarted');
}

restartButton.addEventListener('click', restart);

function claimCell(cell){
  if(cell.getAttribute('data-occupied') === 'false' && gameover === false){
    cell.innerHTML = '<p>' + currentPlayer + '</p>';
    cell.setAttribute('data-occupied', 'true');
  } else{
    console.log('that cell is already taken');
  };
}

function changePlayer(){
  if (currentPlayer === 'X') {
    currentPlayer = 'O';
  } else{
    currentPlayer = 'X';
  };
}

function checkFilledBoard(){
  var occupiedCells = 0;
  for (var i = 0; i < gameCells.length; i++) {
    if(gameCells[i].getAttribute('data-occupied') === 'true'){
      occupiedCells++;
    };
  };
  if (occupiedCells === gameCells.length && winner === '') {
    gameover = true;
    result.innerText = 'CATS GAME';
  };
}

function checkForWinner(){
  if(topleft.innerHTML !== ''){
    if(topleft.innerHTML === topcenter.innerHTML && topleft.innerHTML === topright.innerHTML){
      winner = topleft.firstChild.innerHTML;
    } else if(topleft.innerHTML === middlecenter.innerHTML && topleft.innerHTML === bottomright.innerHTML){
      winner = topleft.firstChild.innerHTML;
    } else if(topleft.innerHTML === middleleft.innerHTML && topleft.innerHTML === bottomleft.innerHTML){
      winner = topleft.firstChild.innerHTML;
    };
  };
  if(topcenter.innerHTML !== ''){
    if(topcenter.innerHTML === middlecenter.innerHTML && topcenter.innerHTML === bottomcenter.innerHTML){
      winner = topcenter.firstChild.innerHTML;
    };
  };
  if(topright.innerHTML !== ''){
    if(topright.innerHTML === middleright.innerHTML && topright.innerHTML === bottomright.innerHTML){
      winner = topright.firstChild.innerHTML;
    };
    if(topright.innerHTML === middlecenter.innerHTML && topright.innerHTML === bottomleft.innerHTML){
      winner = topright.firstChild.innerHTML;
    };
  };
  if(middleleft.innerHTML !== ''){
    if(middleleft.innerHTML === middlecenter.innerHTML && middleleft.innerHTML === middleright.innerHTML){
      winner = middleleft.firstChild.innerHTML;
    }
  }
  if(bottomleft.innerHTML !== ''){
    if (bottomleft.innerHTML === bottomcenter.innerHTML && bottomleft.innerHTML === bottomright.innerHTML){
      winner = bottomleft.firstChild.innerHTML;
    };
  };
  if(winner !== ''){
    gameover = true;
    result.innerText = winner + ' WINS!';
  };
}

for (var i = 0; i < gameCells.length; i++) {
  gameCells[i].addEventListener('click', function(){
    claimCell(this);
    checkForWinner();
    changePlayer();
    checkFilledBoard();
  });
};
console.log(gameCells);