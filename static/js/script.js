function rpsGame(yourChoice) {
    console.log(yourChoice);
    let humanChoice, botChoice;
    humanChoice =yourChoice.id;
    botChoice = numberToChoice(randomToRpsInt());
    //alert(botChoice);
    console.log('computer choice: ' , botChoice);

    results = decideWinner(humanChoice, botChoice);   // [0, 1] human lost | bot won
    console.log(results);
    message = finalMessage(results);
    console.log(message)
   // rpsFrontEnd(yourChoice.id, botChoice, message);
}

function randomToRpsInt() {
    return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
    return ['rock', 'paper', 'scissors'][number]
}

function decideWinner(yourChoice, computerChoice,) {
    let rpsDatabase = {
        'rock':{'scissors': 1, 'paper':0, 'rock':0.5},
        'paper':{'rock':1, 'paper':0.5, 'scissors':0},
        'scissors':{'rock':0, 'paper':1, 'scissors':0.5},
    }

    let yourScore = rpsDatabase[yourChoice][computerChoice]
    let computerScore = rpsDatabase[computerChoice][yourChoice];

    return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
    if (yourScore === 0) {
        return {'message': 'You lost!', 'color': 'red'};

    } else if (yourScore === 0.5) {
        return {'message': 'You tied!', 'color': 'black'};

    }else {
        return {'message': 'You won!', 'color': 'green'};
    }
}


function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
    let imagesDatbase = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissors': document.getElementById('scissors').src,
    }

    document.getElementById('')
    //3:41
}