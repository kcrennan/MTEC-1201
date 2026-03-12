//kate c
//
// if statement; one image
// every 10 seconds a taxi goes across
let currentTime = 0;
let savedTime =0;
let timer;
let building;
let taxi;
let taxiX = 0;
let taxiY = 1535
function preload(){
  building =  loadImage('/libraries/images/buildings.png');
  taxi = loadImage('/libraries/images/taxi.png');
}
function setup() {
  createCanvas(3000, 1600);
  imageMode(CENTER);
}

function draw() 
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
  {//code to have taxi move across 
    image(taxi,taxiX+=5,taxiY);

    if(taxiX >width){
      taxiX =0; //rest taxi when reached end
    }
  
  savedTime=currentTime;
  }
  
}

