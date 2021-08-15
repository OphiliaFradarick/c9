//global variables
var box;

function setup(){
  //local variable 
  var canvas = createCanvas(1200, 800);

  box = createSprite(200, 300,50,100);
  box.shapeColor = 255; 

}

function draw(){
  background("purple")

  drawSprites();

}