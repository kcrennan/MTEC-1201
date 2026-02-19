
/* Kate C

blue building at night?

*/


function setup() 
{
  createCanvas(1000, 500);
    background(0,0,200); //blue bg

 
}

function draw() 
{
  let winR = 255;
  let winG = 255;
  let winB = 191;

  strokeWeight(3);
  fill(92,169,4);//green    
  rect(0,400,1000,100);//shrubfence thing

  strokeWeight(5);
  fill(0,0,100);//blue
  rect(40,40,200,460); // blue outlined rect on left side

  strokeWeight(3);
  fill(0,0,200); //lighter blue
  rect(100,430,80,70);//doors
  line(140,430,140,500);//line seperating doors

 //moon
  strokeWeight(3);
  fill(240,240,191); //yellow
  circle(450,55,80); // moon on top right

  if (mouseX>39  && mouseX <241)
  {
   /* winR = 0;
    winG = 0;
    winB = 0;
*/
    winR -10;
    winG -10;
    winB -10;
  }

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


}