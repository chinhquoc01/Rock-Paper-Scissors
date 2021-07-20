let playerScore = 0;
let botScore = 0;
let imgframe = document.getElementById("frame1");
let w = imgframe.offsetWidth;
imgframe.offsetHeight = 100;
function botPlay(){
    let x = Math.floor(Math.random()*3);
    if(x == 0) return "rock";
    if(x == 1) return "paper";
    if(x == 2) return "scissors";
}
function playRound(playerSelection, botSelection){
    if(playerSelection == "rock"){
        if(botSelection=="rock") {
            return "Tie, Rock - Rock";
        }
        if(botSelection=="paper") {
            botScore++;
            return "You lose, Paper beats Rock";
        }
        if(botSelection=="scissors") {
            playerScore++;
            return "You win, Rock beats Scissors";
        }
    }

    if(playerSelection == "paper"){
        if(botSelection=="rock") {
            playerScore++;
            return "You win, Paper beats Rock";
        }
        if(botSelection=="paper") {
            return "Tie, Paper - Paper";
        }
        if(botSelection=="scissors") {
            botScore++;
            return "You lose, Scissors beats Paper";
        }
    }

    if(playerSelection == "scissors"){
        if(botSelection=="rock") {
            botScore++;
            return "You lose, Rock beats Scissors";
        }
        if(botSelection=="paper") {
            playerScore++;
            return "You win, Scissors beats Paper";
        }
        if(botSelection=="scissors") {
            return "Tie, Scissors - Scissors";
        }
    }
}
// while(1){
//     playerScore = 0
//     botScore = 0;
//     for(let i = 0; i < 5; i++){
//         let playerWeapon = prompt("Select your weapon");
//         console.log(playRound(playerWeapon, botPlay()));
//         console.log(`Player Score: ${playerScore} \nBot Score: ${botScore}`);
//     }
//     if(playerScore > botScore) console.log("Yayyy, you win!");
//     else if(playerScore < botScore) console.log("You lose :(( let's try again");
//     else console.log("Bot can't beat you, so do you");
//     break;
// }
// console.log(playRound("rock", botPlay()));

let button = document.getElementsByClassName("weapon");
let turn = 0;
function chooser(clicked){
    if(turn == 5) {
        turn = 0;
        playerScore = 0;
        botScore = 0; 
    }
    document.getElementById('message').innerHTML ='  ';
    // if(document.getElementById("scissors").clicked) {
    //     console.log("clicked");
    //     console.log(playRound("scissors", botPlay()));
    //     console.log(`Player Score: ${playerScore} \nBot Score: ${botScore}`);
    // }
    // if(document.getElementById("rock").clicked) {
    //     console.log(playRound("rock", botPlay()));
    //     console.log(`Player Score: ${playerScore} \nBot Score: ${botScore}`);
    // }
    // if(document.getElementById("paper").clicked) {
    //     console.log(playRound("paper", botPlay()));
    //     console.log(`Player Score: ${playerScore} \nBot Score: ${botScore}`);
    // }
    let botWeapon = botPlay();
    console.log(playRound(clicked, botWeapon));
    console.log(`Player Score: ${playerScore} \nBot Score: ${botScore}`);
    document.getElementById("playerScoreID").innerHTML=playerScore;
    document.getElementById("botScoreID").innerHTML=botScore;
    document.getElementById('playerWeapon').setAttribute('src',clicked+'.png');
    document.getElementById('botWeapon').setAttribute('src', botWeapon+'.png');
    turn++;
    if(turn == 5){
        if(playerScore > botScore) document.getElementById('message').innerHTML = "Yayyy, you win!";
        else if(playerScore < botScore) document.getElementById('message').innerHTML = "You lose :(( let's try again";
        else document.getElementById('message').innerHTML = "Bot can't beat you, so do you";
    }
}