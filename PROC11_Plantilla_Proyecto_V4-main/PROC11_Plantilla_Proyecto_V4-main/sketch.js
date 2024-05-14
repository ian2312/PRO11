var ship, ship_running;
var seaImg;
var sea;
function preload(){
ship_running = loadAnimation("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,180,400,400);
  sea.addAnimation("navi", seaImg);
  sea.scale = 0.5;


  ship = createSprite(200,200,70,40);
  ship.addAnimation("running", ship_running);
  ship.scale = 0.2;

  


}

function draw() {
  background("blue");
 if (keyDown("space")) {
  sea.velocityX = -7;

 }

 if (sea.x < -640) {
  sea.x=sea.x=400;
 }
 drawSprites();
}