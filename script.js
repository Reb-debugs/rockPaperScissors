function roundOne(){
    let computerSelection = getComputerChoice();
    let playerSelection = prompt('Enter Your Choice:').toUpperCase();
    switch (playerSelection){
        case 'ROCK':
            switch (computerSelection){
                case 'ROCK':
                    console.log('Tie, try again');
                    roundOne();
                
                case 'PAPER':
                    console.log('Computer Wins');
                    break;

                case 'SCISSORS':
                    console.log('Player Wins');
                    break;
            
            }
            break;

        case 'PAPER':
            switch (computerSelection){
                case 'ROCK':
                    console.log('Player Wins');
                    roundOne();
                
                case 'PAPER':
                    console.log('Tie, try again');
                    break;

                case 'SCISSORS':
                    console.log('Computer Wins');
                    break;

            }
            break;

        case 'SCISSORS':
            switch (computerSelection){
                case 'ROCK':
                    console.log('Computer Wins');
                    roundOne();
                
                case 'PAPER':
                    console.log('Player Wins');
                    break;

                case 'SCISSORS':
                    console.log('Tie, try again');
                    break;

            }
            break;
            

        default:
            console.log('Invalid Input');
            roundOne();
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


