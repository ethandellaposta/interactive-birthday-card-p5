function Notes(x,y) {
  this.x = x;
  this.y = y;
  this.w = 20;
  this.h = 20;
  this.body= Bodies.circle(x,y,20);
  this.r = random(125);
  this.g = random(125);
  this.b = random(125);


  this.draw = function(){
    fill(this.r,this.g,this.b);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.w,this.h);
  }
}