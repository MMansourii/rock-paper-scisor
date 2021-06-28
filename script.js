import {startConfetti ,stopConfetti ,removeConfetti} from './confetti.js';

const player = document.getElementById('player');
const computer = document.getElementById('computer');
const playerChoiceEl = document.getElementById('playerChoice');
const computerChoiceEl = document.getElementById('computerChoice');
const playerScoreEl = document.getElementById('playerScore');
const computerScoreEl = document.getElementById('computerScore');
const resultText = document.getElementById('resultText');
const  resetIcon = document.querySelector('.reset-icon');

const playerRock = document.getElementById('playerRock');
const playerPaper = document.getElementById('playerPaper');
const playerScissors = document.getElementById('playerScissors');
const playerLizard = document.getElementById('playerLizard');
const playerSpock = document.getElementById('playerSpock');

const computerRock = document.getElementById('computerRock');
const computerPaper = document.getElementById('computerPaper');
const computerScissors = document.getElementById('computerScissors');
const computerLizard = document.getElementById('computerLizard');
const computerSpock = document.getElementById('computerSpock');
const allGameIcons = document.querySelectorAll('.far');

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};
// Computer Choice
let computerChoice = '';
let playerScoreNum =0;
let computerScoreNum =0;

// Reset All 'selected' class
function resetSelected(){
  allGameIcons.forEach( icon =>{
    icon.classList.remove('selected');
  });
  stopConfetti();
  removeConfetti();
}
// Random choice for computer
function computerRandomChoice(){
  const computerChoiceNum = Math.random()
  if(computerChoiceNum < 0.2 ){
    computerChoice = 'rock';
  }else if(computerChoiceNum <= 0.4){
    computerChoice = 'paper';
  }else if(computerChoiceNum <=0.6){
    computerChoice = 'scissors';
  }else if(computerChoiceNum <= 0.8){
    computerChoice = 'lizard';
  }else{
    computerChoice = 'spock';
  }
}

// Passing computerselected choice and styling icons
function displayComputerChoice(){

    switch(computerChoice){
      case 'rock': 
          computerRock.classList.add('selected');
          computerChoiceEl.textContent = '--- Rock';
          break;
      case 'paper': 
          computerPaper.classList.add('selected');
          computerChoiceEl.textContent = '--- Paper';
          break;
      case 'scissors': 
          computerScissors.classList.add('selected');
          computerChoiceEl.textContent = '--- Scissors';
          break;
      case 'lizard': 
          computerLizard.classList.add('selected');
          computerChoiceEl.textContent = '--- Lizard';
          break;
      case 'spock': 
          computerSpock.classList.add('selected');
          computerChoiceEl.textContent = '--- Spock';
          break;  
      default:
       break;
    }
  }
  // Update result and comprise selection
  function updateScore(playerChoice){
    if(playerChoice === computerChoice){
      resultText.textContent = 'Tie';
    }else{
      const choice = choices[playerChoice];
      if(choice.defeats.indexOf(computerChoice)  > -1){
        startConfetti();
        resultText.textContent = 'You Won';
        playerScoreNum++;
        playerScoreEl.textContent = playerScoreNum;
      }else{
        resultText.textContent = 'You Lost';
        computerScoreNum++;
        computerScoreEl.textContent = computerScoreNum ; 
      }
    }
  }

// Call function to proccess turn
function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice);
}

// Passing player selected choice and styling icons
function select(playerChoice){

checkResult(playerChoice);
  // Add style add update player choice
  switch(playerChoice){
    case 'rock': 
        playerRock.classList.add('selected');
        playerChoiceEl.textContent = '--- Rock';
        break;
    case 'paper': 
        playerPaper.classList.add('selected');
        playerChoiceEl.textContent = '--- Paper';
        break;
    case 'scissors': 
        playerScissors.classList.add('selected');
        playerChoiceEl.textContent = '--- Scissors';
        break;
    case 'lizard': 
        playerLizard.classList.add('selected');
        playerChoiceEl.textContent = '--- Lizard';
        break;
    case 'spock': 
        playerSpock.classList.add('selected');
        playerChoiceEl.textContent = '--- Spock';
        break;  
    default:
     break;
  }
}
// To make the select function globally accessible shoud do that
window.select = select ;
// Reset everything in game
function resetAll(){
    resetSelected();
    playerScoreNum = 0 ;
    computerScoreNum = 0 ;
    resultText.textContent = '';
    playerScoreEl.textContent = '0';
    computerScoreEl.textContent = '0';
}

// Event listener on reset icon
resetIcon.addEventListener('click',resetAll);


// Onload and intial
resetAll();
