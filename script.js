let timer = 60;
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

for(let i = 0; i<=206; i++){
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
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
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
