const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


var snows = [];
function setup() {
  createCanvas(800,400);

  
  kid=createSprite(650,300);
	kid.addImage(kidImg);
	kid.scale=0.125;

  engine = Engine.create();
  world = engine.world;

  
  ground=createSprite(400,400,800,20);
  edgeSprite1=createSprite(795,395,10,800);
  edgeSprite2=createSprite(5,95,10,800);
  edgeSprite3=createSprite(400,10,800,20);

  
  


 
}


function preload(){
  bgImg=loadImage("snow4.jpg"); 
  kidImg=loadImage("kid.png");

}

function draw() {
  background(bgImg);

  Engine.update(engine);


  
  if (frameCount % 60 === 0){
    snows.push(new Snow(random(width/2-20, width/2+20), 10, 10));
  }


   for (var k = 0; k < snows.length; k++){
    snows[k].display();
  }



  if (frameCount % 60 === 0){
    snows.push(new Snow(random(width/2-100, width/2+100), 10, 10));
  }
  

  for (var j = 0; j < snows.length; j++){
    snows[j].display();
  }



  
  if (frameCount % 60 === 0){
    snows.push(new Snow(random(width/2-200, width/2+200), 10, 10));
  }
  

  for (var j = 0; j < snows.length; j++){
    snows[j].display();
  }



  
  if (frameCount % 60 === 0){
    snows.push(new Snow(random(width/2-300, width/2+300), 10, 10));
  }
  

  for (var j = 0; j < snows.length; j++){
    snows[j].display();
  }


  
  if (frameCount % 60 === 0){
    snows.push(new Snow(random(width/2-400, width/2+4000), 10, 10));
  }
  

  for (var j = 0; j < snows.length; j++){
    snows[j].display();
  }


  
  if (frameCount % 60 === 0){
    snows.push(new Snow(random(width/2-500, width/2+500), 10, 10));
  }
  

  for (var j = 0; j < snows.length; j++){
    snows[j].display();
  }



  
  if (frameCount % 60 === 0){
    snows.push(new Snow(random(width/2-600, width/2+600), 10, 10));
  }
  

  for (var j = 0; j < snows.length; j++){
    snows[j].display();
  }



  
  

  ground.display();

  edgeSprite1.visible=false;
  edgeSprite2.visible=false;
  edgeSprite3.visible=false;
  
  
 
  

  kid.velocityY=kid.velocityY+0.5;

  kid.collide(ground);
  kid.collide(edgeSprite1);
  kid.collide(edgeSprite2);
  kid.collide(edgeSprite3);



  leftClick();
  rightClick();
  drawSprites();

}



function keyPressed(){

  if(keyCode===UP_ARROW){

    kid.velocityY=-5;

   
   
    
    
      
  } 
}

function leftClick(){

  if(keyCode===LEFT_ARROW){ 

    kid.x=kid.x-5;

   
   
    
    
      
  } 
}


function rightClick(){
  if(keyCode===RIGHT_ARROW){ 

    kid.x=kid.x+5;

   
   
    
    
      
  } 

}




