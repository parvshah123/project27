var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var chain1, chain2, chain3, chain4, chain5;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Ground(390,80,600,50);

	bobObject1 = new Bob(200,200,50);
	bobObject2 = new Bob(300,200,50);
	bobObject3 = new Bob(400,200,50);
	bobObject4 = new Bob(500,200,50);
	bobObject5 = new Bob(600,200,50);

	chain1 = new Chain(bobObject1.body,{x:200,y:80});
	chain2 = new Chain(bobObject2.body,{x:300,y:80});
	chain3 = new Chain(bobObject3.body,{x:400,y:80});
	chain4 = new Chain(bobObject4.body,{x:500,y:80});
	chain5 = new Chain(bobObject5.body,{x:600,y:80});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  roof.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  
  drawSprites();
 
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject5.body, bobObject5.body.position, {x:50,y:45});
	}
}



