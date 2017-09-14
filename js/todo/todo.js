var Engine = Matter.Engine,
    Render = Matter.Render,
    World = Matter.World,
    Bodies = Matter.Bodies;

var engine,world,box1;


function setup(){
    noStroke();
    canvas = createCanvas(800,400)
    canvas.class('todo');
    engine = Engine.create();
    world = engine.world;
    box1 = Bodies.rectangle(200,100,80,80);
    Engine.run(engine);
    World.add(world,box1);

}

function draw() {
    background(255);
    rect(box1.position.x,box1.position.y,80,80);
}