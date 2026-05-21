//final adjusted 
//
let currentTime = 0;
let savedTime =0;
let timer;
let building;
let taxi;
let taxiX = 0;
let taxiY = 1030;
let winR = 255;
let winG = 255;
let winB = 191;
let moonX = 570;
let moonY = 80;
let twoR = 112;
let twoG = 41;
let twoB = 99;
let roadA = 600;
let roadB = 1000;
let roadC = 1600;
let roadD = 300;
let roadE = 540;
let parkX = 250;
let parkY = 130;
let offset = 50;
let scene = mainMenu;
let h ;
let w ;
let color;
let genBuild;
let bColor = color

class BuildingClass 
{
  constructor(x, y, width, height, color)
  {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
  }
  create()
  {
    fill(this.color);
    rect(this.x,this.y,this.width,this.height);
  }
}
function setup() 
{
  createCanvas(1920, 1080);
  imageMode(CENTER);

}
  genBuild = new BuildingClass(mouseX, mouseY, w, h, bColor);

function draw() 
{
  scene();
}


function mouseClicked(){

if(mouseX>1100 && mouseX<1500 && mouseY>360 &&mouseY<480 && scene===mainMenu)
  {
    scene = game3;
    background(0);
  }
else if(mouseX>1675 && mouseX<1875 && mouseY>600 &&mouseY<1000 && scene===mainMenu)
  {
     scene = endScene;
  }
  
  //custom building menu
  if(scene===game3 && mouseX>1349 && mouseX<1551 && mouseY>99 && mouseY<301 )//w1
  {
    w = 40; 
  }
   else if(scene===game3 && mouseX>1649 && mouseX<1851 && mouseY>99 && mouseY<301 )//w2
  {
    w = 80; 
  }
  else if(scene===game3 && mouseX>1349 && mouseX<1551 && mouseY>349 && mouseY<551 )//h1
  {
    h = 300; 
  }
  else if(scene===game3 && mouseX>1649 && mouseX<1851 && mouseY>349 && mouseY<551  )//h2
  {
    h = 600; 
  }
    else if(scene===game3 && mouseX>1349 && mouseX<1501 && mouseY>599 && mouseY<801  )//c1
  {
    color = ('#1656AD'); 
  }
    else if(scene===game3 && mouseX>1549 && mouseX<1701 && mouseY>599 && mouseY<801  )//c2
  {
    color = ('#008000'); 
  }
    else if(scene===game3 && mouseX>1749 && mouseX<1901 && mouseY>599 && mouseY<801  )//c3
  {
    color = ('#800080'); 
  }
  
}

function mainMenu()
{
  strokeWeight(1);
  fill(19,80,41);
  rect(0,0,width,height);
  strokeWeight(100);
  line(roadA,0,roadA,1600);
  line(roadB,0,roadB,1600);
  line(roadC,0,roadC,1600);
  line(0,roadD,3000,roadD);
  line(0,roadE,3000,roadE);
  strokeWeight(10);
  fill(0);
  rect(50,30,400,200);//start
  fill(0,0,53);//navybluep
  rect(50,620,400,400);//game1
  fill(10,10,160);
  rect(150,920,200,100);
  line(250,920,250,1020);
  fill(143,37,75);//burgendy
  rect(700,620,200,400);//game2
  fill(120,37,50);
  rect(775,920,50,100);
  fill(0,101,109)//dark teal
  rect(1100,360,400,120);//game3
  fill(0,80,80);
  rect(1200,420,200,60);
  
  fill(225);
  rect(1675,600,200,400);//end
  fill(0)
  textSize(40)
  text('The End', 1700,800);
  textSize(30);
  text('Move the car around ',660,30);
  text('with the mouse!',690, 70);
  text('Once near a building',660,120);
  text('click it to proceed!',680,160);
  text('press "p" to park',680,220);



}

function game3()
{

 strokeWeight(3);
  fill(92,169,4);//green    
  rect(0,900,1920,180);
  fill(173,216,230);
  rect(1300,0,720,1090);// menu
  fill(0);
  rect(1350,100,200,200);//w1
  rect(1650,100,200,200);//w2
  rect(1350,350,200,200);//h1
  rect(1650,350,200,200);//h2
  fill('#1656AD');
  rect(1350,600,150,200);//c1
  fill('#008000');
  rect(1550,600,150,200);//c2
  fill('#800080');
  rect(1750,600,150,200);//c3
  fill(255);
  /*
  text("thin");
  text("thick");
  text("short");
  text("tall");
  text("blue");
  text("green");
  text("purple");

  
*/
  if(keyIsDown(81)===true){
    genBuild.create();
    print('building created');
  }
  if(keyIsDown(82)===true)//r to reset
  {
    scene = mainMenu;
  }
  textSize(40);
  fill(255);
  text('Press R to return to main menu!',1350,50);
  text('Press Q on the green bar',50,50)
  text('to create buildings!',50,90)
}

function endScene()
{
  fill(255);
  rect(0,0,width,height);
 
  fill(0);
  textSize(100);
  text('The End!',width/2-80,height/2);
  if(keyIsDown(82)===true)//r to reset
  {
    scene = mainMenu;
  }
  textSize(40);
  fill(0);
  text('Press R to return to main menu!',1350,50);
}




