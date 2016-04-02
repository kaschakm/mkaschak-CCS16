var lines = []; 
var lexicon;
var rs;
var amount;
var partsOfSpeech = [];
var words = [];
//var shrttxt;
//endsWith(suffix); RiString
var counts;
var noun;

function preload () {
  lines = loadStrings ('assets/Gettysburg Address.txt');
  
}

function setup() {
  createCanvas (400, 400);
    lexicon = new RiLexicon();

  textSize (16);
  text(lines, 0,0,width,height);

counts = RiTa.concordance(lines.join(" ")); 
  //shrttx = loadStrings('assets/Gettysburg Address.txt');
  rs = new RiString();
  rs.analyze();
 words = RiTa.tokenize(lines);
 partsOfSpeech = RiTa.getPosTags(lines);
}

function mousePressed() {
   noun = RiTa.replaceAll = ('nn',lexicon.randomWord('nn'));
}

