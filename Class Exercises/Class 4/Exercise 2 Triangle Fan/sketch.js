var h = 240;
var s = 100;
var b = 100;

var angleStep = 40;
function setup() {
  createCanvas(windowWidth, windowHeight);
  radius = 360;
}

function draw() {
  background(255);
  colorMode(HSB, 285,100,100);
  for(var x=0; x < width; x += angleStep){
    noStroke();
    fill(h+x % 255,s+x % 100,b+x % 100);
     beginShape(TRIANGLE_FAN);
    vertex(width/2,height/2);
    for(var angle =0; angle <= 360; angle += angleStep){
      var vx = width/2 + cos(radians(angle))* radius;
      var vy = height/2 + sin(radians(angle))* radius;
      vertex(vx, vy);
      fill(angle, mouseX, mouseY);
      stroke(angle,mouseX,mouseY);
    }
  endShape();
  }
}