let ground;
let lander;
var lander_img;
var bg_img;


var vx = 0;
var g = 0.05;
var vy = 0;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("circle",0,0,500)
  lander.debug=true;
  lander.velocityY=1;

  ground=createSprite(500,570,200,20);
  ground.visible=false;
  


  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //fall down
  vy +=g;
  
  if(keyDown(LEFT_ARROW)){
    lander.position.x=lander.position.x-10;

  }
  if(keyDown(RIGHT_ARROW)){
    lander.position.x=lander.position.x+10;
  }
  lander.collide(ground)
  drawSprites();
}


