
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
               if (this.getAttribute("data-type") === "submit") {
            alert("You clicked Submit!");
         } else {
            let gameType = this.getAttribute("data-type"); 
            runGame(gameType);
            
        }
    })

    }

    runGame("addition");
})

/**
 * Tha main game "loop", called when the script is first loaded
 * and afetr the user's answer has been processed
 */
function runGame(gameType) {

    //Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;

    if (gameType === "addition") {
        displayAdditionQuestion(num1, num2);
    } else {
        alert(`Unknown game type: ${gameType}` );
        throw  `Unkown game type: ${gameType}. Aborting!`;
    }
}



function checkAnswer() {


}
/**
 * Get the operands (the numbers) and the operator (plus, minus etc)
 * directly from the dom, and return the corect answer.
 */

function calculateCorrectAnswer() {

    let operand1 =parseInt(document.getElementById('operand1').innertext);
    let operand2 =parseInt(document.getElementById('operand2').innertext);
    let operator = document.getElementById("operator").innertext;

    if (operator === "+") {
        return operand1 + operand2, ["addition"];
    } else {
        alert(`Unimplemented operator ${operator}`);
        throw `Unimpleneted operator ${operator}.Aborting!;
    }


}

function  incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(operand1, operand2) {
    
    document.getElementById('operand1').textContent = operand1;
    document.getElementById("operand2").textContent = operand2;
    document.getElementById("operator").textContent = "+";

}

function displaySubtractQuestion() {

}

function displayMultipleQuestion() {

}