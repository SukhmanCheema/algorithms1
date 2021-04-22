var rectangle1,rectangle2,rectangle3,rectangle4,rectangle5,rectangle6;

function setup() {
  createCanvas(800,400);
  rectangle1=createSprite(400,200,50,100);
  rectangle2=createSprite(200,40,50,100);
  rectangle1.shapeColor="red";
  rectangle2.shapeColor="blue";
  rectangle1.debug=true;
  rectangle2.debug=true;
  rectangle3=createSprite(20,200,50,100);
  rectangle3.shapeColor="white";
  rectangle3.debug=true;
  rectangle3.velocityX=2;
  rectangle4=createSprite(380,200,50,100);
  rectangle4.shapeColor="aqua";
  rectangle4.debug=true;
  rectangle4.velocityX=-2;
  rectangle5=createSprite(200,200,50,100);
  rectangle6=createSprite(600,200,50,100);
  rectangle5.shapeColor="red";
  rectangle6.shapeColor="red";
  rectangle5.debug=true;
  rectangle6.debug=true;
}

function draw() {
  background(0); 
  rectangle2.x=mouseX;
  rectangle2.y=mouseY; 
  bounceOff(rectangle4,rectangle3);
  
  
  ;
  if(IsTouching(rectangle2,rectangle5)){

  rectangle2.shapeColor="green";
  rectangle5.shapeColor="pink";
  }else{
rectangle2.shapeColor="blue";
  rectangle5.shapeColor="red";
  }
  drawSprites();
  
}
