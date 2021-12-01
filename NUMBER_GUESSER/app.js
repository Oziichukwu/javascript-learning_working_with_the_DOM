
let min = 1, 
    max = 10,
    winningNum = 2,
    guessesLeft = 3;

const game = document.querySelector('#game'),
        minNum = document.querySelector('.min-num'),
        maxNum = document.querySelector('.max-num'),
        guessBtn = document.querySelector('#guess-btn'),
        guessInput = document.querySelector('#guess-input'), 
        message = document.querySelector('.message') ;   

minNum.textContent = min;
maxNum.textContent = max;     


guessBtn.addEventListener('click', function(){

    let guess = parseInt(guessInput.value);

    //validate input

    if(isNaN(guess) || guess < min || guess > max){
            setMessage(`Please Enter a Number Between ${min} and ${max}`, 'red');
    }

    // check if won
    if(guess === winningNum){

        gameOver(true, `${winningNum} is correct, YOU WIN`);

    }else {
        //wRONG NUMBER
        guessesLeft -= 1;
        if(guessesLeft === 0){

            // game over - you lose

                gameOver(false,`Game Over, YOU LOSE. The correct number was ${winningNum}`)
               
        }else{
                // game continue 

                guessInput.style.borderColor = 'red';

                guessInput.value = '';

                setMessage(`${guess} is Incorrect, ${guessesLeft} guessess left`, 'red');
        }
    }
});

function gameOver(won, msg) {

    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
        
    // change border color

    guessInput.style.borderColor = color;

    // set setMessage

    setMessage(msg, color);
}


function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}