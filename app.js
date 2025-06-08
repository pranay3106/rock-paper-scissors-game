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
//
let slvl;
let lvltemp=document.querySelector(".choose-level")
let clvl=document.querySelector(".game-head3");
let head=document.querySelector(".game-head2");
document.body.backgroundColor=" #dadbdd ";
let alertTex=document.querySelector("#custom-alert");


function checklvl(){
    selectedLevel=slvl;
    // Save it in a variable
    console.log("Selected Level:", selectedLevel);
    if (selectedLevel === "lvl1") {
        console.log("You selected Easy");
        // limit = 3;
        // rounds=3;
        Currlvl(3);
        loop();
    } else if (selectedLevel === "lvl2") {
        console.log("You selected Medium");
        // limit = 2;
        // rounds=2;
        Currlvl(2);
        loop();
    } else if (selectedLevel === "lvl3") {
        console.log("You selected Hard");
        // limit = 1;
        // rounds=1;
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
    // rounds=el;
    currlim3=el;
    currlim2=el;
    currlim1=el;
}


// start button here 
let btnss=document.querySelectorAll(".start-lvl");
for(btn of btnss){
    btn.addEventListener("click",function(event){
        console.log("clicked");
        if( gameStarted == false){
            gameStarted = true;
            // console.log("game was started");
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
        spin.style.backgroundColor="rgb(213, 4, 245)";// first setting the color
        spinnner();//then calling the spiner function to execute
        RandomColor();//generate random num,then color is selected on loop()function
        removetemplate();//removes select lvl inteface;
        checklvl()
        //cant add more id like we do in class, event a single space is counted in the id 
        }if(event.target.id ==="start-btn3"){
        console.log(slvl="lvl3");
        console.log("your lvl is :",slvl);
        spinnner();
        RandomColor();
        removetemplate()
        checklvl()
}
// Rounds=limit;

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
// Rounds=limit;
// Rounds.innerHTML=`Round : ${Rounds}`;

}

let startBtn = document.querySelector(".start-btn");
// startBtn.addEventListener("click", function(event) {
//     if( gameStarted == false){
//         gameStarted = true;
//         // console.log("game was started");
//     }

//     }

    
// });

// compChance();

//initaile the value according to the lvl
function loop() {
    
    for (let lvls of lvl) {
        if(slvl=="lvl1"){  // to remove the small div in the easy lvl
             lvls.style.visibility="hidden";
        }
        lvls.style.color = "white";
        lvls.innerText = `${limit}`;
        //if reset=0 gives deafault color of game ;
        if(reset1==1){
            BgColor("blue");
        }
        if(reset1==2){
            BgColor("red");
            
        }if(reset1==3){
            BgColor("green");
        }
    //     // BgColor(blue);
    }
}

function BgColor(bgcolor){
    // Reset level UI
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
     
      //
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
    //
    console.log("computer move = ", compMove);
}

function compChance_lvl3(){
    let num = Math.floor(Math.random()*gameArr.length);
    compMove = gameArr[num];
    console.log("computer move = ", compMove); 
      //
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





//var declaration for frunther use it 
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
            // gameRestart.style.visibility="visible";
            if(userScore > compScore){
                setTimeout(()=>{
                // gameRestart.prepend(h1);
                h1.style.visibility="visible";
                h1.insertAdjacentElement("afterbegin",gameRestart); 
                gameRestart.innerHTML = `
                <h2 style="color: purple; font-size: 2rem; margin-bottom: 15px;">Game Over</h2>
                <p style="color:green;">Congraulations! you won the game. </br>Your score was ${userScore}</p>`;
                gameRestart.style.visibility = "visible";
                PlayAgain();
                
                

 ///             

            
              
                },1500)
                if(slvl!="lvl3"){
                    playSound("soundWin");
                }else{
                    playSound("soundHard");
                }
                // reset();
                
                
            }
            else if(userScore == compScore){
                setTimeout(()=>{
                    h1.insertAdjacentElement("beforebegin",gameRestart);
                    gameRestart.innerHTML = `
                    <h2 style="color: purple; font-size: 2rem; margin-bottom: 15px;">Game Over</h2>
                    <p style="color:black;">OOPS! It's was Draw. </br>Try Again</p>`;
                    // gameRestart.appendChild(startBtn);
                    // startBtn.innerText = "Play Again";
                    gameRestart.style.visibility="visible";
                    PlayAgain();
                },1500)
            //    reset();
                
                
                
            }
            else{
                setTimeout(()=>{
                    h1.insertAdjacentElement("beforebegin",gameRestart);
                    gameRestart.innerHTML = `
                    <h2 style="color: purple; font-size: 2rem; margin-bottom: 15px;">Game Over</h2>
                    <p style="color:red;">Bad Luck! Computer won the game. </br>Computer score was ${compScore}</p>`;
                    // gameRestart.appendChild(startBtn);
                    // startBtn.innerText = "Play Again";
                    gameRestart.style.visibility="visible";
                    PlayAgain();
                },1500)
                playSound("soundLose");
                // reset();
                
            
                
            }
        }
        
        
    })
}

function PlayAgain(){
                   // Create the Play Again button and style it
                   const playAgainButton = document.createElement("button");
                   playAgainButton.innerText = "Play Again";
                   playAgainButton.style.marginTop = "20px"; // Space above button
                   playAgainButton.style.fontSize = "1.1rem";
                   playAgainButton.style.padding = "10px 20px";
                   playAgainButton.style.borderRadius = "8px";
                   playAgainButton.style.color = "white";
                   playAgainButton.style.backgroundColor = "blue";
                   playAgainButton.style.cursor = "pointer";
                   playAgainButton.className = "play-again-btn";
                     // Append the button inside the gameRestart container
                gameRestart.appendChild(playAgainButton);
               
                   // Add event listener for restarting the game
                   // kaam ki chizz
                   playAgainButton.addEventListener("click", () => {
                       location.reload(); // Reloads the game
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
        //    console.log("tie");
           gameBeat.innerHTML = `<span style="color:orange;">it's a tie.</span> Pick your move again`;
           drawColor();
           roundLeft();
           compChance();
        }
        else if(userScissor && compMove == "paper") {
        //    console.log("scissor beats paper");
           gameBeat.innerHTML = `<span style="color:green;">scissor beats paper.</span> Pick your move again`;
           winColor();
           userscore();
           roundLeft();
           compChance();

        }
        else {
        //    console.log("rocks beats scissor");
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
        // console.log("paper");
        if(compMove == userPaper) {
            // console.log("tie");
            gameBeat.innerHTML = `<span style="color:orange;">it's a tie.</span> Pick your move again`;
            drawColor();
            roundLeft();
            compChance();
         }
         else if(userPaper && compMove == "rock") {
            // console.log("paper beats rock");
            gameBeat.innerHTML = `<span style="color:green;">paper beats rock.</span> Pick your move again`;
            winColor();
            userscore();
            roundLeft();
            compChance();

         }
         else {
            // console.log("scissor beats paper");
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
        // console.log("rock");
        if(compMove == userRock) {
            // console.log("tie");
            gameBeat.innerHTML = `<span style="color:orange;">it's a tie.</span> Pick your move again`;
            drawColor();
            roundLeft();
            compChance();
         }
         else if(userRock && compMove == "scissor") {
            // console.log("rock beats scissor");
            gameBeat.innerHTML = `<span style="color:green;">rock beats scissor.</span> Pick your move again`;
            winColor();
            userscore();
            roundLeft();
            compChance();
         
        }
        else {
            // console.log("paper beats rock");
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
    // console.log("Userscore is : ",userscore);
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
    // Reset game state
setTimeout(()=>{
    location.reload(); // Reload the webpage
},3000);

    gameStarted = false;


// \

//     userScore = 0;
//     compScore = 0;
//     rounds = 3;
//     selectedLevel = "lvl3"; // Default to hard or your initial level choice
//     limit = undefined; 
//     currlim1 = 3; 
//     currlim2 = 3; 
//     currlim3 = 3;
//     scissor_seq = 0;
//     paper_seq = 0;
//     rock_seq = 0;
//     gameArr = ["scissor", "paper", "rock"];
    


//     // Reset UI elements
//     Score.innerText = `Your Score = 0`;
//     computerScore.innerText =` Computer Score = 0`;
//     Rounds.innerText = `Round : ${rounds}`;
//     gameBeat.innerText = "Pick your move";
    
    
//     // Enable image buttons
//     for (let img of imgBtns) {
//         img.style.pointerEvents = "";  // Re-enable pointer events
//         img.style.opacity = 0;        // Reset opacity
//     }
    
//     // Reattach decrement handlers
//     img1.addEventListener("click", decrement1);
// img2.addEventListener("click", decrement2);
// img3.addEventListener("click", decrement3);
//     console.log("Game has been reset");
}





// to Update set limit during gameplay

img1.addEventListener("click", decrement1);
img2.addEventListener("click", decrement2);
img3.addEventListener("click", decrement3);
// Decrement logic when button clicked
function decrement1() {
    if (currlim1> 0) {
        //we declare neew var of curr limit which tracks the limit  
        currlim1--; 
        lvl1.innerHTML = `${currlim1}`; // Update the ui display if small div 
        console.log(`Updated limit: ${currlim1}`);
        // Check if the limit has reached 0
        if (currlim1 === 0) {
            // Disable further moves for this level
            console.log("No moves left for this level.");
            lvl1.style.color = "black";
            lvl1.style.backgroundColor = "grey";
            img1.removeEventListener("click", decrement1); // Stop further click events
            this.style.pointerEvents = "none";  // Disable further clicks on this button
            this.style.opacity = 0.5;  // Make image gray show it's disabled.
            if(slvl!="lvl1"){
                showCustomAlert("Scissor");
            } 
            Fun();
            
            // disableMoves();
        }
    }
}

function decrement2() {
    if (currlim2 > 0) {
        currlim2--;
        lvl2.innerHTML = `${currlim2}`; // Update the UI display
        console.log(`Updated limit: ${currlim2}`);

        // Check if the limit has reached 0
        if (currlim2 === 0) {
            // Disable further moves for this level
            console.log("No moves left for this level.");
            lvl2.style.color = "black";
            lvl2.style.backgroundColor = "grey";
            img2.removeEventListener("click", decrement2); // Stop further click events
            this.style.pointerEvents = "none";  // Disable further clicks on this button
            this.style.opacity = 0.5;  // Make image gray out to show it's disabled.
            if(slvl!="lvl1"){
            showCustomAlert("Paper");
        }Fun();
            // disableMoveImages();
        }
    }
}


function decrement3() {
    
    // if(limit==3){
    // currlim1=3;
    // limit--;
    // }
    if (currlim3 > 0) {

        currlim3--; // Decrease the limit by 1
        lvl3.innerHTML = `${currlim3}`; // Update the UI display
        console.log(`Updated limit: ${currlim3}`);

        // Check if the limit has reached 0
        if (currlim3 === 0) {
            // Disable further moves for this level
            console.log("No moves left for this level.");
            lvl3.style.color = "black";
            lvl3.style.backgroundColor = "grey";
            img3.removeEventListener("click", decrement3); // Stop further click events
            this.style.pointerEvents = "none";  // Disable further clicks on this button
            this.style.opacity = 0.5;  // Make image gray out to show it's disabled.
            if(slvl!="lvl1"){
            showCustomAlert("Rock");
            }
            Fun();
            // disableMoveImages();
        }
    }
}



function Fun(){
    if(slvl=="lvl1"){
        if(rounds == 0){
            if(userScore > compScore){
                // playSound("btnSound"); // drop coin songggs
                // playSound("soundLose");
                showCustomAlert("fuck U!!,Challenge medium mode!!");
            }if(userScore < compScore){
                showCustomAlert("Learn how to play rock paper scissor");
            }
        }
    }
}
//sounf effect functions 
function playSound(soundId) {
    const sound = document.getElementById(soundId);
    sound.currentTime = 0; // Reset playback
    sound.play();
  }

  

// Function to disable moves when the limit is reached


// function disableMoveImages() {
//     const moveImages = document.querySelector(".img1"); // Select all move images
//     moveImages.classList.add("disabled-move-image"); // Add the CSS class for the overlay

// }



// Function to show the custom alert
function showCustomAlert(messageId) {
    const alertBox = document.getElementById("custom-alert");
    const alertId = document.getElementById("alert-id");

    // Set the dynamic message ID
    alertId.textContent = messageId;

    // Show the alert with animation
    alertBox.classList.add("show");

    // Hide it automatically after 3 seconds
    setTimeout(() => {
        hideCustomAlert();
    }, 3000);
}

// Function to hide the custom alert smoothly
function hideCustomAlert() {
    const alertBox = document.getElementById("custom-alert");

    // Start the fade-out effect
    alertBox.classList.remove("show");
}


// for (let lvls of lvl) {
//     lvls.style.color = "white";
//     lvls.style.backgroundColor = "blue";
//     lvls.innerText = `${limit}`;
// }





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
