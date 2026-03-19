//Kate C MIDTERM WIP
//
// idk if i want to do something more interactive or passive
// def wanna keep the city-scape concept i have going so far
//maybe a game? city sim?
//ooo like a map and you drive a car around and hit certain stops and interact with them
//tint function works on images
//
let currentTime = 0;
let savedTime =0;
let timer;
let building;
let mainMenu;
let taxi;
let taxiX = 0;
let taxiY = 1544;
let winR = 255;
let winG = 255;
let winB = 191;
let moonX = 570;
let moonY = 80;
let twoR = 112;
let twoG = 41;
let twoB = 99;
//let start;
//let gameOne;
//let gameTwo;
//let gameThree;
//let silly;
function preload()
{
  building =  loadImage('/libraries/images/buildings.png');
  taxi = loadImage('/libraries/images/taxi.png');
}
function setup() 
{
  createCanvas(3000, 1600);
  imageMode(CENTER);
}

function draw() 
{/*
if(keyIsPressed===true)
  {
    keyIsDown(66)//b
    {
      homemadeBuildings();
    }
  }
  else{
    mainMenu();{

    }
  }
  */
 mainMenu();
}

function buildings()
{
  background(137, 207, 240);
  currentTime = millis()/1000;
  image(building,1300,815); //buildings
  fill(255);
  textSize(60)
  //text(currentTime,width/8,height/10); trouble shooting
  //text(savedTime ,width/8,height/8);
  text(`${round(currentTime, 2)}`, 5, 50, 90);
  timer =10;

  if(currentTime-savedTime <= timer)//want it to happen every 10 seconds 
  {
    image(taxi,taxiX+=5,taxiY); //code to have taxi move across 
    if(taxiX>width)
    {
      taxiX =0; //rest taxi when reached end
    }
    savedTime=currentTime;
  }

  
}
function homemadeBuildings()
{
fill(0,0,200);
rect(0,0,width,height);
  //text
  textSize(15);
  fill(255);
  text('hover mouse over the building!',40,25);
  text('click and drag to make the moon move!', 530,30);
  text('press c to change the color!',300,50);
  text('press r to reset the color.c',310,70);


//shrubfence thing
  strokeWeight(3);
  fill(92,169,4);//green    
  rect(0,400,1000,100);
  //moon
  strokeWeight(3);
  fill(240,240,191); //yellow
  circle(moonX,moonY,80); // moon on top right
//blue building
  strokeWeight(5);
  fill(0,0,100);//blue
  rect(40,40,200,460); // blue outlined rect on left side
  //2nd building
  fill(twoR,twoG,twoB);//newbuilding for ss3
  rect(320,80,150, 420);
//blue building doors
  strokeWeight(3);
  fill(0,0,200); //lighter blue
  rect(100,430,80,70);//doors
  line(140,430,140,500);//line seperating doors
 //2ndbuilding doors
 fill(twoR+30,twoG+30,twoB+30);
 rect(355,430,80,70);
 line(395,430,395,500);
 //windows blue building
  fill(winR,winG,winB);//window color
  rect(80,50,30,50);//window 1R
  rect(170,50,30,50);//window 1L
  rect(80,120,30,50);//window 2R
  rect(170,120,30,50);//window 2L
  rect(80,190,30,50);// window 3R
  rect(170,190,30,50);//window 3L
  rect(80,260,30,50);//window 4R
  rect(170,260,30,50);//window 4L
  rect(80,330,30,50);//window 5R
  rect(170,330,30,50);//window 5L
  //windows building 2 
  fill(255,255,191);
  rect(340,100,30,50); //1R
  rect(420,100,30,50); //1L
  rect(340,170,30,50); //2R 
  rect(420,170,30,50); //2L
  rect(340,240,30,50); //3R
  rect(420,240,30,50); //3L
  rect(340,310,30,50); //4R
  rect(420,310,30,50); //4L
  

  //windows and window RGB if statement
   if (mouseX>39  && mouseX <241 && mouseY>39 && mouseY<500)//building coords
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
}
function mainMenu(){
  fill(112,41,99);
 rect(0,0,width,height);

strokeWeight(30);
line(800,0,800,160);

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
  else if(key === 'r'){
  twoR = 112;
  twoG = 41;
  twoB = 99;
  }
  //else if(key === 'b')
  //{

  //}
}


/*
function gameOne()
{
background(255);
}
function gameTwo()
{
background(255);
}
function gameThree()
{
background(255);
}*/ 