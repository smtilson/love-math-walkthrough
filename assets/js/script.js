// Wait for the page to load before running game
// Get button elements and add listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            let buttonType = this.getAttribute('data-type');
            if (buttonType == 'submit') {
                alert('You clicked Submit!');
            } else {
                let gameType = buttonType;
                alert(`You clicked ${gameType}!`);
                S
            }
        })
    }
})

/**
 * The main game loop, called when script is first loaded
 * and when users answer has been processed.
 */
function runGame() {
    // creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random()*25)+1;
    let num2 = Math.floor(Math.random()*25)+1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplyQuestion() {

}

function displayDivisionQuestion() {

}