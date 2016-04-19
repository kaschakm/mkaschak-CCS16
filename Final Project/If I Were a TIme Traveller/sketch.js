var angle = 0.0;

function setup() {
  createCanvas (700,700);
  background (140,140,0);
}

function draw() { 
  translate (width/2, height/2);
  rotate (angle);

  //interior lines
  fill (0,0,75)
  rect(frameCount % (width/3),100,30,10);
  
  //exterior circle
  fill (75,0,0);
  ellipse(10,300,70,40);

  //loop of dates
  textSize(15);
  fill (0,75,0);
  text(chance.date({string: true}),width/2,10);

  angle += 11.0;
}  

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}