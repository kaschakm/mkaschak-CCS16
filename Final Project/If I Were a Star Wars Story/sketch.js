var words = [];
var rl;
var y;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(20);
  rl = new RiLexicon();
  y = height;
  
  //crawl from Return of the Jedi
  words = RiTa.tokenize("Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt. Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star. When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...");
  
  //speed that the words are replaced
  //frameRate (0.1);
}
    
function draw() {
 background(0);
  translate (15, 20);
  scroll(0,y);
  y-=1;
  if(y < 0){
    y = height;
}
}

  //combine all of the text into a function
  function scroll(x,y) {
  //opening text
  fill(33, 131, 138);
  text("A long time ago in a galaxy far, far away . . .",x,y);
  
  //plot text
  fill(250, 210, 10);
  text(words.join(' '), x, y+300, width, height);
  }
  
  function randomizeText() {
  //replace all verbs with random verbs
     for(var i=0; i < words.length; i++){
       if (rl.isVerb(words[i])){
         words[i] = rl.randomWord('vb');
        }
        
  //replace all adjectives with random adjectives
        else if (rl.isAdjective(words[i])){
          words[i] = rl.randomWord('jj');
        }
        }      
  }

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}     