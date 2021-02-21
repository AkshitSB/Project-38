var player , player_running;
var berry ,berryImage, obstacle, obstacleImage, ground, sun;
var berryGroup, obstacleGroup;
var score = 0;
var surivalTime = 0;


function preload(){
	obstacleImage = loadImage("stone.png");
}


function setup() {
  createCanvas(600,400);
  console.log(height);
  //creates mnkey sprite
  player = createSprite(80,height - 300,20,50);
  player.shapeColor = "red";

  sun = createSprite(500,100,100,100);
  sun.shapeColor = "yellow";

  //creates groudn sprite
  ground = createSprite(600,400,1000,100);
  ground.x = ground.width/2;
  ground.shapeColor="green";
  ground.velocityX=-4;

  //creates a group
  obstacleGroup = new Group();
  berryGroup = new Group();

}




function draw() {
  background("cyan");
  // assigns jump function for main sprite
    player.velocityY = player.velocityY + 0.4;
  
     if((touches.length > 0 || keyDown("space"))&& player.y >= height-90){ 
      player.velocityY = -12;
       touches = [];
    }
  //ground will reset
   if(ground.x<200) {
    ground.x=ground.width/2;
  }
  // assighn land for main sprite to move on
  player.collide(ground);
  //calling the function
  createObstacles();
  createberrys();


  drawSprites();
//assign score and survival time to canvas
  stroke("white");
textSize(20);
fill("white");
text("Score: "+ score, 400, 50);

stroke("white");
textSize(20);
fill("white");
survivalTime = Math.ceil(frameCount/frameRate());
text("Survival Time: "+ survivalTime, 100,50);
}


function createObstacles() {
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(400,335,40,40);
    obstacle.velocityX = -6;
	obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
    obstacleGroup.add(obstacle);
  }
}
function createberrys(){
  if(frameCount % 80 == 0){
    var berry = createSprite(500, Math.round(random(120 , 200), 1000, 5));
    berry.scale = 0.1;
	berry.shapeColor = "purple";
    berry.velocityX = -4;     
    berryGroup.add(berry);
  }
}