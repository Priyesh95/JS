const form = document.querySelector('form');
let userInput = document.querySelector('#guessField');
const lowHigh = document.querySelector('.lowOrHi');
const prevGuessElement = document.querySelector('.guesses')
const guessField = document.querySelector('#guessField');
const remaining = document.querySelector(".lastResult")
const startOver = document.querySelector('.resultParas')

let randomNumber = parseInt(Math.random() * 100 + 1);
let numGuess = 1;
let prevGuess = [];

const p = document.createElement('p');

form.addEventListener('submit',(e) => {
    console.log(randomNumber);
    
    e.preventDefault();
    const userInputValue = parseInt(userInput.value);
    console.log(userInputValue)
    ValidateGuess(userInputValue);
});

function ValidateGuess(userInputValue){
    if(userInputValue < 1 || userInputValue > 100 || isNaN(userInputValue)){
        alert("Please input correct number");
    }
    else{
        displayGuess(userInputValue);
        checkGuess(userInputValue);
    }
}

function displayGuess(userInputValue){
    if(numGuess == 11){
        lowHigh.innerHTML = `Game Over. Random number was ${randomNumber}`;
        endGame();
    }
    prevGuess.push(userInputValue);
    prevGuessElement.innerHTML = prevGuess;
    numGuess += 1;
    remaining.innerHTML = `${11 - numGuess}`;
    userInput.value = '';

    
}

function checkGuess(userInputValue){
    if(userInputValue == randomNumber){
        lowHigh.innerHTML = `You guessed it right`;
        endGame();

    }
    else if(userInputValue > randomNumber){
        lowHigh.innerHTML = `Your value is too high`;   
    }
    else{
        lowHigh.innerHTML = `Your value is too low`;   
    }

}

function endGame(){
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame(){
    const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    userInput.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess} `;
    prevGuessElement.innerHTML = prevGuess; 
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
  });
}
