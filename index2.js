const ground=document.querySelectorAll('.ground');
const resetBtn=document.querySelector('#restartBtn');
const winner=document.querySelector('#winner')
const turn=document.querySelector('#turn');
const drawBoard=document.querySelector('#draw');
const score1Board=document.getElementById('score1');
const score2Board=document.querySelector('#score2');
const startScreen=document.querySelector('#startScreen');
const onePlayer=document.querySelector('#play1');
const twoPlayer=document.querySelector('#play2');
let name2=document.querySelector('#name2');
let name1=document.querySelector('#name1');
const player1Info=document.getElementById('player1-info');
const player2Info=document.getElementById('player2-info');
const playBtn=document.getElementById('plays');
const rounds=document.getElementById('roundBtn');
const round5=document.querySelector('#round5');
const round10=document.querySelector('#round10');
let player1=document.querySelector('#player1');
let player2=document.querySelector('#player2');



let runBot=true;
let roundGame=0;


const onePlayerGame=()=>{
//     onePlayer.style.display='none';
//     twoPlayer.style.display='none';
//     player1Info.classList.remove('d-none');
//     playBtn.classList.remove('d-none');
//     runBot=false;
alert(`It will be Working Soon please spear me some time`);

}

const twoPlayerGame=()=>{
    onePlayer.style.display='none';
    twoPlayer.style.display='none';
    player1Info.classList.remove('d-none');
    player2Info.classList.remove('d-none');
    playBtn.classList.remove('d-none');
    runBot=false;
}

const playGameBtn=()=>{

  startScreen.classList.add('d-none');
  player2.textContent=name2.value;
  player1.textContent=name1.value;

}

const round5Game=()=>{
    roundGame=5;
    rounds.classList.add('d-none');
    document.querySelector('.choose').classList.remove('d-none');
}

const round10Game=()=>{
    roundGame=10;
    rounds.classList.add('d-none');
    document.querySelector('.choose').classList.remove('d-none');
}

round5.addEventListener('click',round5Game)
round10.addEventListener('click',round10Game)
twoPlayer.addEventListener('click',twoPlayerGame);
onePlayer.addEventListener('click',onePlayerGame);
playBtn.addEventListener('click',playGameBtn);


let score1=0;
let score2=0;
const winningPattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let options=['','','','','','','','',''];

let player2Move='O';
let player1Move='X';
let currentPlayer=player1Move;
let running=false;
let draw=0;
initializedGame();


function initializedGame(){
    ground.forEach(grounds=>grounds.addEventListener('click',groundClick));
    resetBtn.addEventListener('click',restartBtn);
    running=true;
}

function groundClick(){

    const cell=this.getAttribute('cellIndex');
if(options[cell]!= ''){
    return;
}

updateGround(this,cell);

if(checkWinner()){
  if(currentPlayer==player1Move){
    score1++;
    score1Board.textContent=score1;

    roundGames();
    alert(`${currentPlayer}'s Wins`)
    restartBtn();
    return;
  }
  else if(currentPlayer==player2Move){
    score2++;
    roundGames();
    alert(`${currentPlayer}'s Wins`)
    restartBtn();
    return;
  }
}
if(!options.includes('')){
    draw++
drawBoard.textContent=draw;
alert(`It's a Draw`);
restartBtn();
}
changePlayer(this,cell);
turn.textContent=`${currentPlayer}'s Turn`;
}
const roundGames=()=>{
    if(score1===roundGame){
        alert(`${name1.value} is the WINNER`);
     location.reload();
    }
    else if(score2===roundGame){
        alert(`${name1.value} is the WINNER`);
     location.reload();
    }

}

function updateGround(cell,index){  
options[index]=currentPlayer;
cell.textContent=currentPlayer;
}

function changePlayer(cell,index){
        options[index]=currentPlayer;
        cell.textContent=currentPlayer;
  
currentPlayer = currentPlayer === player1Move ? player2Move : player1Move;
}

resetBtn.addEventListener('click',restartBtn);
function restartBtn(){   
    currentPlayer=player1Move;
  
  options=['','','','','','','','',''];
    turn.textContent=`${currentPlayer}'s Turn`;
    ground.forEach(grounds => grounds.textContent='');
}


function checkWinner(){
    for (const combination of winningPattern) {
        const [a, b, c] = combination;
        if (options[a] && (options[a] === options[b] && options[a] === options[c])) {
          
           return [a,b,c]; 
        }
        
}
    return false;    
    }

  
