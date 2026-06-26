// let choseTime = prompt("Enter your second you want to play..");

let timer = 2;
let score = 0;
let rnHit = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreVal").innerText = score;
}

function getRandHit(){
    rnHit = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").innerText = rnHit;
}

function makeBubble(){
let clutter = "";

for(let i = 0; i<=229; i++){
    let rand = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rand}</div>`;
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    let timerInt = setInterval( ()=>{
        if(timer > 0){
            timer --;
            document.querySelector("#timerVal").innerText = timer;
        }else{
            clearInterval(timerInt);
            document.querySelector("#pbtm").innerHTML = `<h1><div style="color:red; text: center;display:flex;  justify-content: center;"/>Game Over!</div> <br> Your Score is : ${score}</h1>`;
        }

    },1000);
}

document.querySelector("#pbtm")
.addEventListener("click",function(dets){
  let clickedNum = Number(dets.target.textContent);

  if(clickedNum === rnHit){
    increaseScore();
    getRandHit();
    makeBubble();
  }
   
});


runTimer();
makeBubble();
getRandHit();
