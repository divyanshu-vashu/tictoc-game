function resetgame(){
    active_player=0;
    currentround=1;
    gameisover=false;
    gameover.firstElementChild.innerHTML='you won <span id="winner-name">playername</span>!';
    gameover.style.display='none';
    let gameboardindex=0;
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            gameData[i][j]=0;
            const gameboarditem=gameBoard.children[gameboardindex];
            gameboarditem.textContent='';
            gameboarditem.classList.remove('disabled');
            gameboardindex++;
        }

    }
}

function startNewGame() {
  if (player[0].name === "" || player[1].name === "") {
    alert("please set player name");
    return;
  }

  resetgame();
  activeplayername.textContent = player[active_player].name;
  gameArea.style.display = "block";
}
function checkforgameover() {
  //checking the rows
  for (let i = 0; i < 3; i++) {
    if (
      gameData[i][0] > 0 &&
      gameData[i][0] === gameData[i][1] &&
      gameData[i][1] === gameData[i][2]
    ) {
      return gameData[i][0];
    }
  }

  for (let i = 0; i < 3; i++) {
    if (
      gameData[0][i] > 0 &&
      gameData[0][i] === gameData[1][i] &&
      gameData[1][i] === gameData[2][i]
    ) {
      return gameData[0][i];
    }
  }

  if (
    gameData[0][0] > 0 &&
    gameData[0][0] === gameData[1][1] &&
    gameData[1][1] === gameData[2][2]
  ) {
    return gameData[0][0];
  }
  if (
    gameData[0][2] > 0 &&
    gameData[0][2] === gameData[1][1] &&
    gameData[1][1] === gameData[2][0]
  ) {
    return gameData[0][2];
  }
  if(currentround ===9 ){
    return -1;
  }
  return 0;
}

function selectGameField(event) {
  console.log(event.target.tagName);
  if (event.target.tagName !== "LI" || gameisover) {
    return;
  }
  event.target.textContent = player[active_player].symbol;
  event.target.classList.add("disabled");

  const selectedcol = event.target.dataset.col - 1;
  const selectedrow = event.target.dataset.row - 1;

  if (gameData[selectedrow][selectedcol] > 0) {
    return;
  }
  gameData[selectedrow][selectedcol] = active_player + 1;
  const winnerid =checkforgameover();
  console.log(winnerid);
  if(winnerid!==0){
    endgame(winnerid);
  }
  currentround=currentround+1;

  active_player = (active_player + 1) % 2;
  activeplayername.textContent = player[active_player].name;
  //console.log(player[0].symbol);
  console.log(gameData);
}


function endgame(winnerid){
    gameisover=true;

  gameover.style.display='block';
  if(winnerid>0 ){
    const winnername=player[winnerid-1].name;
    gameover.firstElementChild.firstElementChild.textContent = winnername;
  }  else {
    gameover.firstElementChild.textContent = 'It\'s draw';
  }

  
}