var car1, car2, car3, wall;
var speed = random(55,90);
var weight = random(400,1500);
var deformation = 0;

function setup() {
  createCanvas(1600,400);
  createSprite(400, 200, 50, 50);
  car1 = createSprite(400, 400, 50, 50);
  car2 = createSprite(400, 800, 50, 50);
  car3 = createSprite(400, 1400, 50, 50);
  wall = createSprite(1500, 400, 60, height/2);
  wall.shapeColor = RGB(80, 80, 80);
  var speed, weight;
  speed=random(55,90)
  weight=random(400,1500)
}

function draw() {
  background(255,255,255);  
  drawSprites();
  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  run();
}
function run(){
  if(wall.x-car1.x < (wall.width+car2.width/2))
  {
    car1.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation<180)
    {
      car1.shapeColor=color(255,0,0);
    }
    if(deformation>180 && deformation>100)
      {
        car1.shapeColor=color(230,230,0);
      }
      if(deformation<100)
      {
        car1.shapeColor=color(0,255,0);
      }
    }
      if(wall.x-car1.x < (wall.width+car1.width/2))
  {
    car1.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation<180)
    {
      car2.shapeColor=color(255,0,0);
    }
    if(deformation>180 && deformation>100)
      {
        car2.shapeColor=color(230,230,0);
      }
      if(deformation<100)
      {
        car2.shapeColor=color(0,255,0);
      }
    }
      if(wall.x-car2.x < (wall.width+car2.width/2))
  {
    car3.velocityX=0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation<180)
    {
      car3.shapeColor=color(255,0,0);
    }
    if(deformation>180 && deformation>100)
      {
        car3.shapeColor=color(230,230,0);
      }
      if(deformation<100)
      {
        car3.shapeColor=color(0,255,0);
      }
  }
}