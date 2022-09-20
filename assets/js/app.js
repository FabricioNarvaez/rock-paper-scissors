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
    }else if(userOption === "rock" && machineOption === "paper"){
        lose();
    }else if(userOption === "rock" && machineOption === "scissors"){
        win();
    }else if(userOption === "paper" && machineOption === "rock"){
        win();
    }else if(userOption === "paper" && machineOption === "scissors"){
        lose();
    }else if(userOption === "scissors" && machineOption === "rock"){
        lose();
    }else if(userOption === "scissors" && machineOption === "paper"){
        win();
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