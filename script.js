let computerScore = 0;
let playerScore = 0;

function game(){

    while(computerScore < 3 && playerScore < 3){
    round();

    console.log('comp = ', computerScore, 'player = ', playerScore)

    }
    if (computerScore == 3){
        console.log('Computer Wins!')
    } else {
            console.log('Player Wins')
    }
    

}




function round(){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Enter Your Choice:').toUpperCase();
    switch (playerSelection){
        case 'ROCK':
            switch (computerSelection){
                case 'ROCK':
                    console.log('Tie, try again');
                    break;
                
                case 'PAPER':
                    console.log('Computer wins a point');
                    computerScore++
                    break;

                case 'SCISSORS':
                    console.log('Player wins a point');
                    playerScore++
                    break;
            
            }
            break;

        case 'PAPER':
            switch (computerSelection){
                case 'ROCK':
                    console.log('Player wins a point');
                    playerScore++
                    break;
                
                case 'PAPER':
                    console.log('Tie, try again');
                    break;

                case 'SCISSORS':
                    console.log('Computer wins a point');
                    computerScore++;
                    break;

            }
            break;

        case 'SCISSORS':
            switch (computerSelection){
                case 'ROCK':
                    console.log('Computer wins a point');
                    computerScore++;
                    break;
                
                case 'PAPER':
                    console.log('Player wins a point');
                    playerScore++;
                    break;

                case 'SCISSORS':
                    console.log('Tie, try again');
                    break;

            }
            break;
            

        default:
            console.log('Invalid Input');
            round();
    }


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


