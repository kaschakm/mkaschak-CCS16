var lines = []; 
var lexicon;
var words = [];

function preload () {
  lines = loadStrings ('assets/Gettysburg Address.txt');
}

function setup() {
  createCanvas(400, 400);
  lexicon = new RiLexicon();
  textSize (16);
  text(lines, 0,0,width,height);
}

  function mousePressed() {

  var params = {
  };
  
 counts = RiTa.concordance(lines.join(" ")); 
  
  //replace all nouns with random nouns
  push();
  for (var k in counts) {
    if (counts.hasOwnProperty(k)) {
      var tags = RiTa.getPosTags(k);
      if (tags[0] == 'nn') {
        words.push(RiTa.replaceAll = lexicon.randomWord('nn'));
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
        words.push(RiTa.replaceAll = lexicon.randomWord('jj'));
        pop();
      }
    }
  }
      

}
function draw() {
  background(50);
  textSize(20);
  fill(255);
  text(words.join(' '), 10, 10, width-20, height-20);
}