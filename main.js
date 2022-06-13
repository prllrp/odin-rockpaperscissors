
const playerChoice = document.querySelectorAll('.choice');
const selection = document.querySelector('.current-selection');
const score = document.querySelector('.score')
let playerScore = 0;
let computerScore = 0;



playerChoice.forEach(e => e.addEventListener('click', () => {
    const choice = e.className.split(' ')[0];
    const comp = computerPlay();
    console.log(choice)
    console.log(comp)
    selection.innerHTML = choice +' vs. ' + comp ;
    const result = playRound(choice,comp);
    if(result === "Win"){
        playerScore += 1;
    }else if(result === "Lose"){
        computerScore += 1
    } 
    score.innerHTML = `Player - ${playerScore} : ${computerScore} - Computer`
    if(playerScore === 5){
        score.innerHTML = `You win! ${playerScore} : ${computerScore}`
    }else if(computerScore === 5){
        score.innerHTML = `You Lose! ${playerScore} : ${computerScore}`
    }
    
}))






    



function computerPlay(){
   const hand = ['rock','paper','scissors'];
   return hand[Math.floor(Math.random()*3)] 
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === computerSelection.toLowerCase()){
        console.log("Tie! Try again!")
        return "Tie"
    }else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper'){
        console.log("You Lose! Paper beats Rock")
        return "Lose"
    }else if(playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper'){
        console.log("You Win! Scissors beats Paper")
        return "Win"
    }else if(playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors'){
        console.log("You Win! Rock beats Scissors")
        return "Win"
    }else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors'){
        console.log("You Lose! Scissors beats Paper")
        return "Lose"
    }else{
        return "Please make a valid selection"
    }
}

function game(){
   
    for(let i = 0; i < 5; i++){
        let result = playRound(prompt("Please enter Rock Paper or Scissors"),computerPlay())
        if(result === "Win"){
            playerScore += 1;
        }else if(result === "Lose"){
            computerScore += 1;
        }
       }
   
}
