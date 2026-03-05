//kate c
//
// if statement; one image; text; function millis
// every 10 seconds a taxi goes across
let time;
let timer = 10;
let building;
let taxi;
let taxiX = 0;
let taxiY = 1500
function preload(){
  building =  loadImage('/libraries/images/buildings.png');
  taxi = loadImage('/libraries/images/taxi.png');
}
function setup() {
  createCanvas(3000, 1600);
  imageMode(CENTER);
}

function draw() {
  background(220);
  time = millis()/1000;

  image(building,1300,815); //buildings
  fill(255);
  textSize(50)
  text(time ,width/4,height/10);

  if(time <= timer)
  {//code to have taxi move across 
     timer+=10;

  image(taxi,taxiX+=7,taxiY);
  
  }
  
}

