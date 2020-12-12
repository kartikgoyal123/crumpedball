const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1; 
var paper1;
var box1;
var box2;
var box3;

//function preload()
//{
//}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1= new Ground(width/2, height-35, width,10);
    paper1= new Paper(100,height-50,30);

    box1= new dustbin(490, height-90, 20,100);
    box2= new dustbin(600, height-50, 200,20);
    box3= new dustbin(700, height-90, 20,100);


	  Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  ground1.display();
  paper1.display();
  box1.display();
  box2.display();
  box3.display();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {

   Matter.Body.applyForce(paper1.body, paper1.body.position,{x:35,y:-35});
     
   }
 }

