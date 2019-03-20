var crystals = {
    blue: {
        name: "blue",
        value: 0
    },
    red: {
        name: "red",
        value: 0
    },
    green: {
        name: "green",
        value: 0
    },
    yellow: {
        name: "yellow",
        value: 0
    }
};

var playerScore = 0;
var targetScore = 0;
var winCount = 0;
var lossCount = 0;



var randomNumberGenerator = function(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}

var appendVal = function (crystals) {
    playerScore = playerScore + crystals.value;

    $("#playerScore").html(playerScore);

    playerWin();
}

var gameStart = function() {
    playerScore = 0;
    targetScore = randomNumberGenerator(19, 120);
    
    crystals.blue.value = randomNumberGenerator(1, 12);
    crystals.red.value = randomNumberGenerator(1, 12);
    crystals.green.value = randomNumberGenerator(1, 12);
    crystals.yellow.value = randomNumberGenerator(1, 12);

    $("#playerScore").html(playerScore);
    $("#targetScore").html(targetScore);
}

var playerWin = function() {
    if (playerScore == targetScore) {
        winCount++
        $("#textWinOrLoss").html("You win");
        $("#win-counter").html("Wins: " + winCount);
        gameStart();
    } else if (playerScore > targetScore) {
        lossCount++
        $("#textWinOrLoss").html("You lose");
        $("#loss-counter").html("Losses: " + lossCount);
        gameStart();
    }
}

gameStart();

$("#bluecrystal").click(function() {
    appendVal(crystals.blue);
});
$("#redcrystal").click(function() {
    appendVal(crystals.red);
});
$("#greencrystal").click(function() {
    appendVal(crystals.green);
});
$("#yellowcrystal").click(function() {
    appendVal(crystals.yellow);
});
















