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
  createCanvas(1200,800);

  pitch = createSprite(600,400);
  pitch.addImage(pitchImg);
  pitch.scale = 2

  player = createSprite(70, 200, 50, 50);
  player.addImage(playerImg);
 
 
}

function draw() {
background("black")
text("SCORE: ", score, 50,300);
  pitch.velocityX =  -3;
  if (pitch.x < 0){
    pitch.x = pitch.width/2;
  }

  if(keyDown(UP_ARROW)){
    player.y = player.y-10
  }
  if(keyDown(DOWN_ARROW)){
    player.y = player.y+10
  }
  if(keyDown(RIGHT_ARROW)){
    player.x = player.x+10
  }
  if(keyDown(LEFT_ARROW)){
    player.x = player.x-10
  }

  //if(quaffleGroup.isTouching(player)){
    //score = score-20
  //}
  //if (bludgerGroup.isTouching(player)) {
    //score = score+20
  //}

  //if(gsGroup.isTouching(player)){
    //score = score+150
    //fontSize = 20
    //text("YOU WIN!!", 600,400);
  //}




  spwanQ();
  quaffleGroup = new Group();
  spwanGS();
  gsGroup = new Group();
  spwanBludger();
  bludgerGroup = new Group();
  drawSprites();
}

function spwanQ() {
  if(frameCount % 70 ===0){
    quaffle = createSprite(Math.round(random(100,1800)),Math.round(random(200,800)),40,10)
    quaffle.addImage(quaffleImg)
    quaffle.velocityX = -5
    quaffle.scale = 0.1
    quaffleGroup.add(quaffle);
  }
}

function spwanGS() {
  if(frameCount % 90 ===0){
    gs = createSprite(Math.round(random(100,1800)),Math.round(random(200,800)),40,10)
    gs.addImage(gsImg)
    gs.velocityX = -10
    gs.scale = 0.1
    gsGroup.add(gs);
  }
}

function spwanBludger() {
  if(frameCount % 50 ===0){
    bludger = createSprite(Math.round(random(100,1800)),Math.round(random(200,800)),40,10)
    bludger.addImage(bludgerImg)
    bludger.velocityX = -5
    bludger.scale = 0.5
    bludgerGroup.add(bludger);
  }
}
