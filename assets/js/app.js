// Key wins value
const options = {
    rock : "scissors",
    paper : "rock",
    scissors: "paper"
}

const imageSource = {
    rock : "assets/images/rock.png",
    paper : "assets/images/paper.png",
    scissors : "assets/images/scissors.png"
}

const scores = {
    you: 0,
    machine: 0
}

// Containers
const gameContainer = document.getElementById("gameContainer");
const resultContainer = document.getElementById("resultGroup");
const scoreContainer = document.getElementById("scoreContainer");
const startContainer = document.getElementById("startContainer");
const winnerContainer = document.getElementById("winnerContainer");

// Continue
resultContainer.addEventListener("click", ()=>{
    resultContainer.setAttribute("hidden", "hidden");
    gameContainer.removeAttribute("hidden");
})

// Result constants
const machineOptionIMG = document.getElementById("machineOption");
const resultText = document.getElementById("resultText");
const yourOptionIMG = document.getElementById("yourOption");

// Score constants
const machineScore = document.getElementById("machineScore");
const winnerText = document.getElementById("winnerText");
const yourScore = document.getElementById("yourScore");

// Functions
function start(){
    startContainer.style.display = "none";
    gameContainer.removeAttribute("hidden");
    scoreContainer.removeAttribute("hidden");
    yourScore.innerHTML = `${scores.you}`;
    machineScore.innerHTML = `${scores.machine}`;
}

function game(userOption){
    const machineOptions = ["rock", "paper", "scissors"];
    const numRandom = Math.floor(Math.random() * 3);
    const machineOption = machineOptions[numRandom];

    if(userOption === machineOption){
        result("tie", userOption, machineOption)
    }else{
        if(options[userOption] === machineOption){
            result("win", userOption, machineOption)
        }else{
            result("lose", userOption, machineOption)
        }
    }
}

function result(result, userOption, machineOption){
    // Hide and show containers
    gameContainer.setAttribute("hidden", "hidden");
    resultContainer.removeAttribute("hidden");

    switch (result) {
        case "win":
            scores.you += 1;
            yourScore.innerHTML = `${scores["you"]}`;
            resultText.innerHTML = "¡¡You have win!! :)";
            break;
        case "lose":
            scores.machine += 1;
            resultText.innerHTML = "You have lost :(";
            machineScore.innerHTML = `${scores["machine"]}`;
            break;
        case "tie":
            resultText.innerHTML = "Tie";
            break;
        default:
            break;
    }

    // Set images
    yourOptionIMG.setAttribute("src", imageSource[userOption]);
    machineOptionIMG.setAttribute("src", imageSource[machineOption]);

    // Check winner
    checkWinner();
}

function checkWinner(){
    if(scores.you === 3){
        resultGroup.setAttribute("hidden", "hidden");
        winnerContainer.style.setProperty("display", "grid", "important");
        winnerText.innerHTML = "¡¡CONGRATULATIONS!! You have WIN the game."
    }
    if(scores.machine === 3){
        resultGroup.setAttribute("hidden", "hidden");
        winnerContainer.style.setProperty("display", "grid", "important");
        winnerText.innerHTML = "SORRY :(. You have LOST the game."
    }
}