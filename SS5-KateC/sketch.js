/*

Building upon your chosen theme, create a responsive sketch in p5.js involving user input and iteration. You may use the previous assignments as a starting point, or begin a completely new sketch.

The sketch must include the following:

At least one while statement
At least two for loops that create a pattern of some kind
A developed concept and techniques moving beyond the in-class demos
Include as a comment at the top of your sketch: your name, title, any instructions for the user

*/


function setup()
{
  createCanvas(1000, 1000);
}

function draw() 
{
  background(220);
  //blue building
  strokeWeight(5);
  fill(0,0,100);//blue
  rect(40,540,200,460); // blue outlined rect on left side

//blue building doors
  strokeWeight(3);
  fill(0,0,200); //lighter blue
  rect(100,930,80,70);//doors
  line(140,930,140,1000);//line seperating doors

 //windows blue building
  fill(255,255,191);//window color
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

}
