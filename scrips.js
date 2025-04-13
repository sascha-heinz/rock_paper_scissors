




//Function to ask for the players choice and convert choice to lower Case (to make it more versatile in case of different spelling)
function getPlayerChoice () {
    let answer = prompt('Please enter your "attack" (rock, paper or scissor)');
    answer = answer.toLocaleLowerCase()
    return answer
}


//Function to randomly choose between rock, paper and scissor for the computer
   function getComputerChoice () {
    let randomNumber = Math.random()*100;
     if (randomNumber <= 33) {
        return "rock";
     }

     else if (randomNumber >= 66) {
        return "paper";
     }

     else {
        return "scissor"
     }

   }




//Function to compare players choice and computers choice an decide, who's the winner
function winner (playerChoice, computerChoice) {
    if (computerChoice === playerChoice) {
        return "draw"
    }

    else if (computerChoice === "rock" && playerChoice === "paper" || computerChoice === "paper" && playerChoice === "scissor") {
        return "player won"
    }

    else if (computerChoice === "paper" && playerChoice === "rock" || computerChoice === "scissor" && playerChoice === "paper")
        return "computer won"
    
    else {
        return "go back to school and learn english, or how this game works."
    }
}





//
const player = getPlayerChoice();
const computer = getComputerChoice();



console.log("Player: " + player)
console.log("Computer: " + computer)
console.log(winner(player, computer));