var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var engine,world,box1, arr, br, bg, bb;

let memories = ["Memory 1", "Memory 2",
  "Memory 3", "Memory 4", "Memory 5"];





function setup(){
    br = random(130,255);
    bg = random(130,255);
    bb = random(130,255);
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
    
    var canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    var options = {
      mouse: canvasMouse
    };
    var mouseConstraint = MouseConstraint.create(engine, options);
    World.add(world,mouseConstraint);
    arr = [];

    for(var i = 0; i<5; i++){
        var newNote = new Notes(200,200);
        newNote.setMessage(memories[i]);
        arr.push(newNote);
        World.add(world, newNote.body);
  }



}

function draw() {
    background(br,bg,bb);
    for(let i=0; i<arr.length; i++){
      arr[i].draw();
  }
}

