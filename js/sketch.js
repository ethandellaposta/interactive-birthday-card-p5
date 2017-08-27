function setup() {
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  console.log("Setup!")
  noFill();
  scrollsize = createSlider(5,100);
  scrollsize.id("size");
  scrollsize.size(60,10);
}

/* Drawing Mechanics */
function draw() {
  scrollsize.position(5, window.height/2 - 30);
  noStroke();
  thick = scrollsize.value();
  ellipse(mouseX,mouseY,thick,thick);
}
function mousePressed(){
  document.addEventListener('touchstart', function(e) {e.preventDefault()}, false);
  document.addEventListener('touchmove', function(e) {e.preventDefault()}, false);
  var no_paint = document.getElementById('test').classList.contains('no_paint')
  if(document.getElementById('b1').classList.contains('clicked_button') && $('#b1:hover').length == 0 && $('#b2:hover').length == 0 && $('.size:hover').length == 0){
    var c = document.getElementById('pencil').style.color;
    fill(c);
    millis(0)
  }
}
function mouseReleased(){
  noFill();

}
function interval(){
  interval(0)
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;
  canvas.size(w,h);
  width = w;
  height = h;
};

function erase(){
  clear()
}
