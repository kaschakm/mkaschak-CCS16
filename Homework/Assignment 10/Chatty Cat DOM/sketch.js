var lexicon;
var slider;
var button;
var myP;
var talk;

function setup() {
  createCanvas (500,500);
  lexicon = new RiLexicon();
  
  //positions slider on top left
  slider = createSlider(0,255,100);
  slider.position (10,10);
  slider.style('width', '80px');
  
  //button below slider 
  button = createButton('Boo!');
  button.position(25, 40);
  button.mousePressed(press);
}

function draw() {
  //slider changes the background color
  var val = slider.value();
  background (val);
  cat (275, 225);
}

//the button will briefly flash a cat in a random location
function press() {
  var pressed = cat (random(500),random(500));
}

//clicking the mouse wil create a sentence
function mouseClicked(){
  var talk = "We should" + " " + lexicon.randomWord("vb") + " " + lexicon.randomWord("jj") + " " + lexicon.randomWord("nn");
  myP = createP(talk);
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


