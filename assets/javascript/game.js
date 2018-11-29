// global variables
//____________________________________________________________________________
// game counter
var Wins = 0;
var Losses = 0;
var totalScore = 0;
var StartNum = "";

// functions
//____________________________________________________________________________

var randomStartNum = Math.floor(Math.random() * 102) +19;

StartNum = randomStartNum;

$("#startnum").html(StartNum);

console.log();
// main process
//____________________________________________________________________________

