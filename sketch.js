/*gameState 1 = introduction
  gameState 2 = controls/instruction
  gameState 3 = play
  gameState 4 = end
*/
//if gameState =1/2 then the background (bgInt)
//if gameState =3 then the background (bgPlay)
//if gameState =4 then the background (bgEnd)
var gameState;
var bgInt,bgPlay,bgEnd;
var playImage,cntIMG,backIMG
var play, cnt, back;
var player1,player2;
var ground

function preload(){
  bgInt = loadImage("bgint.png")
  playImage =loadImage("play.png")
  cntIMG =loadImage("controls.png")
  backIMG =loadImage("back.png")
  bgPlay=loadImage("bgPlay.jpg")
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  gameState =1;

  
  player1 =createSprite(displayWidth/7,displayHeight/1.5,50,50)
  player1.visible = false;
  
}

function draw() {
  background(0)
  if(gameState === 1){
    intro();
  }
  else if(gameState === 2){
     ctrl();
  }
  else if(gameState === 3){
    playingArea()
  }
  
  drawSprites();
}
function intro(){
   background(bgInt)
   play = createSprite(displayWidth/2,displayHeight/3,10,10)
   play.addImage(playImage)
   play.scale=0.9
   cnt =createSprite(displayWidth/2,displayHeight/1.5,10,10)
   cnt.addImage(cntIMG)
   cnt.scale=0.4
 
   textSize(50)
   fill("red")
   text("HEROIC  DUTY",displayWidth/2-175,displayHeight/2-300)

   if(mousePressedOver(play)){
     gameState = 3;
    }else if(mousePressedOver(cnt)){
     gameState = 2;
    }
}
function ctrl(){
  background(bgInt);
  text("controls",700,100)
  text("USE 'W','A','S','D' TO MOVE THE CHARACTER ",250,200)
  text("RIGHT CLICK MOUSE TO FIRE BULLET",300,300)
  text("PRESS 'R' TO RETURN TO HOME ",350,400)
  //var back =createSprite(50,50,10,10)
  //back.addImage(backIMG)
  play.destroy()
     cnt.destroy()
  if(keyDown("R")){
    gameState = 1
  }
}
function playingArea(){
background(0)

if(ground.x<10){
  ground.x=displayWidth/2
}

player1.visible = true;

if(keyDown(UP_ARROW)){
  player1.y-=100
}
if(keyDown(DOWN_ARROW)){
  player1.y+=100
}

}