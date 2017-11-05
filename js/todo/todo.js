var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var engine,world,box1, arr, br, bg, bb, red_done, green_done, blue_done, pink_done, orange_done;

let memories = ["Memory 1", "Memory 2",
  "Memory 3", "Memory 4", "Memory 5"];





function setup(){
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
        newNote.setMessage(memories[i]);
        arr.push(newNote);
        World.add(world, newNote.body);
  }



}

function draw() {
  red_done = false;
  green_done = false;
  blue_done = false;
  pink_done = false;
  orange_done = false;
    background(br,bg,bb);
    for(let i=0; i<arr.length; i++){
      arr[i].draw();
  }
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

  if(checkNotes())
    console.log("DONE!");

  
}

function checkNotes(){
  //check if all balls in right position
  for(let i=0; i<arr.length; i++){
    let note = arr[i];
    if((note.x>0 && note.x<160) && i==0){
      console.log("RED");
      red_done = true;
    }
    if((note.x>160 && note.x<320) && i==1){
      console.log("GREEN");
      green_done = true;
    }
    if((note.x>320 && note.x<480) && i==2){
      console.log("BLUE");
      blue_done = true;
    }
    if((note.x>480 && note.x<640) && i==3){
      console.log("PINK");
      pink_done = true;
    }
    if((note.x>640 && note.x<800) && i==4){
      console.log("ORANGE");
      orange_done = true;
    }
    
  }
   return red_done && green_done && blue_done && pink_done && orange_done;
};

