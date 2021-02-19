var balloon,backImg,background,balloonImg;

function preload(){
  backImg=loadImage("Hot Air Ballon-01.png");
  balloonImg=loadImage("Hot Air Ballon-02.png");
}

function setup() {
  createCanvas(500,500);
  background=createSprite(250,250,500,500);
  background.addImage(backImg);
  background.scale=0.3

  balloon=createSprite(100,400,50,50);
  balloon.addImage(balloonImg);
  balloon.scale=0.4;
}

function draw() {
  drawSprites();

  if(keyDown("up")){
    balloon.y=balloon.y-5;
  }
  if(keyDown("down")){
    balloon.y=balloon.y+5;
  }
  if(keyDown("left")){
    balloon.x=balloon.x-5;
  }
  if(keyDown("right")){
    balloon.x=balloon.x+5;
  }
}