function Heart(x,y){
  this.x = x;
  this.y = y;
  this.w = 10;
  this.h = 10;
  this.img = loadImage('js/game/img/heart.png')

  this.show = function(){
    fill(255);
    ellipseMode(RADIUS);
    this.y-=5
    image(this.img,this.x,this.y,this.w,this.h);
  }
}
