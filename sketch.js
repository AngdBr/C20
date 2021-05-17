var fixedRect, movingRect;
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue";

  movingRect=createSprite(200,200,50,50);
  movingRect.shapeColor="blue";

  movingRect.debug = true
  fixedRect.debug = true
}

function draw() {
  background("yellow"); 
  
  movingRect.x = mouseX;
  movingRect.y= mouseY;

  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 && 
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
  }
  else{
    fixedRect.shapeColor="blue";
    movingRect.shapeColor="blue";
  }

  
  drawSprites();
}