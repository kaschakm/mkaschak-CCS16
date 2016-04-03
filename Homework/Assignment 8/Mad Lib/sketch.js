var gettysburg = []; 
var lexicon;
var words = [];
partsOfSpeech = RiTa.getPosTags;

function preload () {
  gettysburg = loadStrings ('assets/Gettysburg Address.txt');
}

function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  words = RiTa.tokenize(gettysburg)
}

  function mousePressed() {

//counts = RiTa.concordance(gettysburg.join(" ")); 
  
  //replace all nouns with random nouns
      push();
      for(var i=0; i < partsOfSpeech == 'nn'; i++){
       words.push(RiTa.replaceWord(('nn'),lexicon.randomWord('nn')));
      pop();
      }
    }

function draw() {
  background(50);
  textSize(20);
  fill(255);
  text(words.join, 10, 10, width-20, height-20);
}