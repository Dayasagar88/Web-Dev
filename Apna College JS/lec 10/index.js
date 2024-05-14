let userScoreCount = document.querySelector("#userScore");
let compScoreCount = document.querySelector("#compScore");
let compScore = 0;
let userScore  = 0;
let resetBtn = document.querySelector(".resetBtn");

function resetButton(){
    infoDiv.innerHTML = "Pick Your Move";
    compScore = 0;
    userScore = 0;
    userScoreCount.innerHTML = userScore;
    compScoreCount.innerHTML = compScore;
    infoDiv.style.backgroundColor = "black";
}

resetBtn.addEventListener("click" ,resetButton);

let infoDiv = document.querySelector(".pickMoveDiv");
let choices = document.querySelectorAll(".playIcons");

const genCompChoice = () => {
    const optionArr = ["rock", "paper", "sciccors"];
    const randIdx = Math.floor(Math.random() * 3);
    // console.log(optionArr[randIdx]); 
    return optionArr[randIdx];
}
const drawGame = (userChoice) => {
    infoDiv.innerHTML = `Draw! Computer also Chosen ${userChoice}`;
    infoDiv.style.backgroundColor = "red";
}

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScoreCount.innerHTML = userScore;
        infoDiv.style.backgroundColor = "#008000";
        infoDiv.innerHTML = `You Win! Your ${userChoice} Beats ${compChoice}`;
    }else{
        compScore++;
        compScoreCount.innerHTML = compScore;
        infoDiv.style.backgroundColor = "#212529";
        infoDiv.innerHTML = `You Lose! ${compChoice} Beats Your ${userChoice}`;
    }
}

const playGame = (userChoice) => {
    // console.log("user choice = ", userChoice);
    // generrate comp choice
    const compChoice = genCompChoice();
    console.log("Computer Choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame(userChoice);
    }else{
        
        // infoDiv.innerHTML = "Pick Your Move";

        let userWin = true;
        if(userChoice === "paper"){
            //scissors, rock
            userWin  = compChoice === "scissors" ? false : true;
        }else if(userChoice === "rock"){
            //scissors, paper
            userWin = compChoice === "paper" ? false : true;
        }else{
            //rock, paper
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

}

choices.forEach((choice) => {
   
    choice.addEventListener("click", ()=> {
        let userChoice = choice.getAttribute("id");
        // console.log("Clicked Choice is", userChoice);
        playGame(userChoice);
    })
});
























