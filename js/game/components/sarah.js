function Sarah(x,y){
  this.x = x;
  this.y = y;
  this.w = 20;
  this.h = 20;
  this.dir = 1;
  this.circle1={radius:40, x: x, y: y};

  this.show = function(){
    fill(255,0,0);
    this.y += .3;
    var rand = random(0,100)
    if(rand < .5){
      this.dir = -this.dir;
    }
    if(this.x>=780 || this.x<=20){
      this.dir = -this.dir
    }

    this.x += 1.3*this.dir;

    ellipseMode(RADIUS);
    ellipse(this.x,this.y,this.w,this.h);
  }


}
