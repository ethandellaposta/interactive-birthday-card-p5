function Sarah(x,y){
  this.x = x;
  this.y = y;
  this.w = 20;
  this.h = 20;
  this.dir = 1;

  this.show = function(){
    fill(255,0,0);
    this.y += .25;
    if(this.x>=780 || this.x<=20){
      this.dir = -this.dir
    }

    this.x += 1.25*this.dir;

    ellipseMode(RADIUS);
    ellipse(this.x,this.y,this.w,this.h);
  }
}
