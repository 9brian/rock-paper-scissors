console.log("Hello World!");

let playerScore = 0;
let computerScore = 0;

function computerSelection(){
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

function playerSelection() {
    const buttons = document.querySelectorAll("button");
    // we use the .forEach method to iterate through each button
    buttons.forEach((button) => {
        // and for each one we add a 'click' listener
        button.addEventListener("click", () => {
            let choice = button.id;
            playRound(choice, computerSelection())
        });
    });
}

const container = document.querySelector("#container"); 

const scoreBoard = document.createElement("div");
scoreBoard.classList.add("scoreBoard"); // add scoreBoard class
// // scoreBoard.textContent = "This is the glorious text-content!";
container.append(scoreBoard); 


const score = document.createElement("p");
score.classList.add("score");
score.textContent = "this works!";
scoreBoard.append(score);



function playRound(player, computer) {
    console.log("Your choice was " + player);
    console.log("Computer choice was " + computer);

    if (
        (computer== "rock" && player == "paper") ||
        (computer== "paper" && player == "scissors") ||
        (computer== "scissors" && player == "rock")
    ){
        playerScore += 1;
        console.log("Your won!");
        console.log("Your current score is " + playerScore);
        console.log("Current computer score is " + computerScore);
    } else if (
        (player == "rock" && computer== "paper") ||
        (player == "paper" && computer== "scissors") ||
        (player == "scissors" && computer== "rock")
    ){
        computerScore += 1;
        console.log("Computer won!");
        console.log("Your current score is " + playerScore);
        console.log("Current computer score is " + computerScore);

    } else {
        console.log("Its a tie!");
        console.log("Your current score is " + playerScore);
        console.log("Current computer score is " + computerScore);
    }
    console.log("\n");
}

console.log(playerSelection());

// playRound(player, comp);
// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         const player = playerSelection();
//         const computer= computerSelection();

//         playRound(player, comp);
//         alert("End of round " + (i + 1));
//     }

//     console.log("Final Your Score:", playerScore);
//     console.log("Final Computer Score:", computerScore);
// }

// playGame();