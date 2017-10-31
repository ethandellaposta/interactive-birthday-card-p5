function Notes(x,y) {
  this.x = x;
  this.y = y;
  this.w = 20;
  this.h = 20;
  this.body= Bodies.circle(x,y,20);
  this.r = random(125);
  this.g = random(125);
  this.b = random(125);
  this.msg = "";


  this.draw = function(){
    fill(this.r,this.g,this.b);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.w,this.h);
  }

  this.getColor = function(){
    return [this.r,this.g,this.b];
  }

  this.setMessage = function(message){
    this.msg = message;
  }
}