
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
Constraint = Matter.Constraint
var mango1,treespr;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new Mango(490,300,40,40);
	treespr = new Tree(600,300,300,350);
	mango2 = new Mango(550,280,40,40);
	mango3 = new Mango(550,190,40,40);
	mango4 = new Mango(620,190,40,40);
	mango5 = new Mango(620,250,40,40);
	mango6 = new Mango(670,250,40,40);
	stone1 = new Stone (200,200,30,30);
	sling1 = new SlingShot(stone1.body,{x:150,y:400});
	ground1 = new Ground(400,600,800,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  if (isTouching(stone1,mango1)){
	  Matter.Body.setStatic(mango1.body,false);
  }
  background(0);
  treespr.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone1.display();
  sling1.display();
  ground1.display();
  drawSprites();
 
}

function mouseDragged(){
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    sling1.fly();

}

function isTouching(shape1,shape2){
    if (shape1.x-shape2.x < shape1.width/2 + shape2.width/2
      &&shape2.x-shape1.x < shape1.width/2 + shape2.width/2
      &&shape2.y-shape1.y < shape1.height/2 + shape2.height/2
      &&shape1.y-shape2.y < shape1.height/2 + shape2.height/2){
      return true;
    }
    else{
      return false;
    }
  
  }