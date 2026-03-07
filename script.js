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


const playerDisplay = document.createElement("p");
playerDisplay.classList.add("playerDisplay");

const computerDisplay = document.createElement("p");
computerDisplay.classList.add("computerDisplay");

scoreBoard.append(playerDisplay);
scoreBoard.append(computerDisplay);

function displayScoreBoard (playerScore, computerScore) {

    /*
        Clean up logic in this function; 
        create another p element that displays the feedback
        Instead of appending it.
    */

    let playerFeedback = playerDisplay.innerHTML = `
    Player Display
    <br>=============
    <br>Your current score is ${playerScore}
    `;
    let computerFeedback = computerDisplay.innerHTML = `
    Computer Display
    <br>=============
    <br>Your current score is ${computerScore}
    `;

    if (playerScore > computerScore) {
        playerFeedback += "<br><br> You won this round!!!";
    } else if (computerScore > playerScore){
        computerFeedback += "<br><br> Computer won this round...";
    } else {
        computerFeedback += "<br><br> Its a tie this round!";
    }

    playerDisplay.innerHTML = playerFeedback;
    computerDisplay.innerHTML = computerFeedback;
}


function playRound(player, computer) {
    console.log("Your choice was " + player);
    console.log("Computer choice was " + computer);

    if (
        (computer== "rock" && player == "paper") ||
        (computer== "paper" && player == "scissors") ||
        (computer== "scissors" && player == "rock")
    ){
        playerScore += 1;
    } else if (
        (player == "rock" && computer== "paper") ||
        (player == "paper" && computer== "scissors") ||
        (player == "scissors" && computer== "rock")
    ){
        computerScore += 1;

    } else {
        // Currently a tie
    }
    console.log("\n");
    console.log(playerScore + " " + computerScore)
    displayScoreBoard(playerScore, computerScore);

    setTimeout(() => {
        if (playerScore === 5){
            alert("You won! Thanks for playing");
        } else if (computerScore === 5){
            alert("You lost.. Thanks for playing");
        }
    }, 0);
}

// console.log(playerSelection());
playerSelection();

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