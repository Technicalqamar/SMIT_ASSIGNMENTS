

var colors = ["red","blue","green","yellow","orange","purple","aqua","brown","pink","gray"];

var targetDiv = document.getElementById("target");
var boardDiv = document.getElementById("board");
var scoreDiv = document.getElementById("score");
var wrongDiv = document.getElementById("wrong");

var score = 0;
var wrongClicks = 0;
var targetColor = "";

scoreDiv.innerText = score;
wrongDiv.innerText = wrongClicks;

function randomColor(){
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function handleClick(event){

    var clickedColor = event.target.style.backgroundColor;

    if(clickedColor === targetColor){
        score++;
    } else {
        wrongClicks++;
        wrongDiv.innerText = wrongClicks; 
    }

    
    if(wrongClicks === 3){
        alert("Game Over❗ You Click 3 wrong Circles❌😑");

        score = 0;
        wrongClicks = 0;

        scoreDiv.innerText = score;
        wrongDiv.innerText = wrongClicks;

        setupGame();
        return;
    }

    scoreDiv.innerText = score;
    setupGame();
}

function setupGame(){

    boardDiv.innerHTML = "";

    targetColor = randomColor();
    targetDiv.style.backgroundColor = targetColor;

    var correctIndex = Math.floor(Math.random() * 15);

    for (var i = 0; i < 15; i++){

        var divElm = document.createElement("div");
        divElm.className = "s_circles";

        if(i === correctIndex){
            divElm.style.backgroundColor = targetColor;
        } else {
            divElm.style.backgroundColor = randomColor();
        }

        divElm.addEventListener("click", handleClick);

        boardDiv.appendChild(divElm);
    }
}

setupGame();