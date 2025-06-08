let gameStarted = false;
let userScore = 0;
let compScore = 0;
let compMove;
let selectedLevel;
let lvl = document.querySelectorAll(".lvl");
let rounds=3;
let scissor_seq=0;
let paper_seq=0;
let rock_seq=0;
let limit ;
let reset1;
let currlim3;
let currlim2;
let currlim1;
let gameArr = ["scissor","paper","rock"];
let Rounds = document.querySelector(".round-left");
let gameRestart = document.querySelector(".game-start");
let slvl;
let lvltemp=document.querySelector(".choose-level")
let clvl=document.querySelector(".game-head3");
let head=document.querySelector(".game-head2");
document.body.backgroundColor=" #dadbdd ";
let alertTex=document.querySelector("#custom-alert");


function checklvl(){
    selectedLevel=slvl;
    console.log("Selected Level:", selectedLevel);
    if (selectedLevel === "lvl1") {
        console.log("You selected Easy");
        Currlvl(3);
        loop();
    } else if (selectedLevel === "lvl2") {
        console.log("You selected Medium");
        Currlvl(2);
        loop();
    } else if (selectedLevel === "lvl3") {
        console.log("You selected Hard");
        Currlvl(1);
        loop();
    }
    head.style.fontSize="2.5rem";
    head.innerHTML=`<b>Scissor Paper &  Rock</b>`;
    Rounds.innerText = `Round : ${rounds}`;
    compChance();
}


function Currlvl(el){
    limit = el;
    currlim3=el;
    currlim2=el;
    currlim1=el;
}


let btnss=document.querySelectorAll(".start-lvl");
for(btn of btnss){
    btn.addEventListener("click",function(event){
        console.log("clicked");
        if( gameStarted == false){
            gameStarted = true;
        }
        if(event.target.id ==="start-btn1"){
        slvl="lvl1";
        console.log("your lvl is :",slvl);
        spin.style.backgroundColor="rgb(4, 157, 245)";
        spinnner();
        RandomColor();
        removetemplate()
        checklvl()
        
        }if(event.target.id ==="start-btn2"){
        slvl="lvl2";
        console.log("your lvl is :",slvl);
        spin.style.backgroundColor="rgb(213, 4, 245)";
        spinnner();
        RandomColor();
        removetemplate();
        checklvl()
        }if(event.target.id ==="start-btn3"){
        console.log(slvl="lvl3");
        console.log("your lvl is :",slvl);
        spinnner();
        RandomColor();
        removetemplate()
        checklvl()
}
});

}

let spin = document.querySelector(".spinner");
function spinnner(){
    document.body.style.visibility="hidden";
    setTimeout(()=>{
        spin.style.visibility="visible";

    },100)
    setTimeout(()=>{
        document.body.style.visibility="visible";
        spin.style.visibility="hidden";
    },1000)
}
function removetemplate(event) {
clvl.style.visibility="hidden";
lvltemp.style.visibility="hidden";
}

let startBtn = document.querySelector(".start-btn");

function loop() {
    
    for (let lvls of lvl) {
        if(slvl=="lvl1"){  
             lvls.style.visibility="hidden";
        }
        lvls.style.color = "white";
        lvls.innerText = `${limit}`;
        if(reset1==1){
            BgColor("blue");
        }
        if(reset1==2){
            BgColor("red");
            
        }if(reset1==3){
            BgColor("green");
        }
    }
}

function BgColor(bgcolor){
    reset1;
    for (let lvls of lvl) {
        lvls.style.backgroundColor = bgcolor;
    }
}

function RandomColor(){
    reset1=Math.floor(Math.random()*4);
    console.log("random value color is :",reset1)
}

function compChance() {

    if (selectedLevel === "lvl1") {
        compChance_lvl1();
    } 
    else if (selectedLevel === "lvl2") {
        compChance_lvl2();
    } else if (selectedLevel === "lvl3") {
        compChance_lvl3();
    }
}
    
function compChance_lvl1(){
    let num = Math.floor(Math.random()*3);
    compMove = gameArr[num];
    console.log(gameArr);
    console.log("computer move = ", compMove);
}


function DelMove(el){
    let idx = gameArr.indexOf(`${el}`);
    console.log(gameArr);
    gameArr.splice(idx,1);
    
    
}

function compChance_lvl2(){
    let num = Math.floor(Math.random()*gameArr.length);
    compMove = gameArr[num];
     
      if(compMove=="scissor"){
        scissor_seq++;
        if(scissor_seq==2){
            DelMove("scissor");
        }
    }else if(compMove=="paper"){
        paper_seq++;
        if(paper_seq==2){
            DelMove("paper");
        }
    }else if(compMove=="rock"){
        rock_seq++;
        if(rock_seq==2){
            DelMove("rock");
        }
    }
    console.log("computer move = ", compMove);
}

function compChance_lvl3(){
    let num = Math.floor(Math.random()*gameArr.length);
    compMove = gameArr[num];
    console.log("computer move = ", compMove); 
      if(compMove=="scissor"){
        scissor_seq++;
        if(scissor_seq==1)
            DelMove("scissor");
        
    }else if(compMove=="paper"){
        paper_seq++;
        if(paper_seq==1)
            DelMove("paper");
        
    }else if(compMove=="rock"){
        rock_seq++;
        if(rock_seq==1){
            DelMove("rock");
        }
    }
    
    limit--;
    
}

let gameBeat = document.querySelector(".game-text");
let Score = document.querySelector(".user-Score");
let computerScore = document.querySelector(".comp-Score");
let Winner = document.querySelector(".winner");
let body = document.querySelector("body");
let h1 = document.querySelector(".gameOver");

let imgBtns = document.querySelectorAll(".img");


for(imgBtn of imgBtns){
    imgBtn.addEventListener("click", function(event) {
        scissor(event);
        paper(event);
        rock(event);
        if(rounds == 0){
            if(userScore > compScore){
                setTimeout(()=>{
                h1.style.visibility="visible";
                h1.insertAdjacentElement("afterbegin",gameRestart); 
                gameRestart.innerHTML = `
                <h2 style="color: purple; font-size: 2rem; margin-bottom: 15px;">Game Over</h2>
                <p style="color:green;">Congraulations! you won the game. </br>Your score was ${userScore}</p>`;
                gameRestart.style.visibility = "visible";
                PlayAgain();
                },1500)
                if(slvl!="lvl3"){
                    playSound("soundWin");
                }else{
                    playSound("soundHard");
                }
            }
            else if(userScore == compScore){
                setTimeout(()=>{
                    h1.insertAdjacentElement("beforebegin",gameRestart);
                    gameRestart.innerHTML = `
                    <h2 style="color: purple; font-size: 2rem; margin-bottom: 15px;">Game Over</h2>
                    <p style="color:black;">OOPS! It's was Draw. </br>Try Again</p>`;
                    gameRestart.style.visibility="visible";
                    PlayAgain();
                },1500)
            }
            else{
                setTimeout(()=>{
                    h1.insertAdjacentElement("beforebegin",gameRestart);
                    gameRestart.innerHTML = `
                    <h2 style="color: purple; font-size: 2rem; margin-bottom: 15px;">Game Over</h2>
                    <p style="color:red;">Bad Luck! Computer won the game. </br>Computer score was ${compScore}</p>`;
                    gameRestart.style.visibility="visible";
                    PlayAgain();
                },1500)
                playSound("soundLose");
            }
        }
    })
}

function PlayAgain(){
                   const playAgainButton = document.createElement("button");
                   playAgainButton.innerText = "Play Again";
                   playAgainButton.style.marginTop = "20px";
                   playAgainButton.style.fontSize = "1.1rem";
                   playAgainButton.style.padding = "10px 20px";
                   playAgainButton.style.borderRadius = "8px";
                   playAgainButton.style.color = "white";
                   playAgainButton.style.backgroundColor = "blue";
                   playAgainButton.style.cursor = "pointer";
                   playAgainButton.className = "play-again-btn";
                gameRestart.appendChild(playAgainButton);
               
                   playAgainButton.addEventListener("click", () => {
                       location.reload();
                   });
                   setTimeout(()=>{
                    location.reload();
                   },7000);
}
let userScissor;
function scissor(event) {
    if(event.target.alt == "scissor") {
        userScissor = "scissor";
        if(compMove == userScissor) {
           gameBeat.innerHTML = `<span style="color:orange;">it's a tie.</span> Pick your move again`;
           drawColor();
           roundLeft();
           compChance();
        }
        else if(userScissor && compMove == "paper") {
           gameBeat.innerHTML = `<span style="color:green;">scissor beats paper.</span> Pick your move again`;
           winColor();
           userscore();
           roundLeft();
           compChance();

        }
        else {
           gameBeat.innerHTML = `<span style="color:red;">rocks beats scissor.</span> Pick your move again`;
           loseColor();
           compscore();
           roundLeft();
           compChance();
        }
   }
}

let userPaper;
function paper(event) {
    if(event.target.alt == "paper") {
        userPaper = "paper"
        if(compMove == userPaper) {
            gameBeat.innerHTML = `<span style="color:orange;">it's a tie.</span> Pick your move again`;
            drawColor();
            roundLeft();
            compChance();
         }
         else if(userPaper && compMove == "rock") {
            gameBeat.innerHTML = `<span style="color:green;">paper beats rock.</span> Pick your move again`;
            winColor();
            userscore();
            roundLeft();
            compChance();

         }
         else {
            gameBeat.innerHTML = `<span style="color:red;">scissor beats paper.</span> Pick your move again`;
            loseColor();
            compscore();
            roundLeft();
            compChance();
         }
    }
}

let userRock;
function rock(event) {
    if(event.target.alt == "rock") {
        userRock = "rock";
        if(compMove == userRock) {
            gameBeat.innerHTML = `<span style="color:orange;">it's a tie.</span> Pick your move again`;
            drawColor();
            roundLeft();
            compChance();
         }
         else if(userRock && compMove == "scissor") {
            gameBeat.innerHTML = `<span style="color:green;">rock beats scissor.</span> Pick your move again`;
            winColor();
            userscore();
            roundLeft();
            compChance();
        }
        else {
            gameBeat.innerHTML = `<span style="color:red;">paper beats rock.</span> Pick your move again`;
            loseColor();
            compscore();
            roundLeft();
            compChance();
         }
    }
}
function winColor() {
    body.style.backgroundColor = "blue";
    playWinSound()
    setTimeout(function(){
        body.style.backgroundColor = "white";
    },150)
}
function loseColor() {
    body.style.backgroundColor = "red";
    playlooseSound();
    setTimeout(function(){
        body.style.backgroundColor = "white";
    },150)
}
function drawColor() {
    playdrawSound();
    body.style.backgroundColor = "#f47c1b";
    setTimeout(function(){
        body.style.backgroundColor = "white";
    },150)
}
function roundLeft() {
    rounds--;
    Rounds.innerText = `Round : ${rounds}`;
}
function userscore() {
    userScore++;
    Score.innerText = `Your Score = ${userScore}`;
    console.log(`Your Score = ${userScore}`)
}
function compscore() {
    compScore++;
    computerScore.innerText = `Computer Score = ${compScore}`;
    console.log( `Computer Score = ${compScore}`);
}

let Imcont = document.querySelector(".img-container");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let lvl1=document.querySelector(".lvl1");
let lvl2=document.querySelector(".lvl2");
let lvl3=document.querySelector(".lvl3");

function reset() {
setTimeout(()=>{
    location.reload();
},3000);
    gameStarted = false;
}

img1.addEventListener("click", decrement1);
img2.addEventListener("click", decrement2);
img3.addEventListener("click", decrement3);
function decrement1() {
    if (currlim1> 0) {
        currlim1--; 
        lvl1.innerHTML = `${currlim1}`;
        console.log(`Updated limit: ${currlim1}`);
        if (currlim1 === 0) {
            console.log("No moves left for this level.");
            lvl1.style.color = "black";
            lvl1.style.backgroundColor = "grey";
            img1.removeEventListener("click", decrement1);
            this.style.pointerEvents = "none";
            this.style.opacity = 0.5;
            if(slvl!="lvl1"){
                showCustomAlert("Scissor");
            } 
            Fun();
        }
    }
}

function decrement2() {
    if (currlim2 > 0) {
        currlim2--;
        lvl2.innerHTML = `${currlim2}`;
        console.log(`Updated limit: ${currlim2}`);
        if (currlim2 === 0) {
            console.log("No moves left for this level.");
            lvl2.style.color = "black";
            lvl2.style.backgroundColor = "grey";
            img2.removeEventListener("click", decrement2);
            this.style.pointerEvents = "none";
            this.style.opacity = 0.5;
            if(slvl!="lvl1"){
            showCustomAlert("Paper");
        }Fun();
        }
    }
}

function decrement3() {
    if (currlim3 > 0) {
        currlim3--;
        lvl3.innerHTML = `${currlim3}`;
        console.log(`Updated limit: ${currlim3}`);
        if (currlim3 === 0) {
            console.log("No moves left for this level.");
            lvl3.style.color = "black";
            lvl3.style.backgroundColor = "grey";
            img3.removeEventListener("click", decrement3);
            this.style.pointerEvents = "none";
            this.style.opacity = 0.5;
            if(slvl!="lvl1"){
            showCustomAlert("Rock");
            }
            Fun();
        }
    }
}

function Fun(){
    if(slvl=="lvl1"){
        if(rounds == 0){
            if(userScore > compScore){
                showCustomAlert("Great job! Try medium mode for a bigger challenge!");
            }if(userScore < compScore){
                showCustomAlert("Keep practicing! You'll get better!");
            }
        }
    }
}
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0;
    sound.play();
  }

function showCustomAlert(messageId) {
    const alertBox = document.getElementById("custom-alert");
    const alertId = document.getElementById("alert-id");

    alertId.textContent = messageId;

    alertBox.classList.add("show");

    setTimeout(() => {
        hideCustomAlert();
    }, 3000);
}

function hideCustomAlert() {
    const alertBox = document.getElementById("custom-alert");
    alertBox.classList.remove("show");
}

const winSound = new Audio("win.wav");
function playWinSound() {
    winSound.play();
}
const looseSound = new Audio("loose.wav");
function playlooseSound() {
    looseSound.play();
}
const drawSound = new Audio("draw.wav");
function playdrawSound() {
    drawSound.play();
}