console.log("Hello World!");

function getComputerChoice(){
    const number = Math.floor(Math.random() * 3) - 1;
    let choice = "";

    if (number > 0){
        choice = "rock";
    } else if (number === 0){
        choice = "paper";
    } else {
        choice = "scissors";
    }


    return choice;
}

function getHumanChoice() {
    let choice = prompt("Rock, paper or scissors?").toLowerCase();

    return choice;
}

let humanScore = 0;
let computerScore = 0;

const comp = getComputerChoice();
const hum = getHumanChoice();

function playRound(hum, comp) {
    console.log("Human choice was " + hum);
    console.log("Computer choice was " + comp);

    if (
        (comp == "rock" && hum == "paper") ||
        (comp == "paper" && hum == "scissors") ||
        (comp == "scissors" && hum == "rock")
    ){
        humanScore += 1;
        console.log("Human won!");
        console.log("Current human score is " + humanScore);
        console.log("Current computer score is " + computerScore);
    } else if (
        (hum == "rock" && comp == "paper") ||
        (hum == "paper" && comp == "scissors") ||
        (hum == "scissors" && comp == "rock")
    ){
        computerScore += 1;
        console.log("Computer won!");
        console.log("Current human score is " + humanScore);
        console.log("Current computer score is " + computerScore);

    } else {
        console.log("Its a tie!");
        console.log("Current human score is " + humanScore);
        console.log("Current computer score is " + computerScore);
    }
    console.log("\n");
}

// playRound(hum, comp);
function playGame() {
    for (let i = 0; i < 5; i++) {
        const hum = getHumanChoice();
        const comp = getComputerChoice();

        playRound(hum, comp);
        alert("End of round " + (i + 1));
    }

    console.log("Final Human Score:", humanScore);
    console.log("Final Computer Score:", computerScore);
}

playGame();