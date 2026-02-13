// var emojis = ["🍎","🍌","🍇","🍓","🍕","🍔","🍟","🍩","🍉","🥑"];
var emojis = ["😃","😎","👻","😍","🥰","😘","😡","🥶","👽","💀","🤪","🤭","😛","😴","🤑","😱","☠"];

var targetDiv = document.getElementById("target");
var boardDiv = document.getElementById("board");
var scoreDiv = document.getElementById("score");
var wrongDiv = document.getElementById("wrong");

var score = 0;
var wrongClicks = 0;
var targetEmoji = "";

scoreDiv.innerText = score;
wrongDiv.innerText = wrongClicks;

function randomEmoji(){
    var randomIndex = Math.floor(Math.random() * emojis.length);
    return emojis[randomIndex];
}

function handleClick(event){

    var clickedEmoji = event.target.innerText;

    if(clickedEmoji === targetEmoji){
        score++;
    } else {
        wrongClicks++;
        wrongDiv.innerText = wrongClicks;
    }

    if(wrongClicks === 3){
        alert("Game Over ❌ You clicked 3 wrong emojis!");

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

    targetEmoji = randomEmoji();
    targetDiv.innerText = targetEmoji;

    var correctIndex = Math.floor(Math.random() * 15);

    for (var i = 0; i < 15; i++){

        var divElm = document.createElement("div");
        divElm.className = "s_circles";

        if(i === correctIndex){
            divElm.innerText = targetEmoji;
        } else {

            var random;
            do {
                random = randomEmoji();
            } while(random === targetEmoji);

            divElm.innerText = random;
        }

        divElm.addEventListener("click", handleClick);

        boardDiv.appendChild(divElm);
    }
}

setupGame();
