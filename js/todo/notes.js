function Notes(x,y,i) {
  this.x = x;
  this.y = y;
  this.w = 20;
  this.h = 20;
  this.body= Bodies.circle(x,y,20);
  this.index = i;
  switch(this.index){
    case 0:
      this.r=255;
      this.g=0;
      this.b=0;
      break;
    case 1:
      this.r=0;
      this.g=255;
      this.b=0;
      break;
    case 2:
      this.r=0;
      this.g=0;
      this.b=255;
      break;
    case 3:
      this.r=244;
      this.g=66;
      this.b=159;
      break;
    case 4:
      this.r=244;
      this.g=149;
      this.b=66;
      break;


  }


  this.draw = function(){
    fill(this.r,this.g,this.b);
    ellipseMode(RADIUS);
    ellipse(this.body.position.x,this.body.position.y,this.w,this.h);
  }
}