var angle = 0.0;

function setup() {
  createCanvas (windowWidth,windowHeight);
  background (35);
  translate (width/2, height/2);
}
function draw() { 
  dates (); 
  rotate (angle);

  //interior lines
  fill (0,0,180)
  rect(frameCount % (width/3),0,40,10);

  //exterior circle
  fill (140,0,0);
  ellipse(width/3,height/5,70,50);

  angle += 11.0;
}
  //random dates at the bottom right of the screen
  function dates(){  
    push()
    noStroke();
    fill (35);
    rect(width/5, height/2,180,-25);
    textSize(24);
    fill(0,160,0);
    text('Date:' + chance.date({string: true}), width/5, height/2-3);
    pop();
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}