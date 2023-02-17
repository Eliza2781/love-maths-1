
document.addEventListener("DomContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
        if (this.getAttribute("data-type") === "submit") {
            alert("You clicked Submit!");
         } else {
            let gameType = this.getAttribute("data-type"); 
            alert(`You clicked ${gameType}`);

        }
    })

    }
})

/**
 * Tha main game "loop", called when the script is first loaded
 * and afetr the user's answer has been processed
 */
function runGame(){

    //Create two random numbers between 1 and 25
    let num1 = Math.floor(Math.random() *25) + 1;
    let num2 = Math.floor(Math.random() *25) + 1;


}



function checkAnswer(){


}


function calculateCorrectAnswer(){

}

function  incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion(){

}

function displayMultipleQuestion(){

}