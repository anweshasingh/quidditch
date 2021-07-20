var player, playerImg;
var gs, gsImg, gsGroup;
var quaffle, quaffleImg, quaffleGroup;
var pitch, pitchImg; 
var bludger, bludgerImg, bludgerGroup;

var PLAY=1;
var END=0;
var gameState = PLAY;
var score = 0;

function preload() {
  playerImg = loadImage("player.png");
  gsImg = loadImage("goldenSnitch.png");
  quaffleImg = loadImage("quaffle.png");
  pitchImg = loadImage("background.jpg");
  bludgerImg = loadImage("bludger.png");
}

function setup() {
  createCanvas(1200,700);

  pitch = createSprite(400,400);
  pitch.addImage(pitchImg);
 
  pitch.scale = 2

  player = createSprite(70, 200, 50, 50);
  player.addImage(playerImg);
 
  
  quaffleGroup = new Group();
  gsGroup = new Group();
  bludgerGroup = new Group();
 
}

function draw() {
background("white")
fontSize = 50
fill("black")
text("SCORE: "+ score, 1000,100);
if(gameState === PLAY){
  pitch.velocityX = -3;
  
  if (pitch.x < 300){
    pitch.x = 400;
  }
  
  if(keyDown(UP_ARROW)){
    player.y = player.y-10
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+10
  }
  
   if(quaffleGroup.isTouching(player)){
    quaffleGroup.destroyEach();
    score = score-20
  }
  if (bludgerGroup.isTouching(player)) {
    bludgerGroup.destroyEach();
    score = score+20
  }
  if(gsGroup.isTouching(player)){
    score = score+150
    gameState = END
    fontSize = 20
    text("YOU WIN!!", 600,400);
  }
  spwanQ();
  spwanGS();
  spwanBludger();
}
else if(gameState === END) {
  pitch.velocityX = 0
  quaffleGroup.setVelocityXEach(0);
  gsGroup.setVelocityXEach(0);
  bludgerGroup.setVelocityXEach(0);

  quaffleGroup.setLifetimeEach(-1);
  gsGroup.setLifetimeEach(-1);
  bludgerGroup.setLifetimeEach(-1);

  bludgerGroup.destroyEach();
  quaffleGroup.destroyEach();
  gsGroup.destroyEach();
}

  
  drawSprites();
}

function spwanQ() {
  if(frameCount % 80 ===0){
    quaffle = createSprite(Math.round(random(100,900)),Math.round(random(20,700)),40,10)
    quaffle.addImage(quaffleImg)
    quaffle.velocityX = -5
    quaffle.scale = 0.1
    quaffleGroup.add(quaffle);
  }
}

function spwanGS() {
  if(frameCount % 100 ===0){
    gs = createSprite(Math.round(random(100,900)),Math.round(random(20,700)),40,10)
    gs.addImage(gsImg)
    gs.velocityX = -10
    gs.scale = 0.1
    gsGroup.add(gs);
  }
}

function spwanBludger() {
  if(frameCount % 80 ===0){
    bludger = createSprite(Math.round(random(10,1100)),Math.round(random(20,700)),40,10)
    bludger.addImage(bludgerImg)
    bludger.velocityX = -5
    bludger.scale = 0.5
    bludgerGroup.add(bludger);
  }
}
