'use strict';

function init() {
    const pickedNumber = Math.trunc(Math.random() * 20 + 1);
    document.querySelector(".current-score-value").textContent = 20;
    document.querySelector(".best-score-value").textContent = 0;
    document.querySelector(".picked-number").textContent = pickedNumber;

}


function gameLogic() {
    const guessNumber = Number(document.querySelector(".number-choice-item").value);
    if (!guessNumber) {
        document.querySelector(".message").textContent = "Enter the number from 1 to 20. Try AGAIN!";
        return;
    }

    const pickedNumber = Number(document.querySelector(".picked-number").textContent);
    let currentScore = Number(document.querySelector(".current-score-value").textContent);
    if (guessNumber == pickedNumber) {
        let bestScore = Number(document.querySelector(".best-score-value").textContent);
        if (currentScore > bestScore) {
            document.querySelector(".best-score-value").textContent = currentScore;
        }
        document.querySelector(".message").textContent = "You WIN!";
    } else {
        currentScore -= 1;
        document.querySelector(".current-score-value").textContent = currentScore;

        let msg = "";
        if (guessNumber > pickedNumber) {
            msg = "Guessed number is bigger than picked one!"
        } else {
            msg = "Guessed number is less than picked one!"
        }

        if (currentScore == 0) {
            document.querySelector(".message").textContent = msg + " " + "You LOOSE!";
        } else {
            document.querySelector(".message").textContent = msg + " " + "Try AGAIN!";
        }
    }

}

function reloadPage() {
    init();
    document.querySelector(".btn-number-choice-item").addEventListener("click", gameLogic);
    document.querySelector(".btn-game-reset").addEventListener("click", init);
}

reloadPage();
