var table;
var flightsClimbed = [];
function preload() {
 table = loadTable("data/FlightsClimbed.csv", "csv","header");
}
function setup() {
  createCanvas(400,400);
  textSize(24);
 flightsClimbed = table.getRow(2).arr;
}

function draw(){
  background(255);
  translate(0,height/2);
for(var i = 2; i < flightsClimbed.length-2; i++){
     translate(25,0);
     push();
     rect(0,0,20,flightsClimbed[i] * 5.0);
     pop();

  } 
}