    
    // this function takes the user response and formats it. If an incorrect answer is given, loop back
    
    function getHumanChoice() {
        let humanText = prompt("Choose: Rock, Paper or Scissors?");
        let humanAnswer = humanText.charAt(0).toUpperCase() + humanText.slice(1).toLowerCase();

        while (humanAnswer !== "Rock" && humanAnswer !== "Paper" && humanAnswer !== "Scissors") {
            humanText = prompt(`${humanAnswer} is not a valid argument! Choose: Rock, Paper or Scissors?`);
            humanAnswer = humanText.charAt(0).toUpperCase() + humanText.slice(1).toLowerCase();
        } 

        return humanAnswer;
    }

    // this function creates a random number between 1-3 and assigns a string to each

    function getComputerChoice() {

        let randomNumber = Math.floor(Math.random() * 3) + 1;
        let choice;

        if (randomNumber === 1) {
            choice = "Rock"; 
        } else if (randomNumber === 2) {
            choice = "Paper";
        } else {
            choice = "Scissors";
        }

        return choice
    }
    
    // this function takes the results from the above two functions, and outputs what both the user and computer has chosen
    // it then makes a decision based on the game rules, and outputs who the winner is

    function gameDecision() {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log("You chose: " + humanChoice);
        console.log("The computer chose: " + computerChoice);

        let decision;

        if (humanChoice === computerChoice) {
            decision = ("It's a draw");
        } else if (
            (humanChoice === "Rock" && computerChoice === "Paper") ||
            (humanChoice === "Paper" && computerChoice === "Scissors") ||
            (humanChoice === "Scissors" && computerChoice === "Rock") 
        ) {
            decision = ("The computer wins!");
        } else {
            decision = ("You win!");
        }
        console.log(decision);
        return decision;
    }

    // these variables are to be used in the function below, placed in the global stack

    let humanScore = 0;
    let computerScore = 0;


    // this function takes the result from the above function, and provides a result based on it
    // depending on the result, the 'score' is then incremented using the above 2 variables

    function scoreCounter() {

        let result = gameDecision();

        if (result === "The computer wins!") {
            computerScore++;
        } else if (result === "You win!") {
            humanScore++;
        } else {
            console.log("Tie - play again!")
        }
        
        return result
    }

    // the function that takes all of the above and loops it, mimicking rounds
    // it also provides the ending through the if statement


    function playGame() {

        while (humanScore < 5 && computerScore < 5) {
        console.log(`Score -> Human: ${humanScore} | Computer: ${computerScore}`);
        scoreCounter();
        }

        if (humanScore === 5) {
            alert("You win the game!");
        } else {
            alert("The computer wins the game!");
        }
    }