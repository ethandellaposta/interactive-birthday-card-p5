function Notes(x,y) {
  this.x = x;
  this.y = y;
  this.w = 20;
  this.h = 20;
  this.body= Bodies.circle(x,y,20);


  this.draw = function(){
    fill(0);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.w,this.h);
  }
}