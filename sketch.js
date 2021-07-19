var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  apple1 = loadImage("apple.png")
  leaves1 = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,390,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var rand = Math.round(random(1,100))
console.log(rand)
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  
  rabbit.x=mouseX

  createApples();
  createLeaves();

  drawSprites();
}

 function createApples(){
  if(frameCount%80===0){
  apples=createSprite(40,40,20,20);
  apples.velocityY=3;
  apples.addImage(apple1)
  apples.scale=0.05
  apples.depth=rabbit.depth
  rabbit.depth=rabbit.depth+1
   if(rabbit.collide(apples)){
   rabbit.destroy(apples)

   }
  }
}

 function createLeaves(){
  if(frameCount%80===0){
    leaves=createSprite(350,40,20,20);
    leaves.velocityY=3;
    leaves.addImage(leaves1)
    leaves.scale=0.05
    leaves.depth=rabbit.depth
    rabbit.depth=rabbit.depth+1
    }
 }

