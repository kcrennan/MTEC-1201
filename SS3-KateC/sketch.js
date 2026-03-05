/* Kate C

blue building at night but like cooler
hoover over building to turn off the light
drag mouse to make the moon move

*/

let winR = 255;
let winG = 255;
let winB = 191;
let moonX = 570;
let moonY = 80;

let twoR = 112;
let twoG = 41;
let twoB = 99;

function setup() 
{
  createCanvas(1000, 500);
  background(0,0,200); //blue bg
}

function draw() 
{
  //bg
fill(0,0,200);
rect(0,0,width,height);
  //text
  textSize(15);
  fill(255);
  text('hover mouse over the building!',40,25);
  text('click and drag to make the moon move!', 530,30);
  text('press c to change the color!',300,60)
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
 //window
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
function mouseDragged(){
    moonX ++;
    moonY ++;
  }

function keyPressed(){
  if(key === 'c'){
    twoR = random(72, 231);
    twoG = random(0, 170);
    twoB = random(30, 255);
  }
}
