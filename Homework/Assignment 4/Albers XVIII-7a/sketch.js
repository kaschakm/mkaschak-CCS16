var x = 35;
var y = 38;
var w = 385;

function setup() {
createCanvas (455, 607);
noStroke();
background (163,149,138);
}

function draw() {
//middle full rectangle
fill (40,88,156);
rect(x, y, w, 532);

//top light blue rectangle
fill(48,102,134);
rect(x,y,w,50);

//light blue 2
fill(48,102,134);
rect(x,171,w,20);

//mustard rectangle
fill(204,140,50);
rect(x,191,w,63);

//dark blue rectangle
fill(0,80,150);
rect(x,254,w,2);

//blackish rectangle
fill(46,56,71);
rect(x,288,w,5);

//red rectangle
fill(168,53,54);
rect(x,293,w,25);

//mustard 2
fill(204,140,50);
rect(x,318,w,39);

//almost light blue 3
fill(48,100,128);
rect(x,357,w,50);

//almost blackish 2
fill(46,60,73);
rect(x,407,w,29);

//red rectangle
fill(168,53,54);
rect(x,436,w,10);

//almost light blue 4
fill(48,100,128);
rect(x,446,w,42);

//mustard 3
fill(204,140,50);
rect(x,488,w,13);

}