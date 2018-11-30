// global variables
//____________________________________________________________________________
// game counter
var wins = 0;
var losses = 0;
var totalScore = 0;
var StartNum = "";
var crystal1 = Math.floor(Math.random() * 10) +1;
var crystal2 = Math.floor(Math.random() * 10) +1;
var crystal3 = Math.floor(Math.random() * 10) +1;
var crystal4 = Math.floor(Math.random() * 10) +1;

// functions
//____________________________________________________________________________

var randomStartNum = Math.floor(Math.random() * 102) +19;

StartNum = randomStartNum;

function myFunction() {
    StartNum = Math.floor(Math.random() * 102) +19;
    $("#startnum").html(StartNum);
}

function Counter() {
    if (StartNum === totalScore) {
        wins++;
        $("#winCounter").html(wins);
        alert("You Win!")
        totalScore = 0;
        myFunction();
    } 
    else if (totalScore > StartNum) {
        losses++;
        $("#lossCounter").html(losses);
        alert("You Lose :(")
        totalScore = 0;
        myFunction();
    }
}



$(document).ready(function(){

    $("#startnum").html(StartNum);

    $("#crystal1").on("click", function() {
        totalScore += crystal1;
        $("#score").text(totalScore);
        Counter();
    });
    $("#crystal2").on("click", function() {
        totalScore += crystal2;
        $("#score").text(totalScore);
        console.log ("test)")
        Counter();
        
    });
    $("#crystal3").on("click", function() {
        totalScore += crystal3;
        $("#score").text(totalScore);
        Counter();
    });
    $("#crystal4").on("click", function() {
        totalScore += crystal4;
        $("#score").text(totalScore);
        Counter();
    });

    




});
// main process
//____________________________________________________________________________

