
/* Kate C

blue building at night but like cooler
hoover over building to turn off the light

*/

let winR = 255;
let winG = 255;
let winB = 191;
let moonX = 450;
let moonY = 55;

function setup() 
{
  createCanvas(1000, 500);
  background(0,0,200); //blue bg
}

function draw() 
{
  


  //text
  textSize(15);
  fill(255);
  text('hover mouse over the building!',40,25);
  text('click and drag to make the moon move!', 260,380);

//shrubfence thing
  strokeWeight(3);
  fill(92,169,4);//green    
  rect(0,400,1000,100);
//blue building
  strokeWeight(5);
  fill(0,0,100);//blue
  rect(40,40,200,460); // blue outlined rect on left side
//blue building doors
  strokeWeight(3);
  fill(0,0,200); //lighter blue
  rect(100,430,80,70);//doors
  line(140,430,140,500);//line seperating doors
 //moon
  strokeWeight(3);
  fill(240,240,191); //yellow
  circle(moonX,moonY,80); // moon on top right
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
