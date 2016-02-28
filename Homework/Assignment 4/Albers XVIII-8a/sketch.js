var x = 105;
var y = 60;
var w = 255;

function setup() {
createCanvas (455,600);
noStroke();
}

function draw() {
background (221,210,188);

//middle full rectangle
fill(110,115,120);
rect(x,y,w,480);

//top dark gray rectangle
fill(53,61,70);
rect(x,y,w,155);

//light gray rectangle
fill(192,200,206);
rect(x,240,w,25);

//turquoise rectangle
fill(153,165,160);
rect(x,265,w,17);

//dark gray 2
fill(53,61,70);
rect(x,282,w,17);

//turquoise 2
fill(153,165,160);
rect(x,299,w,30);

//light gray 2
fill(192,200,206);
rect(x,380,w,30);

//darkest gray
fill(26,35,47);
rect(x,410,w,5);

//dark gray 3
fill(53,61,70);
rect(x,415,w,40);
}