//Global Variables
var sarahs;
var kyle;
var hearts;
var onscreen = 0;


function setup(){
  noStroke();
  canvas = createCanvas(800,500)
  canvas.class('game')
  kyle = new Kyle(400,480)
  sarahs = []
  var rand = floor(random(100,700))
  sarahs.push(new Sarah(rand,-30))
  hearts = []
}

function draw(){
  background(69, 76, 107);
  //kyle
  kyle.show();
  //sarahs
  for(var i=0; i<sarahs.length; i++){
    if(sarahs[i].x > 830 || sarahs[i].x <-30 ||sarahs[i].y < -30){
      sarahs.splice(i,1)
    }
    sarahs[i].show();
  }
  if(frameCount%500==0){
    var rand = floor(random(100,700))
    sarahs.push(new Sarah(rand,-30))
  }
  //hearts
  for(var i=0; i<hearts.length; i++){
    hearts[i].show();
    if(hearts[i].y < -30){
      onscreen -=1;
      hearts.splice(i,1);
      console.log('HSHSH');
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
  if(keyCode === 32 && onscreen < 5){
    onscreen +=1
    hearts.push(new Heart(kyle.x, kyle.y-19))

  }
}
