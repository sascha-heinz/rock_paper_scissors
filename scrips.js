//Loop to call the functions to play the game 5 rounds and count the score
for (i = 1; i<=5; i++) {
    const player = getPlayerChoice();
    const computer = getComputerChoice();
    const winner = getWinner(computer, player);
    console.log("");
    console.log("Player: " + player);
    console.log("Computer: " + computer);
    console.log("");
    console.log("Round " + i + ": " + winner);
    console.log("");
    console.log("------------------------------");
}


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
function getWinner (computer, player) {
    if (computer === player) {
        return "draw"
    }

    else if (computer === "rock" && player === "paper" || computer === "paper" && player === "scissor" || computer === "scissor" && player === "rock") {
        return "player won"
    }

    else if (computer === "paper" && player === "rock" || computer === "scissor" && player === "paper"  || computer === "rock" && player === "scissor" )
        return "computer won"
    
    else {
        return "go back to school and learn english, or how this game works."
    }
}

