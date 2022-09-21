// Key win value
const options = {
    paper : "rock",
    rock : "scissors",
    scissors: "paper"
}

function start(){
    const container = document.getElementById("container");
    const gameContainer = document.getElementById("gameContainer");
    
    container.style.display = "none";
    gameContainer.removeAttribute("hidden");
}

function game(userOption){
    const machineOptions = ["rock", "paper", "scissors"];
    const numRandom = Math.floor(Math.random() * 3);
    const machineOption = machineOptions[numRandom];

    console.log(`Me: ${userOption}\nMachine:${machineOption}`)
    if(userOption === machineOption){
        tie();
    }else{
        if(options[userOption] === machineOption){
            console.log("Win")
        }else{
            console.log("Lose")
        }
    }
}

function tie(result){
    alert("tie");
}
function win(result){
    alert("win");
}
function lose(result){
    alert("lose");
}