var angle = 0.0;

function setup() {
  createCanvas (windowWidth,windowHeight);
  background (25);
  textSize(32);
  fill(0,160,0);
  translate (width/2, height/2);
}
function draw() { 
  //random dates at the bottom of the screen
  text(chance.date({string: true}),-80,height/2-3);

  rotate (angle);

  //interior lines
  fill (0,0,170)
  rect(frameCount % (width/3),0,40,10);
  
  //exterior circle
  fill (130,0,0);
  ellipse(width/3,height/5,70,50);

  angle += 11.0;
}  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}