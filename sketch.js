var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground

function preload(){
  
  
  monkey_running = loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  monkey = createSprite(50,325)
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1
  monkey.debug = true
  ground = createSprite(200,370,400,10)
  obstaclesGroup = createGroup();
  foodGroup = createGroup();
}


function draw() {
  background(180)
  
  if(keyDown("space")&& monkey.y >= 334) {
      monkey.velocityY = -12;
    }
  
  if(obstaclesGroup.isTouching(monkey)) {
    monkey.velocityY = 0
    obstaclesGroup.setVelocityXEach(0);
    foodGroup.setVelocityXEach(0); 
    obstaclesGroup.setLifetimeEach(-1);
    foodGroup.setLifetimeEach(-1);
  }
  
  monkey.velocityY = monkey.velocityY + 0.5
  monkey.collide(ground);
  
  spawnBananas()
  spawnObstacles()
  
  
  drawSprites();
}

function spawnBananas() {
  if (frameCount % 60 === 0) {
  var banana = createSprite(400,100,40,10);
  banana.y = Math.round(random(80,100));
  banana.addImage(bananaImage);
  banana.scale = 0.1;
  banana.velocityX = -3;
  banana.lifetime = 200;
  banana.depth = monkey.depth;
  monkey.depth = monkey.depth + 1;
  foodGroup.add(banana);
  }
}

function spawnObstacles(){
 if (frameCount % 100 === 0){
   var obstacle = createSprite(400,340,10,30);
   obstacle.scale = 0.15
   obstacle.addImage(obstacleImage);
   obstacle.velocityX = -3
   obstaclesGroup.add(obstacle);
    }
   }
  
  
  