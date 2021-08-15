var jaxon , jaxon_running,edges ;
var pathImage,invisibleGround1,invisibleGround_2;

function preload(){
  //pre-load images
  jaxon_running = loadAnimation("Runner-1.png","Runner-2.png");
 pathImage = loadImage("path.png")
}


function setup(){
  createCanvas(400,400);
 
  //creating path sprite
path=createSprite(200,200);
path.addImage("path",pathImage)
path.x = path.width /2;
path.velocityY = 4;

 
  //create sprites here
 jaxon = createSprite(200,200,20,50);
  jaxon.addAnimation("running", jaxon_running);
  edges = createEdgeSprites();
jaxon.scale = 0.1;

//creating invisible ground
invisibleGround1= createSprite(30,180,10,500);
invisibleGround1.visible = false;

//creating invisible ground2
invisibleGround_2 = createSprite(275,180,10,500);
invisibleGround_2.visible = false;



}


function draw() {
  background(0);

  if (path.y > 400){
    path.y = height/2;
  }
jaxon.x = mouseX;


jaxon.collide(invisibleGround1);
jaxon.collide(invisibleGround_2);



 drawSprites();
 
}