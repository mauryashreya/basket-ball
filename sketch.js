
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var basket1;
var ball;
var ground,cloudimg , cloud1,cloud2;


function preload()
{
	cloudimg=loadImage("cloud.jpg")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
   
	cloud1=createSprite(300,200,50,50)
    cloud1.addImage(cloudimg)
	basket1=createSprite(600,680,150,20);
	basket1.shapeColor=color("yellow");
	basket2=createSprite(525,630,20,120);
    basket2.shapeColor=color("yellow");
	basket3=createSprite(670,630,20,120);
	basket3.shapeColor=color("yellow");
	
	ground = new Ground(width/2,660,width,20);
	
	ball = new Ball(100,600,50);
	
	basket1 = new Basket(600,638,150,20);
	basket2 = new Basket(523,605,20,90);
	basket3 = new Basket(673,605,20,90);

    Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);
  fill("black")
  textSize(30)
  text("Basket ball game ",250,30)
  textSize(15)
  text("press the up arrow to make the basket ",20,50)
 
ball.display();
ground.display();
basket1.display();
basket2.display();
basket3.display();
cloud1.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
  }



