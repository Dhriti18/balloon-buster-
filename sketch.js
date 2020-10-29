var backgroundImage, ground, edges;

var red, ballonred, redb, redGroup;
var blue, balloonblue, blueGroup;
var pink, balloonpink, pinkGroup;
var green, balloongreen, greenGroup;

var bow, bowImage;

var arrow1, arrowImage, arrowGroup;

var score = 0;


function preload() {
  //load your images here 
  backgroundImage = loadImage("background0.png");
  red = loadImage("red_balloon0.png");
  blue = loadImage("blue_balloon0.png");
  pink = loadImage("pink_balloon0.png");
  green = loadImage("green_balloon0.png");
  bowImage = loadImage("bow0.png");
  arrowImage = loadImage("arrow0.png");
}

function setup() {
  createCanvas(400, 500);

  edges = createEdgeSprites();


  //add code here
  ground = createSprite(0, 0, 700, 700);
  ground.addImage("ground", backgroundImage);
  ground.x = ground.width / 2;
  ground.scale = 2.5;

  bow = createSprite(370, 200, 50, 50);
  bow.addImage("bow", bowImage);

  arrowGroup = createGroup();
  redGroup = new Group();
  blueGroup = new Group();
  pinkGroup = new Group();
  greenGroup = new Group();

}

function draw() {
  background("white");

  if (arrowGroup.isTouching(redGroup)) {
    redGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 1;

  }
  if (arrowGroup.isTouching(blueGroup)) {
    blueGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 2;

  }
  if (arrowGroup.isTouching(greenGroup)) {
    greenGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 3;

  }
  if (arrowGroup.isTouching(pinkGroup)) {
    pinkGroup.destroyEach();
    arrowGroup.destroyEach();
    score = score + 4;

  }

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }

  bow.y = mouseY;
  if (keyDown("space")) {
    createarrow();
    arrow1.y = bow.y;
  }

  var selectballoon = Math.round(random(1, 4))
  console.log(selectballoon);
  if (World.frameCount % 80 === 0) {
    if (selectballoon === 1) {
      balloonredb();
    } else if (selectballoon === 2) {
      balloonblueb();
    } else if (selectballoon === 3) {
      balloonpinkb();
    } else {
      balloongreenb();
    }
  }


  drawSprites();
  textSize = 20;
  text("Score: " + score, 340, 50);

}

function createarrow() {

  arrow1 = createSprite(360, 200, 10, 10);
  arrow1.addImage("arrow", arrowImage);
  arrow1.scale = 0.3;
  arrow1.velocityX = -10;
  arrow1.lifetime = 100;
  arrowGroup.add(arrow1);


}

function balloonredb() {
  balloonred = createSprite(0, Math.round(random(20, 370)), 10, 10);
  balloonred.velocityX = 3;
  red.lifetime = 150;
  balloonred.addImage("balloonred", red);
  balloonred.scale = 0.1;
  redGroup.add(balloonred);
}

function balloonblueb() {
  balloonblue = createSprite(0, Math.round(random(20, 370)), 10, 10);
  balloonblue.velocityX = 3;
  balloonblue.lifetime = 150;
  balloonblue.addImage("balloonblue", blue);
  balloonblue.scale = 0.1;
  blueGroup.add(balloonblue);
}

function balloongreenb() {
  balloongreen = createSprite(0, Math.round(random(20, 370)), 10, 10);
  balloongreen.velocityX = 3;
  balloongreen.lifetime = 150;
  balloongreen.addImage("balloongreen", green);
  balloongreen.scale = 0.1;
  greenGroup.add(balloongreen);

}

function balloonpinkb() {
  balloonpink = createSprite(0, Math.round(random(20, 370)), 10, 10);
  balloonpink.velocityX = 3;
  balloonpink.lifetime = 150;
  balloonpink.addImage("balloongreen", green);
  balloonpink.scale = 0.1;
  pinkGroup.add(balloonpink);
}