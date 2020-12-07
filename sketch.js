var paper;
var ground;
var dustbin1,dustbin2,dustbin3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  paper= new Paper(100,620,50);
  ground= new Ground(100,645,2000,10);
  dustbin1=createSprite(600,630,150,15);
  dustbin1.shapeColor=color("red");
  dustbin2=createSprite(520,586,20,100);
  dustbin2.shapeColor=color("red");
  dustbin3=createSprite(670,590,20,100)
  dustbin3.shapeColor=color("red");
	
  var render = Render.create({ element: document.body, engine: engine, options:
     {
     width: 1200, height: 700, wireframes: false } 
    });
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display()
  ground.display()
  dustbin1.display()
  dustbin2.display()
  dustbin3.display()
  drawSprites();
 
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
 
    }
 }
 
 


