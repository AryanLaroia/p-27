
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1,bob2,bob3,bob4;
var roof;
var rope1,rope2,rope3,rope4;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
bob1 = new Bob(240,500,60);
bob2 = new Bob(300,500,60);
bob3 = new Bob(360,500,60);
bob4 = new Bob(420,500,60);

roof = new Roof(300,200,230,20);
rope1 = new Rope(bob1.body,roof.body,-120,0);
rope2 = new Rope(bob2.body,roof.body,-60,0);
rope3 = new Rope(bob3.body,roof.body,0,0);
rope4 = new Rope(bob4.body,roof.body,60,0);
	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  background("white");
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  
  
 
}


function keyPressed(){
  if (keyCode === UP_ARROW){
Matter.Body.applyForce(bob1.body,bob1.body.position,{x:120,y:0})
  }
}
