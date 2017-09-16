//Global Variables
var sarahs;
var kyle;
var hearts;


function setup(){
  noStroke();
  canvas = createCanvas(800,500)
  canvas.class('game')
  canvas.position(100,100)
  kyle = new Kyle(400,473)
  sarahs = []
  var rand = floor(random(100,700))
  sarahs.push(new Sarah(rand,-30))
  hearts = []
}

function draw(){
  background(255,255,255);
  console.log(hearts.length)

  //sarahs
  for(var i=sarahs.length-1; i>=0; i--){
    sarahs[i].show();
    if(sarahs[i].x > 830 || sarahs[i].x <-30 ||sarahs[i].y > 530){
      sarahs.splice(i,1)
    }
    if(collision(sarahs[i])){
      sarahs.splice(i,1);
    }
  }
  if(frameCount%15==0){
    var r = floor(random(1,7));
    if(r == 1) {
        var rand = floor(random(100, 700))
        sarahs.push(new Sarah(rand, -30))
    }
  }
  //ground
  fill(200)
  if(isEnemyTouching()){
    fill(255,0,0)
    kyle.health -=20
  }

  rect(0,450,800,50)
  //kyle
  kyle.show();
  textSize(20);
  fill(255,255,255)
  text("Health: "+kyle.health,20,463,150,500)
  text("Score: "+kyle.score,670,463,800,500)
  //hearts
  for(var i=0; i<hearts.length; i++){
    hearts[i].show();
    if(hearts[i].y < -30){
      hearts.splice(i,1);
    }
  }

  //move
  if(kyle.x >=30){
    if(keyIsDown(LEFT_ARROW)){
      kyle.x -= 10;
    }
  }
  if(kyle.x <=770){
    if(keyIsDown(RIGHT_ARROW)){
      kyle.x += 10;
    }
  }
}
function keyPressed(){
  if(keyCode === 32 && hearts.length<5){
    hearts.push(new Heart(kyle.x-5, kyle.y-19))
  }
}

function isEnemyTouching(){
  for(var x=sarahs.length-1; x>=0; x--){
    if(sarahs[x].y >= 433){
      sarahs.splice(x,1)
      return true

    }
  }
  return false;
}



function collision(sarah){
  for(let x=0; x<hearts.length; x++){
    heart = hearts[x];
    var dx = Math.abs(heart.circle1.x - sarah.circle1.x);
    var dy = Math.abs(heart.circle1.y - sarah.circle1.y);
    var d = Math.sqrt(dx*dx + dy*dy);
    if(d<30){
      hearts.splice(x,1);
      return true;
    }
  }
}
