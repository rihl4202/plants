var count = 0

function preload(){
  seed1Img = loadImage("seed.png")
  sproutImg = loadImage("sprout.png")
  plant1Img = loadImage("plant.gif")
  seed2Img = loadImage("seed2.png")
  sprout2Img = loadImage("sprout2.png")
  plant2Img = loadImage("plant2.png")
}

function setup() {
  createCanvas(800,400);
  seed1 = createSprite(400, 200, 50, 50);
  seed1.addImage("seed",seed1Img)
  seed1.addImage("sprout",sproutImg)
  seed1.addImage("plant1",plant1Img)
  seed1.scale = 0.01

  seed2 = createSprite(600, 200, 50, 50);
  seed2.addImage("seed2",seed2Img)
  seed2.addImage("sprout2",sprout2Img)
  seed2.addImage("plant2",plant2Img)
  seed2.scale = 0.02

  ground = createSprite(400,310,800,200)
  ground.shapeColor = "#8B4513"

  btn = createButton("Click to Grow")
  btn.position(30,30)
  btn.mousePressed(function(){
    count += 1 
  })

}

function draw() {
  background("lightblue"); 
   if(count === 1){
     seed1.changeImage("sprout")
     seed1.scale = 0.2
     seed1.y = 170
   }
   if(count === 2){
    seed1.changeImage("plant1")
    seed1.y = 170
  }
  if(count === 3){
    seed2.changeImage("sprout2")
    seed2.y = 170
    seed2.scale = 0.4
  }
  if(count === 4){
    seed2.changeImage("plant2")
    seed2.y = 170
  }
  drawSprites();
}