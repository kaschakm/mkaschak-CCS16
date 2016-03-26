var waveLengthOne = 50.0;
var waveLengthTwo = 200.0;
var pointCount = 0;
var angle = 1.0;
var amplitude = 200;

function setup(){
  createCanvas(450, 450);
  background (20, 50, 70);
}
function draw(){
  //specified random colors to fill in as the shape is drawn
fill(random(120),random(50),random(200));

//Start drawing shape from the middle of the page. Changing PI will change the speed, utilize frameRate if done.
translate(width/2, height/2);
beginShape();
  for(var i=0; i < pointCount; i++){
  angle = i / waveLengthOne * PI;
  var y = sin(angle)* amplitude;
  angle = i / waveLengthTwo * PI;
  var x = sin(angle)* amplitude;
  vertex(x,y); 
  }
endShape();
  pointCount++;
}