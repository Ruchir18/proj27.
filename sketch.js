
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
roof = new Roof(400,200,400,50);

bob1 = new Bob(400,500,25);
bob2 = new Bob(450,500,25);
bob3 = new Bob(350,500,25);

rpe1 = new Chain(bob1.body,{x:400,y:200});
rpe2 = new Chain(bob2.body,{x:400,y:200});
rpe3 = new Chain(bob3.body,{x:400,y:200});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(170);
roof.display()  

bob1.display()
bob2.display()
bob3.display()

rpe1.display()
rpe2.display()
rpe3.display()



drawSprites();
 
}

function keyPressed(){
	if(keyCode===32){
Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY})
}
}

