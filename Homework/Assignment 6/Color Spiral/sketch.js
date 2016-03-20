var angle = 0.0

function setup() {
  createCanvas (windowWidth, windowHeight);
    background (0,0,75);
}

function draw() {

  translate (width/2, height/2);
  rotate (angle);
  from = color(25, 180, 40);
  to = color(225, 40, 25)
  interA = lerpColor(from, to, 1);
  interB = lerpColor(from, to, 2);
  fill (from);
  rect(frameCount % (width/2),0,30,10);
  fill (interA);
  rect(frameCount % (width/3),0,30,10);
  fill (to)
  fill (interB);
  angle += 3.0;
    }
    
