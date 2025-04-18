//putting all the game into a function, so the game only starts, when i ask for it by ckliking the start button
function game() {

//Clear Console
console.clear();

//Define global variables (especially needed for counting the score)
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;
let round = 1;



//Loop to start game and to play the game 5 rounds by calling the functions and count the score
for (i = 1; i<=5; i++) {
    
    //calling the functions and write the return (result) in a variable (const)
    const player = getPlayerChoice();
    const computer = getComputerChoice();
    const winner = getWinner(computer, player);

    //counting the score after the outcome of a round is clear
    if (winner === "player won") {
        playerScore++
    }
    else if (winner === "computer won") {
        computerScore++
    }
    else if (winner === "tie") {
        tieScore++
    }
    else {}

    //write the result of the round in the console
    console.log("-----------------------------");
    console.log("Player: " + player);
    console.log("Computer: " + computer);
    console.log("Round " + i + "/5" + ": " + winner);
    console.log("Score: " + playerScore + ":" + computerScore);
    console.log("-----------------------------");

    //which round are we actually in?
    round++
}

//write the result of the game in the console and ask for a new game
console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>");
console.log("End of game")
console.log("Score: " + playerScore + ":" + computerScore);
if (playerScore > computerScore) {
    console.log("Congratulations, you won!")
}
else if (playerScore < computerScore) {
    console.log("This one you lost. Try again!")
}
else {
    console.log("That's a tie. Try again!")
}

console.log(`Click on the "Start" button for a new game`);
console.log("<><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><><>");

//Function to ask for the players choice and convert choice to lower Case (to make it more versatile in case of different spelling)
function getPlayerChoice () {   
    let answer = prompt("Round " + round + "/5" + ": " + 'Please enter your weapon (rock, paper or scissor)');
    
    if (answer !== null) {
        answer = answer.toLowerCase()
        if (answer !== "rock" && answer !== "paper" && answer !== "scissor") {   
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");  
            console.log("you better check your grammar");     
            console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");    
            return getPlayerChoice();
            }
    
        else {
            return answer
        }
    }
    
    else {
        console.log("Are you serious??????????????????????????")
        console.log("You better not cancel. That's a point for the computer")
        console.log("Are you serious??????????????????????????")
        return "pathetic"
    }
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
        return "tie"
    }

    else if (computer === "rock" && player === "paper" || computer === "paper" && player === "scissor" || computer === "scissor" && player === "rock") {
        return "player won"
    }

    else {
        return "computer won"
    }
}

}
