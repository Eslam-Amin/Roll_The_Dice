function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

function changeDice() {
    const randomNumber1 = getRandomNumber();
    document.getElementById("player1Dice").src = "images/dice" + randomNumber1 + ".png"
    diceForPlayer1 = document.getElementsByClassName("img1")
    const randomNumber2 = getRandomNumber();
    document.getElementById("player2Dice").src = "images/dice" + randomNumber2 + ".png"
    diceForPlayer1 = document.getElementsByClassName("img2");
    whoIsTheWinner(randomNumber1, randomNumber2);
}

function whoIsTheWinner(player1, player2) {
    console.log("a7a");
    if (player1 > player2) {
        document.getElementById("h1").textContent = "🚩 Player 1 Wins";

    }
    else if (player2 > player1) {
        document.getElementById("h1").textContent = "Player 2 Wins 🚩";
    }
    else {
        document.getElementsByTagName("h1")[0].textContent = "Draw!!";
    }
}

function refresh() {
    changeDice();
}
