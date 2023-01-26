const gameData =[
    [0,0,0],
    [0,0,0],
    [0,0,0],
]

let editedplayer =0;

let active_player=0;
let currentround =1;
let gameisover=false;

const player =[
    {
        name:'',
        symbol:'X'
    },
    {
        name:'',
        symbol:'O'
    },
];


const playerconfigoverlays=document.getElementById('config-overlay');
const backdrop=document.getElementById('backdrop');
const form=document.querySelector('form');
const errorOutputElement=document.getElementById('config-error');
const gameArea=document.getElementById('active-game');
const activeplayername=document.getElementById('active-player-name');
const gameover=document.getElementById('game-over');


const editplayer1btn =document.getElementById('edit-player-1-btn');
const editplayer2btn =document.getElementById('edit-player-2-btn');
const cancelconfigbtn=document.getElementById('cancel-config-btn');
const startnewgamebtn=document.getElementById('start-game-btn');
// const gameFields=document.querySelectorAll('#game-board li');
const gameBoard=document.getElementById('game-board');




editplayer1btn.addEventListener('click' ,openplayerconfig);
editplayer2btn.addEventListener('click' ,openplayerconfig);
cancelconfigbtn.addEventListener('click',closeplayerconfig);
backdrop.addEventListener('click',closeplayerconfig);
startnewgamebtn.addEventListener('click',startNewGame);

form.addEventListener('submit',savePlayerConfig);

// for (const gameField of gameFields){
//     gameField.addEventListener('click',selectGameField);
// }

gameBoard.addEventListener('click',selectGameField);
