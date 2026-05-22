//final adjusted 
//game 3 is the only working game
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
let genBuild = {};
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
  Create()
  {
    fill(this.color);
    rect(this.x,this.y,this.width,this.height);
  }
}
function preload()
{
  building =  loadImage('/images/buildings.png');
  taxi = loadImage('/images/taxi.png');
}
function setup() 
{
  createCanvas(1920, 1080);
  imageMode(CENTER);
}
function draw() 
{
  scene();
}
function mouseClicked(){
if(mouseX>50 && mouseX<450 && mouseY>620 &&mouseY<1020 && scene===mainMenu) 
  {
   scene = game1;
  }
else if(mouseX>700 && mouseX<900 && mouseY>620 &&mouseY<1020 && scene===mainMenu)
  {
    scene = game2;
  }
else if(mouseX>1100 && mouseX<1500 && mouseY>360 &&mouseY<480 && scene===mainMenu)
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
    w = 100; 
    print('w40');
  }
   else if(scene===game3 && mouseX>1649 && mouseX<1851 && mouseY>99 && mouseY<301 )//w2
  {
    w = 400; 
    print('w80');
  }
  else if(scene===game3 && mouseX>1349 && mouseX<1551 && mouseY>349 && mouseY<551 )//h1
  {
    h = 400; 
    print('h300');
  }
  else if(scene===game3 && mouseX>1649 && mouseX<1851 && mouseY>349 && mouseY<551  )//h2
  {
    h = 800; 
    print('h600');
  }
    else if(scene===game3 && mouseX>1349 && mouseX<1501 && mouseY>599 && mouseY<801  )//c1
  {
    bColor = '#1656AD'; 
    print('c1');
  }
    else if(scene===game3 && mouseX>1549 && mouseX<1701 && mouseY>599 && mouseY<801  )//c2
  {
    bColor = '#008000'; 
    print('c2');
  }
    else if(scene===game3 && mouseX>1749 && mouseX<1901 && mouseY>599 && mouseY<801  )//c3
  {
    bColor = '#800080'; 
    print('c3');

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

 if(mouseX>roadA-65 && mouseX<roadA+65 || mouseX>roadB-65 && mouseX<roadB+65 || mouseX>roadC-65 && mouseX<roadC+65)
    { 
      image(taxi,mouseX,mouseY);
    }
 else if(mouseY>roadD-65 && mouseY<roadD+65 || mouseY>roadE-65 && mouseY<roadE+65)
    {
      image(taxi,mouseX,mouseY);
    }
  else
    {
      image(taxi,0,0);
    }  


  
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
function game1()//picture buildings w/moving taxi
{
  background(137, 207, 240);
  currentTime = millis();
  image(building,width/2,height/2,1920,1080 ); //buildings
  fill(255);
  textSize(20)
  text(`${round(currentTime/1000, 2)}`, 5, 50, 90);
  timer =3000;

  if(currentTime-savedTime > timer || taxiX>0)//want it to happen every 10 seconds 
  {
     
    image(taxi,taxiX,taxiY); 
   if(taxiX<width)
    {
      taxiX +=10;
    }
    else 
    {
      taxiX =0; //rest taxi when reached end
    } 
      savedTime=currentTime;
  }
  if(keyIsDown(82)===true)//r to reset
  {
    scene = mainMenu;
  }
 textSize(40);
  fill(0);
  text('Press R to return to main menu!',1350,30);
  

  
}
function game2()//ex homemade buildingsp
{
fill(0,0,200);
rect(0,0,width,height);
  //text
  textSize(15);
  fill(255);
  text('hover mouse over the building!',40,25);
  text('click and drag to make the moon move!', 530,30);
  text('press c to change the color!',300,50);
  text('press m to reset the color.c',310,70);
//shrubfence thing
  strokeWeight(3);
  fill(92,169,4);//green    
  rect(0,900,1920,180);
  //moon
  strokeWeight(3);
  fill(240,240,191); //yellow
  circle(moonX,moonY,80); // moon on top right
//blue building
  strokeWeight(5);
  fill(0,0,100);//blue
  rect(40,540,200,460); // blue outlined rect on left side
  //2nd building
  fill(twoR,twoG,twoB);//newbuilding for ss3
  rect(320,580,150, 420);
//blue building doors
  strokeWeight(3);
  fill(0,0,200); //lighter blue
  rect(100,930,80,70);//doors
  line(140,930,140,1000);//line seperating doors
 //2ndbuilding doors
 fill(twoR+30,twoG+30,twoB+30);
 rect(355,930,80,70);
 line(395,930,395,1000);
 //windows blue building
  fill(winR,winG,winB);//window color
  rect(80,550,30,50);//window 1R
  rect(170,550,30,50);//window 1L
  rect(80,620,30,50);//window 2R
  rect(170,620,30,50);//window 2L
  rect(80,690,30,50);// window 3R
  rect(170,690,30,50);//window 3L
  rect(80,760,30,50);//window 4R
  rect(170,760,30,50);//window 4L
  rect(80,830,30,50);//window 5R
  rect(170,830,30,50);//window 5L
  //windows building 2 
  fill(255,255,191);
  rect(340,600,30,50); //1R
  rect(420,600,30,50); //1L
  rect(340,670,30,50); //2R 
  rect(420,670,30,50); //2L
  rect(340,740,30,50); //3R
  rect(420,740,30,50); //3L
  rect(340,810,30,50); //4R
  rect(420,810,30,50); //4L
  if (mouseX>39  && mouseX <241 && mouseY>549 && mouseY<1001)//building coords
  {
    winR = 0;//if mouse is on building, lights turn off
    winG = 0;
    winB = 0;
  }
  else{
    winR = 255;//else building on
    winG = 255;
    winB = 191;
  }
  if(keyIsDown(82)===true)//r to reset
  {
    scene = mainMenu;
  }
  textSize(40);
  fill(0);
  text('Press R to return to main menu!',1350,50);
}
function game3()//for final complete custom building game
{
 strokeWeight(3);
  fill(92,169,4);//green    
  rect(0,900,1920,180);//foreground
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
  text('thin',1400,200);
  text('thick',1700,200);
  text('short',1400,450);
  text('tall',1700,450);
  text('blue',1400,700);
  text('green',1570,700);
  text('purple',1770,700);

  genBuild = new BuildingClass(mouseX, mouseY, w, h, bColor);

  if(keyIsDown(81)===true){
    genBuild.Create();//THIS SHOULD C
    print('building created');
  }
  else if(keyIsDown(82)===true)//r to reset
  {
    scene = mainMenu;
  }
  else{
    scene = game3;
  }
  textSize(40);
  fill(0);
  text('Click to customize your buildings!',1320,50);
  fill(255);
  text('Press R to return to main menu!',1350,900);
  text('Press Q to create buildings!',50,50)
}
function endScene()
{
  fill(255);
  rect(0,0,width,height);
 
  
 
  for(let i = 1; i<width; i++){
    noFill();
    strokeWeight(1);
    stroke('#800080');
    rect(0,0,10*i,10*i);
  }
  fill(0);
  textSize(200);
   text('The End!',width/2-400,height/2);
  if(keyIsDown(82)===true)//r to reset
  {
    scene = mainMenu;
  }
  textSize(40);
  fill(0);
  text('Press R to return to main menu!',1350,50);
}
function mouseDragged(){
    moonX ++;
    moonY ++;
  }
function keyPressed(){//changes color of building 2
  if(key === 'c'){
    twoR = random(72, 231);
    twoG = random(0, 170);
    twoB = random(30, 255);
  }
  else if(key === 'm'){
  twoR = 112;
  twoG = 41;
  twoB = 99;
  }
}