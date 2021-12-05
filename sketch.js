var BackgroundImg, Background
var rocketImg, rocket
var meteorImg, meteor, meteorGroup
var invisibleBlockGroup, invisibleBlock
var gameState = "play"

function preload(){
  BackgroundImg = loadImage("Background1.png")
  rocketImg = loadImage("rocket.png")
  meteorImg = loadImage("meteor.png")
}

function setup() {
  createCanvas(600, 600);
  Background = createSprite(300,300);
  Background.addImage("Background",BackgroundImg);
  Background.velocityY = 1;
  Background.scale = 2.5
  
  rocket = createSprite(200,200,50,50)
  rocket.addImage(rocketImg)
  rocket.scale = 0.3

  meteorGroup = new Group()
  invisibleBlockGroup = new Group()
}
function draw() {
  background(200);
  if (gameState === 'play'){
    if(Background.y > 400){
      Background.y = 300
    }
    if (keyDown("right_arrow")){
      rocket.x += 3
    }
    if (keyDown("left_arrow")){
      rocket.x -= 3
    }
    if (keyDown("space")){
      rocket.velocityY = -5
    }
rocket.velocityY += 0.3
    displayMeteors()
    drawSprites()

    if (rocket.y>600 || rocket.isTouching(invisibleBlockGroup)){
      gameState = "end"
    }
  }
  else if(gameState === "end"){
    text("Game Over",230,250)
  }
}
function displayMeteors(){
  
  if (frameCount%100 === 0){
    meteor = createSprite(200,-50)
    meteor.velocityY = 2
    meteor.addImage(meteorImg)
    meteor.x = Math.round(random(120,400))
    meteor.lifetime = 800
    meteor.scale = 0.4

    invisibleBlock = createSprite(200,0)
    invisibleBlock.width = meteor.width 
    invisibleBlock.height = 2
    invisibleBlock.velocityY = 2
    invisibleBlock.x = meteor.x
    invisibleBlockGroup.add(invisibleBlock)
    invisibleBlock.scale = 0.3
  }
}

