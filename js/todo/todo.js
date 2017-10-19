var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies,
    Mouse = Matter.Mouse,
    MouseConstraint = Matter.MouseConstraint;

var engine,world,box1;

arr = [];

for(i = 0; i<5; i++){
    arr[i] = new Notes(200,200)
    World.add(world,arr[i].body);
}


function setup(){
    noStroke();
    canvas = createCanvas(800,400);
    canvas.class('todo');
    engine = Engine.create();
    engine.positionIterations = 1;
    engine.velocityIterations = 1;
    world = engine.world;
    Engine.run(engine);

    //make ground
    ground = Bodies.rectangle(400, 390, 800, 20, {isStatic: true});
    World.add(world,ground);
    fill(0);
    var canvasMouse = Mouse.create(canvas.elt);
    canvasMouse.pixelRatio = pixelDensity();
    var options = {
      mouse: canvasMouse
    }
    var mouseConstraint = MouseConstraint.create(engine, options);
    World.add(world,mouseConstraint)



}

function draw() {
    for(i = arr.length; i = 0; i--){
        arr[i].draw();
    }
    background(255);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
}

