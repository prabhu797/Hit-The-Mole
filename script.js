let a = 1;
let score = 0;
let hit = false;

let ran = 1;
let idInter = 0;

let img = document.getElementById("num" + ran).firstElementChild;
function lighting(speed) {
  idInter = setInterval(function() {
    console.log("Hello");
    img = document.getElementById("num" + ran).firstElementChild;
    img.src = 'Images/RealHole.png';
    do {
      newRan = Math.floor(Math.random() * 9) + 1;
    }while(ran == newRan);
    ran = newRan;
    hit = false;
    img = document.getElementById("num" + ran).firstElementChild;
    img.src = 'Images/Hole.png';
  }, speed);
}

function timeBro(speed) {
  lighting(speed);
  let timerId = setInterval(function timer() {
    document.getElementById("printtime").innerHTML = "Time : " + a + " sec";
    a++;
    speed = Number.parseInt(speed);
    /* Activate below code for max difficulty  */
    /*
    if (1 == (a % 10) && a != 1) {
      clearInterval(idInter);
      img = document.getElementById("num" + ran).firstElementChild;
      img.src = 'Images/RealHole.png';
      speed = speed - 110;
      console.log(speed);
      lighting(speed);
    }
    */
    /* Till here */

    if (a > 60) {
      clearInterval(idInter);
      img = document.getElementById("num" + ran).firstElementChild;
      img.src = 'Images/RealHole.png';
      ran = 1;
      a = 1;
      score = 0;
      c = 1;
      clearInterval(timerId);
    }
  }, 1000);
}

function clicked(num) {
  if (ran == num && hit == false) {
    img = document.getElementById("num" + ran).firstElementChild;
    img.src = 'Images/hit.png';
    score++;
    hit = true;
    document.getElementById("printmsg").innerHTML = "Score : " + score;
  }
}

let c = 1;
function startGame() {
  let dropdown = document.getElementById("difficulty");
  let speed = dropdown.value;
  if (c == 1) {
    c++;
    timeBro(speed);
    document.getElementById("printmsg").innerHTML = "Score : " + score;
    // lighting(speed);
  }
}


