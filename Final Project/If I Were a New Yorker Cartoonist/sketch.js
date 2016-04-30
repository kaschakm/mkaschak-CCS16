var lexicon;
var button;
var talk;

function setup() {
  createCanvas (windowWidth,windowHeight);
  lexicon = new RiLexicon();
  
  //button creates jokes when pressed 
  button = createButton('High Brow Joke Creator');
  button.position(10, 20);
  button.mousePressed(press);
}

function draw() {
  background (0,0,140);
  cat (width/2, height/2);
  catTwo (width/4, height/2);
  house (width/3, height/3);
  press ();
}

//when pressed the last three words of the joke change
function press() {
  noStroke();
  fill (0,0,140);
  rect (0, height-15, width, -25);
  push();
  var talk = "The next time we go to a gala we should" + " " + lexicon.randomWord("vb") + " " + lexicon.randomWord("jj") + " " + lexicon.randomWord("nn") + ("!");
  noLoop();
  textSize(20)
  fill(255);
  text(talk, width/15, height-20);
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
  ellipse (48, 100, 30, 20); //mouth
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
  fill (200, 200, 0);
  ellipse (350, -200, 150, 150); //moon
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}