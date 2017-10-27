function Kyle(x,y){
  this.x = x;
  this.y = y;
  this.w = 50;
  this.h = 50;
  this.health = 100;
  this.score =0;
  this.img = loadImage('js/game/img/kyle-normal.png');

  this.show = function(){
    image(this.img,this.x,this.y,this.w,this.h);
  }
}
