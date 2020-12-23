
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var paper;
var engine , world, ground,dus1,dus2,dus3;

function preload(){	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper = new Paper(150, 600, 70);
  ground = new Ground(width/2,670,width,10);

  dus1 = new Dustbin(1200 , 650, 250, 25);
  dus2 = new Dustbin(1325, 590, 27, 150);
  dus3 = new Dustbin(1070, 590, 27, 150);

  var render = Render.create({
    element: document.body,
    engine: engine,
    options: {
      width: 1200,
      height: 700,
      wireframes: false
    }
  });

  Render.run(render);
  Engine.run(engine);
  
}

function draw() {
  //rectMode(CENTER);
  background(0);

  Engine.update(engine);

  dus1.display();
  dus2.display();
  dus3.display();
  paper.display();
  ground.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed() {
  if (keyWentDown("up")) {
    Matter.Body.applyForce(paper.body, paper.body.position,{x:300, y:-300});
  }  
}
