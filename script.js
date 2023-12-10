function roundOne(){
    let computerSelection = getComputerChoice();
    console.log(computerSelection);
    let playerSelection = prompt('Enter Your Choice:').toUpperCase();
    console.log(playerSelection);
}

function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3)
    switch(rand){
        case 0:
            computerSelection = 'ROCK';
            break;
        case 1:
            computerSelection = 'PAPER';
            break;
        case 2:
            computerSelection = 'SCISSORS';
            break;
    };

    return(computerSelection);

}


