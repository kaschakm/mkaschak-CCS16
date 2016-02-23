var h = 240;
var s = 100;
var b = 100;

var rectStep = 40;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  colorMode(HSB, 285,100,100);
  for(var x=0; x < width; x += rectStep){
    noStroke();
    fill(h+x % 255,s+x % 100,b+x % 100);
    rect(x,0,rectStep,height);
  }
}

function keyPressed(){
  if(key === '1'){
    h = random(h+1);
  }
  else if(key === '2'){
    s = random(100);
  }
  else if(key === '3'){
    b = random(100);
  }
}