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

function runGame() {

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