function Heart(x,y){
  this.x = x;
  this.y = y;
  this.w = 15;
  this.h = 15;
  this.img = loadImage('js/game/img/heart.png');
  this.circle1= {radius: 20, x: x, y: y};

  this.show = function(){
    ellipseMode(RADIUS);
    this.y-=5;
    this.circle1.y-=5;
    image(this.img,this.x,this.y,this.w,this.h);
  }
}
