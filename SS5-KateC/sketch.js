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
noFill();
rectMode(CENTER);
}

function draw() 
{
  if(pmouseX!=mouseX && pmouseY!=mouseY ){
for (let i = 20; i < width; i +=20 )
  {
  stroke(random(0,255),random(0,255),random(0,255));
  ellipse(mouseX,mouseY,i,i);
}
  }

}
