//Global Variables
var sarahs;
var kyle;
var hearts;
var highscore;
var kissing;
var pic2;
var pic;


function setup(){
  pic = loadImage('js/game/img/kyle-normal.png');
  pic2 = loadImage('js/game/img/kyle-kissing.png');
  kissing=10;
  noStroke();
  canvas = createCanvas(800,500);
  canvas.class('game');
  canvas.position(100,100);
  kyle = new Kyle(400,450);
  sarahs = [];
  var rand = floor(random(100,700));
  sarahs.push(new Sarah(rand,-30));
  hearts = []
}

function draw(){
  background(255,255,255);

  if(kyle.health <= 0) {
    textSize(50);
    fill(0, 0, 0);
    stroke(0);
    text("Game Over, Press Enter for a New Game", 220, 150, 450, 900);
    textSize(20);
    text("Score: " + kyle.score, 220, 400, 450, 900);
    if(kyle.score > highscore){
      highscore = kyle.score;
    }
    if(kyle.score >= 25000){
      fill(0, 0, 0);
      stroke(0);
      textSize(20);
      text("Secret code unlocked: 6391",220, 420, 450,900)
    }
    if (keyIsDown(13)) {

    keyPressed();
  }

  }
  else {
      //sarahs
      for (var i = sarahs.length - 1; i >= 0; i--) {
          sarahs[i].show();
          if (sarahs[i].x > 830 || sarahs[i].x < -30 || sarahs[i].y > 530) {
              sarahs.splice(i, 1)
          }
          if (collision(sarahs[i])) {
              sarahs.splice(i, 1);
          }
      }
      if (frameCount % 15 === 0) {
          var r = floor(random(1, 3));
          if (r === 1) {
              var rand = floor(random(100, 700));
              sarahs.push(new Sarah(rand, -30));
          }
      }
      //ground
      fill(200);
      if (isEnemyTouching()) {
          fill(255, 0, 0);
          kyle.health -= 20
      }

      rect(0, 450, 800, 50);
      //kyle
      if (kissing <= 10) {
          kyle.img = pic2;
          kissing++;
      }
      else {
          kyle.img = pic;
      }
      kyle.show();
      textSize(20);
      fill(255, 255, 255);
      text("Health: " + kyle.health, 20, 463, 150, 500);
      text("Score: " + kyle.score, 670, 463, 800, 500);
      //hearts
      for (var j = 0; j < hearts.length; j++) {
          hearts[j].show();
          if (hearts[j].y < -30) {
              hearts.splice(j, 1);
          }
      }

      //move
      if (kyle.x >= 30) {
          if (keyIsDown(LEFT_ARROW)) {
              kyle.x -= 10;
          }
      }
      if (kyle.x <= 770) {
          if (keyIsDown(RIGHT_ARROW)) {
              kyle.x += 10;
          }
      }
  }
}


function keyPressed(){
  if(keyCode === 32 && hearts.length<5){
    hearts.push(new Heart(kyle.x-5, kyle.y-19));
    kissing = 0;
  }
  if(keyCode === 13 && kyle.health <=0){
    kyle.health = 100;
    kyle.score = 0;
    sarahs=[];
    hearts=[];
  }
}

function isEnemyTouching(){
  for(var x=sarahs.length-1; x>=0; x--){
    if(sarahs[x].y >= 433){
      sarahs.splice(x,1);
      return true

    }
  }
  return false;
}



function collision(sarah){
  for(var x=0; x<hearts.length; x++){
    heart = hearts[x];
    var dx = Math.abs(heart.circle1.x - sarah.circle1.x);
    var dy = Math.abs(heart.circle1.y - sarah.circle1.y);
    var d = Math.sqrt(dx*dx + dy*dy);
    if(d<30){
      hearts.splice(x,1);
      var rand = floor(random(100, 700));
      sarahs.push(new Sarah(rand, -30));
      kyle.score +=100;
      return true;
    }
  }
}



