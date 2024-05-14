let boxes = document.querySelectorAll(".box");
let playerTurn = document.querySelector(".player-turn");
let newGame = document.querySelector(".new-game-box");
let winnerBox = document.querySelector(".player-box")

let inBox = true;

const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

for(let box of boxes){
    box.addEventListener("click",() => {
        if(inBox){
            box.style.borderColor = "pink";
            box.style.color = "red";
            box.innerHTML = "X";
            playerTurn.innerHTML = "O";
            inBox = false;
        }else{
            box.style.borderColor = "pink";

            box.style.color = "blue";
            box.innerHTML = "O";
            playerTurn.innerHTML = "X";
            inBox = true;
        }
        box.style.pointerEvents = "none";

        checkWinner();
    })
}

const checkWinner = () => {
    let position1;
    let position2;
    let position3;
    foundWinner = 0;
    for(let position of winningPosition){
        position1 = boxes[position[0]].innerText;
        position2 = boxes[position[1]].innerText;
        position3 = boxes[position[2]].innerText;

        if(position1 != "" && position2 != "" && position3 != ""){
            if(position1 === position2 && position2 === position3){
                console.log("winner " + position1);
                foundWinner = 1;
                winnerBox.innerText = `WINNER ${position1}`;
                winnerBox.style.backgroundColor = "green";

                for(let box of boxes){
                    box.style.pointerEvents = "none";
                    // box.style.background = "green";
                }
                if(foundWinner === 1){
                    boxes[position[0]].classList.add("win");
                    boxes[position[1]].classList.add("win");
                    boxes[position[2]].classList.add("win");
                }
            }
        }
        
    }

    let fillCount  = 0;
    boxes.forEach((box) => {
        if(box !== "")
        fillCount++;
    });

};
checkWinner();

const initGame = () => {
    for(let box of boxes){
        box.innerText = "";
        box.style.pointerEvents = "all";
        inBox = true;
        // winnerBox.innerText = "Current Player :";
        winnerBox.style.background = "none";
        box.style.color = "";
        box.style.borderColor = "";
    }
} 


newGame.addEventListener("click", initGame);