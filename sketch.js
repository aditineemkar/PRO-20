//creating global variables
var car;
var wall;
var line;
var speed;
var weight;

function setup() {
  createCanvas(800,500);
  speed=random(55,90);
  
  weight=random(55,90);

  car=createSprite(100, 200, 10, 10);
 
  car.shapeColor="orange";
  
  car.velocityX=speed;
  

  wall=createSprite(700, 200, 5, 70);
  
  wall.shapeColor="orange";
  

  line=createSprite(450,100,800,5);
  line=createSprite(450,300,800,5);
  

  
  
}

function draw() {
  background(255,255,255); 
  
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180){
      car.shapeColor=("green");
    }
    if(deformation<180 && deformation>100){
      car.shapeColor=("yellow");
    }
    if(deformation<100){
      car.shapeColor=("red");
    }
  }
 drawSprites();
}