var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var engine,world,box1, arr, br, bg, bb, red_done, green_done, blue_done, pink_done, orange_done, number_done;

var memories = ["Stargaze with a Telescope", "Binge Watch Stranger Things",
  "Go to California", "Make 'Mama Lisa' dinners", "Get a PUPPY", "8725"];





function setup(){
  colorMode(RGB, 255, 255, 255, 1);
    number_done = 0;
    br = random(200,255);
    bg = random(200,255);
    bb = random(200,255);
    noStroke();
    canvas = createCanvas(800,400);
    canvas.class('todo');
    engine = Engine.create();
    engine.positionIterations = 1;
    engine.velocityIterations = 1;
    world = engine.world;
    Engine.run(engine);

    //make ground
    ground = Bodies.rectangle(400, 500, 800, 200, {isStatic: true});
    World.add(world,ground);
    //ceiling
    ceiling = Bodies.rectangle(400, -100, 800, 200, {isStatic: true});
    World.add(world,ceiling);
     //left wall
     lwall = Bodies.rectangle(-100, 200, 200, 400, {isStatic: true});
     World.add(world,lwall);
     //right wall
     rwall = Bodies.rectangle(900, 200, 200, 400, {isStatic: true});
     World.add(world,rwall);
     //color coded ground
     blue_ground = Bodies.rectangle(100, 790, 200, 20, {isStatic: true});
     World.add(world,blue_ground);
    
    var canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    var options = {
      mouse: canvasMouse
    };
    var mouseConstraint = MouseConstraint.create(engine, options);
    World.add(world,mouseConstraint);
    arr = [];

    for(var i = 0; i<5; i++){
        var randomx = random(20,780);
        var randomy = random(20,380);
        var newNote = new Notes(randomx,randomy, i);
        arr.push(newNote);
        World.add(world, newNote.body);
  }



}

function draw() {
  if(number_done<6){
  red_done = false;
  green_done = false;
  blue_done = false;
  pink_done = false;
  orange_done = false;
  background(br,bg,bb);
    
  rectMode(CENTER);
  push();
  fill(255,0,0);
  rect(80,398,160,4);
  fill(0,255,0);
  rect(240,398,160,4);
  fill(0,0,255);
  rect(400,398,160,4);
  fill(244,55,159);
  rect(560,398,160,4);
  fill(244,149,66);
  rect(720,398,160,4);
  pop();
  rect(blue_ground.position.x, blue_ground.position.y, 200,20);


  if(checkNotes()){
    addNote(++number_done);
    resetScreen();
  }
  for(let i=0; i<arr.length; i++){
    arr[i].draw();
  }
}
else{
  background(br,bg,bb);
  stroke(0,0,0);
  fill(0,0,0);
  textFont("Arial", 40);
  text("You have found all of the items!", 500,220,800,100);
}

  
    

  
}

function resetScreen(){
  red_done = false;
  green_done = false;
  blue_done = false;
  pink_done = false;
  orange_done = false;
  for(let i = 0; i<5; i++){
    var randomx = random(20,780);
    var randomy = random(20,380);
    World.remove(world, arr[i].body);
    arr[i] = new Notes(randomx, randomy, i);
    World.add(world, arr[i].body);
  }

}

function checkNotes(){
  //check if all balls in right position
  for(let i=0; i<arr.length; i++){
    let note = arr[i];
    if((note.body.position.x>0 && note.body.position.x<160) && i==0 && note.body.position.y>370){
      red_done = true;
      push();
      fill(255,0,0, 0.5);
      rect(80,200,160,400);
      pop();
    }
    if((note.body.position.x>160 && note.body.position.x<320) && i==1 && note.body.position.y>370){
      green_done = true;
      push();
      fill(0,255,0, 0.3);
      rect(240,200,160,400);
      pop();
    }
    if((note.body.position.x>320 && note.body.position.x<480) && i==2 && note.body.position.y>370){
      blue_done = true;
      push();
      fill(0,0,255, 0.5);
      rect(400,200,160,400);
      pop();
    }
    if((note.body.position.x>480 && note.body.position.x<640) && i==3 && note.body.position.y>370){
      pink_done = true;
      push();
      fill(244,66,159, 0.5);
      rect(560,200,160,400);
      pop();
    }
    if((note.body.position.x>640 && note.body.position.x<800) && i==4 && note.body.position.y>370){
      orange_done = true;
      push();
      fill(244,149,66, 0.5);
      rect(720,200,160,400);
      pop();
    }
    
  }
   return red_done && green_done && blue_done && pink_done && orange_done;
}

function addNote(){
  let rand = Math.floor(random(0,memories.length));
  $('.todoNoteSection').append('<div class="todoNote">'+memories[rand]+'</div>');
  memories.splice(rand,1);
}



