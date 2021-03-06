const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var wall,wall2,wall3,wall4;
var labCell,labCellImg;
var pathwall1,pathwall2,pathwall3,pathwall4,pathwall5,pathwall6,pathwall7,pathwall8,pathwall9,pathwall11,pathwall12,pathwall13,pathwall4,pathwall5,pathwall6,pathwall17,pathwall18,pathwall19,pathwall20,
pathwall21,pathwall22,pathwall23,pathwall24,pathwall25,pathwall26,pathwall27,pathwall28,pathwall29,pathwall30,pathwall31,pathwall32,pathwall33,pathwall34,pathwall35,pathwall36,pathwall37,pathwal38,pathwall39,
pathwall40,pathwall41,pathwall42,pathwall43,pathwall44,pathwall45,pathwall46,pathwall47,pathwall48,pathwall49,pathwall50,pathwall50,pathwall51,pathwall52,pathwall53,pathwall54,pathwall55,pathwall56,pathwall57,
pathwall58,pathwall59,pathwall60,pathwall61,pathwall62,pathwall63,pathwall64,pathwall65;

var player, enemy, enemyAnimation;

function preLoad()
{
  enemyAnimation = loadAnimation("images/Enemy.png,Enemy2.png,Enemy3.png,Enemy4.png,Enemy5.png,Enemy6.png,Enemy7.png,Enemy8.png,Enemy9.png,Enemy10.png")
  
}
function setup() {
  var canvas = createCanvas(1280,730);
  engine = Engine.create();
  world = engine.world;

  wall = new Wall(2,390,5,1280);
  wall2 = new Wall(640,729,1280,5);
  wall3 = new Wall(640,2,1280,5);
  wall4 = new Wall(1280,200,5,1280);

  labCell = new Wall(50,50,100,100);
  
  player = new Player(200,200,25,25);

  enemy = new Enemy(200,200,25,25);
  

  
  pathwall1 = new Wall(30,125,5,100);
  pathwall2 = new Wall(72,125,5,100);
  pathwall3 = new Wall(120,175,100,5);
  pathwall4 = new Wall(170,185,5,25);
  pathwall5 = new Wall(105,195,130,5);
  pathwall6 = new Wall(20,175,25,5);
  pathwall7 = new Wall(10,450,5,550);
  pathwall8 = new Wall(40,317,5,250);
  pathwall9 = new Wall(137,445,200,5);
  pathwall10 = new Wall(157,475,250,5);
  pathwall11 = new Wall(237,422,5,50);
  pathwall12 = new Wall(280,435,5,77);
  pathwall13 = new Wall(357,400,150,5);
  pathwall14 = new Wall(160,400,150,5);
  pathwall15 = new Wall(435,390,5,25);
  pathwall16 = new Wall(85,390,5,25);
  pathwall17 = new Wall(157,375,150,5);
  pathwall18 = new Wall(360,375,150,5);
  pathwall19 = new Wall(235,340,5,75);
  pathwall20 = new Wall(285,340,5,75);
  pathwall21 = new Wall(162,300,150,5);
  pathwall22 = new Wall(385,300,200,5);
  pathwall23 = new Wall(87,290,5,25);
  pathwall24 = new Wall(260,275,350,5);
  pathwall25 = new Wall(485,195,5,215);
  pathwall26 = new Wall(435,140,5,270);
  pathwall27 = new Wall(1227,675,100,100);
  pathwall28 = new Wall(585,89,200,5);
  pathwall29 = new Wall(35,583,5,225);
  pathwall30 = new Wall(260,695,455,5);
  pathwall31 = new Wall(300,665,455,5);
  pathwall32 = new Wall(525,680,5,35);
  pathwall33 = new Wall(300,635,455,5);
  pathwall34 = new Wall(75,650,5,35);
  pathwall35 = new Wall(260,600,455,5);
  pathwall36 = new Wall(525,600,5,75);
  pathwall37 = new Wall(300,565,455,5);
  pathwall38 = new Wall(260,525,455,5);
  pathwall39 = new Wall(320,475,270,5);
  pathwall40 = new Wall(525,520,5,90);
  pathwall41 = new Wall(825,695,600,5);
  pathwall42 = new Wall(1125,710,5,35);
  pathwall43 = new Wall(685,49,5,85);
  pathwall44 = new Wall(565,49,160,5);
  pathwall45 = new Wall(452,450,5,50);
  pathwall46 = new Wall(737,425,575,5);
  pathwall47 = new Wall(747,475,450,5);
  pathwall48 = new Wall(975,572,5,200);
  pathwall49 = new Wall(1025,522,5,200);
  pathwall50 = new Wall(1075,670,200,5);
  pathwall51 = new Wall(1105,625,165,5);
  pathwall52 = new Wall(1000,10,5,400);
  pathwall53 = new Wall(900,10,5,400);
  pathwall54 = new Wall(800,10,5,400);
  pathwall55 = new Wall(900,250,400,5); 
  pathwall56 = new Wall(850,150,5,200); 
  pathwall57 = new Wall(950,150,5,200); 
  pathwall58 = new Wall(1100,100,5,150); 
  pathwall59 = new Wall(1070,330,5,150); 
  pathwall60 = new Wall(1050,100,5,150); 
  pathwall61 = new Wall(1148,27,100,5); 
  pathwall62 = new Wall(1148,87,50,5); 
  pathwall63 = new Wall(1148,172,100,5); 
  pathwall64 = new Wall(1200,100,5,70); 
  pathwall65 = new Wall(600,260,5,200);
}

function draw() {
  background(211,211,211);  
  
  //if (keyDown(UP_ARROW)){
   // player.distance +=10;
 // }
  //if (keyDown(DOWN_ARROW)){
  //  player.distance +=10;
 // }
  //if (keyDown(RIGHT_ARROW)){
  //  player.distance +=10;
 // }
  //if (keyDown(LEFT_ARROW)){
 //   player.distance +=10;
  //}

  player.display();

  pathwall1.display();
  pathwall2.display();
  pathwall3.display();
  pathwall4.display();
  pathwall5.display();
  pathwall6.display();
  pathwall7.display();
  pathwall8.display();
  pathwall9.display();
  pathwall10.display();
  pathwall11.display();
  pathwall12.display();
  pathwall13.display();
  pathwall14.display();
  pathwall15.display();
  pathwall16.display();
  pathwall17.display();
  pathwall18.display();
  pathwall19.display();
  pathwall20.display();
  pathwall21.display();
  pathwall22.display();
  pathwall23.display();
  pathwall24.display();
  pathwall25.display();
  pathwall26.display();
  pathwall27.display();
  pathwall28.display();
  pathwall29.display();
  pathwall30.display();
  pathwall31.display();
  pathwall32.display();
  pathwall33.display();
  pathwall34.display();
  pathwall35.display();
  pathwall36.display();
  pathwall37.display();
  pathwall38.display();
  pathwall39.display();
  pathwall40.display();
  pathwall41.display();
  pathwall42.display();
  pathwall43.display();
  pathwall44.display();
  pathwall45.display();
  pathwall46.display();
  pathwall47.display();
  pathwall48.display();
  pathwall49.display();
  pathwall50.display();
  pathwall51.display();
  pathwall52.display();
  pathwall53.display();
  pathwall54.display();
  pathwall55.display();
  pathwall56.display();
  pathwall57.display();
  pathwall58.display();
  pathwall59.display();
  pathwall60.display();
  pathwall61.display();
  pathwall62.display();
  pathwall63.display();
  pathwall64.display();
  pathwall65.display();

  labCell.display();

  wall.display();
  wall2.display();
  wall3.display();
  wall4.display();

  drawSprites();
}