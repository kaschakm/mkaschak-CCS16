var gettysburg = []; 
var rl;
var words = [];

function preload () {
  gettysburg = loadStrings ('assets/Gettysburg Address.txt');
}

function setup() {
  createCanvas(400, 400);
  textSize(20);
  rl = new RiLexicon();
  words = RiTa.tokenize(gettysburg)
}

  function mousePressed() {

counts = RiTa.concordance(gettysburg.join(" ")); 
  
  //replace all nouns with random nouns
  push();
  for (var k in counts) {
    if (counts.hasOwnProperty(k)) {
      var tags = RiTa.getPosTags(k);
      if (tags[0] == 'nn') {
        words.push(RiTa.replaceWord = rl.randomWord('nn'));
        //println(words.length)
          pop();
      }
    }
  }
  
  //replace all adjectives with random adjectives
  push();
  for (var j in counts) {
    if (counts.hasOwnProperty(j)) {
      var tag = RiTa.getPosTags(j);
      if (tag[0] == 'jj') {
        words.push(RiTa.replaceWord = rl.randomWord('jj'));
        //println(words.length)
          pop();
      }
    }
  }
}
function draw() {
  background(50);
  fill(255);
  text(words.join(' '), 10, 10, width-20, height-20);
}