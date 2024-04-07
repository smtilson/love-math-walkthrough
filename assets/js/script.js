// Wait for the page to load before running game
// Get button elements and add listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            let buttonType = this.getAttribute('data-type');
            if (buttonType == 'submit') {
                checkAnswer();
            } else {
                let gameType = buttonType;
                alert(`You clicked ${gameType}!`);
                runGame(gameType);
            }
        })
    }
    document.getElementById('answer-box').addEventListener('keydown', function (event) {
        if (event.key === "Enter") {
            checkAnswer();
        }
    })

    runGame('addition');
})

/**
 * The main game loop, called when script is first loaded
 * and when users answer has been processed.
 */
function runGame(gameType) {
    let answerBox = document.getElementById('answer-box');
    answerBox.value = '';
    answerBox.focus();

    // creates 2 random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else if (gameType === "subtract") {
        displaySubtractQuestion(num1, num2);
    } else if (gameType === "multiply") {
        displayMultiplyQuestion(num1, num2);
    } else if (gameType === "division") {
        alert(`${gameType} is not yet implemented.`);
        throw `${gameType} is not yet implemented. Aborting.`;
    } else {
        alert(`Unknown game type: ${gameType}.`);
        throw `Unknown game type: ${gameType}. Aborting.`;
    }
}

/**
 * Check the users answer against the first entry of the answer array
 * returned by calculateCorrectAnswer()
 */
function checkAnswer() {
    let userAnswer = parseInt(document.getElementById('answer-box').value);
    let calculatedAnswer = calculateCorrectAnswer();
    let isCorrect = userAnswer === calculatedAnswer[0];

    if (isCorrect) {
        alert('Hey! You got it right! :D');
        incrementScore();
    } else {
        alert(`Sorry, ${userAnswer} is incorrect. The correct answer is ${calculatedAnswer[0]}`);
        incrementWrongAnswer();
    }

    runGame(calculatedAnswer[1]);
}

/**
 * Gets the operands and operator from the DOM
 * and returns calculation
 */
function calculateCorrectAnswer() {
    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = document.getElementById('operator').innerText;

    if (operator === '+') {
        return [operand1 + operand2, "addition"];
    } else if (operator === '-') {
        return [operand1 - operand2, "subtract"];
    } else if (operator === 'x') {
        return [operand1 * operand2, "multiply"];
        /*} else if () {*/
    } else {
        alert(`unimplemented game type ${operator}`);
        throw `unimplemented game type ${operator}`;
    }
}

/**
 * retrieves score from DOM
 * increments score
 * then rewrites it to DOM
 */
function incrementScore() {
    let oldScore = parseInt(document.getElementById('score').innerText);
    document.getElementById('score').innerText = ++oldScore;
}

/**
 * retrieves incorrect from DOM
 * increments incorrect
 * then rewrites it to DOM
 */
function incrementWrongAnswer() {
    let oldIncorrect = parseInt(document.getElementById('incorrect').innerText);
    document.getElementById('incorrect').innerText = ++oldIncorrect;
}

function displayAdditionQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = '+';

}

/**
 * This is rewritten to avoid negative answers,
 * but it seemed to work fine with negatives
 */
function displaySubtractQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1 >= operand2 ? operand1 : operand2;
    document.getElementById('operand2').textContent = operand1 >= operand2 ? operand2 : operand1;
    document.getElementById('operator').textContent = '-';
}

function displayMultiplyQuestion(operand1, operand2) {
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = 'x';
}

function displayDivisionQuestion() {

}