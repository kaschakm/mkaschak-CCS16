var table;
var flightsClimbed = [];
function preload() {
 table = loadTable("data/FlightsClimbed.csv", "csv","header");
}
function setup() {
  createCanvas(500,500);
  //textSize(24);
 flightsClimbed = table.getRow(0).arr;
}

function draw(){
  background(255);
  foot (250,200);

  translate(0,height/2);
for(var i = 0; i < flightsClimbed.length; i++){
     translate(25,0);
     push();
     foot(width/2,height/2,20,-flightsClimbed[i] * 5.0);
     pop();
}
}
function foot (x, y){
push();
translate (x,y);
fill (100,100,40);
ellipse (50,50, 60, 150); //base
ellipse (30,-27, 20, 35); //toe1
ellipse (30,-27, 20, 35); //toe2
ellipse (30,-27, 20, 35); //toe3
ellipse (30,-27, 20, 35); //toe4
ellipse (30,-27, 20, 35); //toe5
pop();
} 
