let firstCard = 6
let secondCard = 15
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive =true
let message = ""

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")


function startGame() {
    sumEl.textContent= "sum: "+sum
    if (sum < 21) {
        message = "Do you want to draw a new card?"
    } else if(sum === 21) {
        message ="You've got Blackjack!"
        hasBlackJack = true
    } else  {
        isAlive = false
        message = "You're out of the game! "
    }
    messageEl.textContent = message;
}