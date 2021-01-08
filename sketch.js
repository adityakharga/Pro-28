
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var gameState = "onSling"
function preload()
{
	boy = loadImage("Images/boy.png");
	tree = loadImage("Images/tree.png");
}

function setup() {
	createCanvas(800, 700);
  

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	G = new Ground(400,675,800,50)
    M1 = new Mango(750 ,350,50,50)
    M2 = new Mango(710 ,300,50,50)
    M3 = new Mango(650 ,370,50,50)
    M4 = new Mango(500 ,370,50,50)
    M5 = new Mango(550 ,315,50,50)
    M6 = new Mango(450 ,310,50,50)
    M7 = new Mango(600 ,280,50,50)
    M8 = new Mango(620 ,220,50,50)
    M9 = new Mango(520 ,230,50,50)
    M0 = new Mango(650 ,260,50,50)
	S = new Stone(40,526,50,50)
	S1 = new SlingShot(S.body,{x:40,y:540})
	Engine.run(engine)
}


function draw() {
  rectMode(CENTER);
  background("maroon");
  image(boy,0,460,200,250)
  image(tree,400,160,400,500)
  drawSprites();
  G.display();
  M1.display();
  M2.display();
  M3.display();
  M4.display();
  M5.display();
  M6.display();
  M7.display();
  M8.display();
  M9.display();
  M0.display();
  S.display();
  S1.display();
  detectCollision(S,M1);
  detectCollision(S,M2);
  detectCollision(S,M3);
  detectCollision(S,M4);
  detectCollision(S,M5);
  detectCollision(S,M6);
  detectCollision(S,M7);
  detectCollision(S,M8);
  detectCollision(S,M9);
  detectCollision(S,M0);

  text(mouseX+":"+mouseY,mouseX,mouseY);
}



function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(S.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    S1.fly();
    gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32 && S.body.speed<1 ){
       S.trajectory =[];
       Matter.Body.setPosition(S.body, {x: 140 , y: 490});
       S1.attach(S.body);
       gameState = "onSling";
    }
}

function detectCollision(lstone,lmango)
{
    var mangoBodyPosition=lmango.body.position
    var stoneBodyPosition=lstone.body.position
    
    var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if (distance<=lmango.width+lstone.width) {
      Matter.Body.setStatic(lmango.body,false);
    }
}