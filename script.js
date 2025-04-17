    let playerChoice;
    let computerChoice;
    let winner;
    let round = 1;
    const maxRounds = 5;
    let playerScore = 0;
    let computerScore = 0;




   const nodeListButtons = document.querySelectorAll("button")
        
   nodeListButtons.forEach((button) => {
            button.addEventListener("click", () => {
                playerChoice = button.textContent;
                if (playerChoice === "Reset") {
                    reset();
                }
                else {
                    if (round < maxRounds) {
                        console.log(playerChoice);
                        playTheRound();
                    }

                    else if (round === maxRounds) {
                        console.log(playerChoice)
                        playTheRound();
                        result(playerScore, computerScore);
                }
                    else {
                        console.log('End of game. For new Game, please click "Reset"');
                    }
                }          
            });
        }); 
  //  }
 

    function playTheRound() {
        computerChoice = getComputerChoice();
        console.log(computerChoice)
        winner = getWinner(playerChoice, computerChoice);
        round++
    }


    function getComputerChoice(){
        const choices = ["Rock", "Paper", "Scissor"];
        return choices[Math.floor(Math.random()*3)];
    }

    function getWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            console.log("tie")
        }
        else if (playerChoice === "Rock" && computerChoice === "Scissor" || 
                 playerChoice === "Paper" && computerChoice === "Rock" || 
                 playerChoice === "Scissor" && computerChoice === "Paper" ) {
                    console.log("won")
                    playerScore++
                 }  
        else {
            console.log("lost")
            computerScore++
        }


    }

    function result(playerScore, computerScore) {
        if (playerScore === computerScore) {
            console.log("That's a tie. Try again!")
        }
        else if (playerScore < computerScore) {
            console.log("Unfortunately (literally unfortunately) you lost. Try again! May the force be with you.")
        }
        else {
            console.log("Congratulations! You won!")
        }
    }

    function reset() {
        playerChoice;
        computerChoice;
        winner;
        round = 1;
        playerScore = 0;
        computerScore = 0;
        console.clear();
    }
 

 
/* Es muss noch eine Funktion eingefügt werden, die genau die letzte Runde beschreibt (rounds === 5). Es soll in einem Zug die letzte Runde gespielt werden
   und "Spiel Ende: y hat gewonnen" ausgegeben werden. Bei einem nochmaligen klicken soll nur darauf verwiesen werdn, dass das Spiel neugetsartet werden muss.
*/