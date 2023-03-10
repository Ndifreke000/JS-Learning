// GAME FUNCTION
// - Player must guess a number between min and max
// - Player gets a certain amount of guesses
// - Notify player of guesses remaining
// - Notify the player of the correct answer if loose
// - Let player choose to play again



// Game Values
let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3;


// UI Elements
const game = document.querySelector('#game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');


//Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;



// Listen for guess
guessBtn.addEventListener('click', function(){
    let guess = parseInt(guessInput.value);
    console.log(guess);



    // validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number betweeen ${min} and ${max}`, 'red');
    }



    // check if won
    if(guess === winningNum){

        //game over, won

        //disable inputs
        guessInput.readOnly = true;
        // change border color
        guessInput.style.borderColor = 'green';
        // setMessage
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
    } else {
        // wrong number
        guessesLeft -= 1;

        if(guessesLeft === 0){
            // game over - lost
        } else {

        }
    }

});






// set message
function setMessage(msg, color){
    // message.style.color = color;
    message.textContent = msg;
    message.style.color = color;
}