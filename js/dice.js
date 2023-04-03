var randomNumber = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function rollDice(){
    document.querySelector(".dice-img-1").setAttribute("src", "images/dice" + randomNumber + ".png");
    document.querySelector(".dice-img-2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

    if(randomNumber > randomNumber2)
    {
        document.querySelector(".refresh-me-title").innerHTML = "Player 1 Wins";
    }
    else if(randomNumber2 > randomNumber)
    {
        document.querySelector(".refresh-me-title").innerHTML = "Player 2 Wins";
    }
    else{
        document.querySelector(".refresh-me-title").innerHTML = "It's a Tie";
    }
}

rollDice();