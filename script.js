    let WarLordCount = 0;
    let LasVegasScore = 0;
    let DonQuijoteScore = 0;
    let playerChoice;
    let computerChoice;
    let winner;
    let round = 1;
    const maxRounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    const nodeListButtons = document.querySelectorAll("button");
    const outputDiv = document.getElementById("game-output");
    const BattleOutputParagraph = document.createElement("p");
    const WarOutputParagraph = document.createElement("p");
    const ResetParagraph = document.createElement("p")
    const LasVegasParagraph = document.createElement("p")
      

   nodeListButtons.forEach((button) => {
            button.addEventListener("click", () => {
                playerChoice = button.textContent;
                if (playerChoice === "Reset" && WarLordCount >= 50) {
                    window.close();
                }
                else if (playerChoice === "Reset"){
                    reset();
                }
                else {
                    if (round < maxRounds) {
                        playTheRound();
                    }

                    else if (round === maxRounds) {
                        playTheRound();
                        result(playerScore, computerScore);

                }
                    else if (round > maxRounds && WarLordCount < 50){
                        ResetParagraph.innerHTML = `Click "Reset" for a new game.`;
                        outputDiv.appendChild(ResetParagraph);
                        console.log('End of game. For new game, please click "Reset".');
                    }
                }          
            });
        }); 
 

    function playTheRound() {
        computerChoice = getComputerChoice();
        winner = getWinner(playerChoice, computerChoice);    
        BattleOutputParagraph.innerHTML = `-----------------------------<br>
                                    Round ${round}<br>
                                    Player: ${playerChoice}<br>
                                    Computer: ${computerChoice}<br>
                                    Battle Outcome: ${winner}<br>
                                    Battle Score: ${playerScore}:${computerScore}<br>
                                    -----------------------------`;
        outputDiv.appendChild(BattleOutputParagraph);

        console.log("--------------------------");
        console.log("Round " + round);
        console.log("Players choice: " + playerChoice);
        console.log("Computers choice: " + computerChoice);
        console.log("Battle Outcome: " + winner)
        console.log("Battle Score: " + playerScore + ":" + computerScore)
        console.log("--------------------------")

        round++;
    }

    function getComputerChoice(){
        const choices = ["Rock", "Paper", "Scissor"];
        return choices[Math.floor(Math.random()*3)];
    }

    function getWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return "Standoff"
        }
        else if (playerChoice === "Rock" && computerChoice === "Scissor" || 
                 playerChoice === "Paper" && computerChoice === "Rock" || 
                 playerChoice === "Scissor" && computerChoice === "Paper" ) {
                    playerScore++
                    return "Advantage"
                 }  
        else {
            computerScore++;
            return "Reversal";
        }


    }

    function result(playerScore, computerScore) {
        
        WarLordCount++;

        if (playerScore === computerScore) {
            console.log("Deadlock. Try again!");
            WarOutputParagraph.innerHTML = "Deadlock. Try again!";
            
        }
        else if (playerScore < computerScore) {
            console.log("Defeat. May the force be with you next time.");
            WarOutputParagraph.innerHTML = "Defeat. May the force be with you next time.";
            DonQuijoteScore++;

        }
        else {
            console.log("Glorious Victory!")
            WarOutputParagraph.innerHTML = "Glorious Victory!";
            LasVegasScore++;
        }

        outputDiv.appendChild(WarOutputParagraph);


        if (WarLordCount >= 10 && WarLordCount < 50) {
            if (LasVegasScore > 0 && LasVegasScore >= DonQuijoteScore * 5) {
                LasVegasParagraph.innerHTML = "I don't recommend you going to Las Vegas. With that luck, they will just unalive you. I recommend you to travel the world an earn your money by gambling here and there. Or just start a company. It will go well, trust me";
            }
                else if (LasVegasScore > 0 && LasVegasScore >= DonQuijoteScore * 3 && LasVegasScore < DonQuijoteScore * 5) {
                    LasVegasParagraph.innerHTML = "At this point, you could make gambling your main income source. Las Vegas is a great place to be!";
                }
                else if (LasVegasScore > 0 && LasVegasScore < DonQuijoteScore * 3 && LasVegasScore >= DonQuijoteScore * 2) {
                    LasVegasParagraph.innerHTML = "You really should think about spending a weekend in Las Vegas!";
                }
                else {
                    LasVegasParagraph.innerHTML = "";
                }
                outputDiv.appendChild(LasVegasParagraph)      
        }
        if (WarLordCount >= 50) {
            LasVegasParagraph.innerHTML = "You really should visit an therapist or sth. Better an psychiatrist.";
            outputDiv.appendChild(LasVegasParagraph);
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
        outputDiv.innerHTML = "";

    }