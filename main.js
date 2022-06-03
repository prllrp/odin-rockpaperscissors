function computerPlay(){
   const hand = ['Rock','Paper','Scissors'];
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
        console.log("You Win! Scissors beats Paper")
        return "Win"
    }else if(playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors'){
        console.log("You Lose! Scissors beats Paper")
        return "Lose"
    }else{
        return "Please make a valid selection"
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 0; i < 5; i++){
        let result = playRound(prompt("Please enter Rock Paper or Scissors"),computerPlay())
        if(result === "Win"){
            playerScore += 1;
        }else if(result === "Lose"){
            computerScore += 1;
        }
       }
    if(playerScore > computerScore){
        console.log(`You win! ${playerScore}:${computerScore}`)
    }else if(playerScore < computerScore){
        console.log(`You Lose! ${playerScore}:${computerScore}`)
    }else{
        console.log(`Tie! ${playerScore}:${computerScore}`)
    }
}
