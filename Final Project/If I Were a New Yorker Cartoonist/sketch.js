var lexicon;
var slider;
var button;
var talk;

function setup() {
  createCanvas (windowWidth,windowHeight);
  lexicon = new RiLexicon();
  
  //positions slider on top left
  slider = createSlider(0,255,100);
  slider.position (10,10);
  slider.style('width', '80px');
  
  //button below slider 
  button = createButton('High Brow Joke Creator');
  button.position(10, 40);
  button.mousePressed(press);
}

function draw() {
  press ();
  
  //slider changes the background color
  var val = slider.value();
  background (0,0,(val));
  
  cat (width/2, height/2);
  catTwo (width/4, height/2);
  house (width/3, height/3);
}

//pressing the button will bring up a new joke
function press() {
  push();
  var talk = "The next time we go to a gala we should" + " " +      lexicon.randomWord("vb") + " " + lexicon.randomWord("jj") + " " + lexicon.randomWord("nn") + ("!");
  //noLoop();
  textSize(26);
  textAlign(CENTER);
  fill(255);
  text(talk, width/2, height-40);
  //clear();
  pop();
}

function cat (x, y) {
  push ();
  translate (x, y);
  fill (120);
  ellipse (50,50, 150, 150); //head
  triangle (-10, -60, -5, 0, 35, -25); //left ear
  triangle (120, -60, 75, -20, 110, 5); //right ear
  fill (20,125,60);
  ellipse (23, 33, 20, 15); //left eye
  ellipse (73, 33, 20, 15); //right eye
  fill (40);
  triangle (50, 75, 30, 60, 70, 60)//nose
  fill (0);
  ellipse (48, 100, random (40), random(10)); //mouth
  frameRate (9);
  fill (200,50,100);
  triangle(50, 125, -20, 275, 120, 275); //dress
  pop();
}

function catTwo (x, y) {
  push ();
  translate (x, y);
  fill (120);
  ellipse (50,50, 150, 150); //head
  triangle (-10, -60, -5, 0, 35, -25); //left ear
  triangle (120, -60, 75, -20, 110, 5); //right ear
  fill (110,90,70);
  ellipse (23, 33, 20, 15); //left eye
  ellipse (73, 33, 20, 15); //right eye
  fill (40);
  triangle (50, 75, 30, 60, 70, 60)//nose
  fill (0);
  ellipse (48, 100, 40, 10); //mouth
  fill (100,0,200);
  triangle(50, 125, -20, 275, 120, 275); //dress
  pop();
}

function house (x,y) {
  push();
  translate (x, y);
  noStroke ();
  fill (200,200,100);
  rect (30, 20, 300, -100); //base
  fill (150,150,100);
  triangle (30, -80, 180, -200, 330, -80); //roof
  fill (0);
  rect (160, 20, 40, -60); //door
  fill (0);
  rect (80, -20, 30, -20); //left window
  fill (0);
  rect (240, -20, 30, -20); //right window
  fill (255, 255, 0);
  ellipse (350, -200, 150, 150); //sun
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}