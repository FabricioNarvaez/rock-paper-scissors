// Key win value
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

const containerStart = document.getElementById("containerStart");
const gameContainer = document.getElementById("gameContainer");
const scoreContainer = document.getElementById("scoreContainer");

// Result constants
const resultContainer = document.getElementById("resultGroup");
const resultText = document.getElementById("resultText");
const yourOptionIMG = document.getElementById("yourOption");
const machineOptionIMG = document.getElementById("machineOption");

// Score constants
const yourScore = document.getElementById("yourScore");
const machineScore = document.getElementById("machineScore");

// Functions
function start(){
    containerStart.style.display = "none";
    gameContainer.removeAttribute("hidden");
    scoreContainer.removeAttribute("hidden");
    console.log(scores["you"])
    yourScore.innerHTML = `${scores["you"]}`;
    machineScore.innerHTML = `${scores["machine"]}`;
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

    // result === true => Win
    switch (result) {
        case "win":
            resultText.innerHTML = "¡¡You have win!! :)";
            break;
        case "lose":
            resultText.innerHTML = "You have lost :(";
            break;
        case "tie":
            resultText.innerHTML = "Tie";
            break;
    
        default:
            break;
    }

    // Set images
    yourOptionIMG.setAttribute("src", imageSource[userOption])
    machineOptionIMG.setAttribute("src", imageSource[machineOption])


}