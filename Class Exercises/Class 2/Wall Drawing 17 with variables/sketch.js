var lineGap;
var x;
var y;
var z;
var a;
var b;
var c;
function setup() {
  createCanvas (370,370);
  lineGap = 80
  x = 40
  y = 100
  z = 190
  a = 300
  b = 90
  c = 10
}

function draw() {
  background (150);
  // part one
  rect (c, x, x*2, a);
  line (c, x*2, b, 190);
  line (c, x*4, b, 280);
  // part two
  rect (y, x, x*2, 300);
  line (y, lineGap, 180, x*2);
  line (y, lineGap*2, b*2, 160);
  line (y, lineGap*3, b*2, 240);
  line (y, a, 180, a);
  // part three
  rect (z, x, x*2, a);
  line (z, a, 270, 220);
  line (z, 200, 270, 120);
  // part four
  rect (280, x, x*2, 300);
  line (300, x, 300, 340);
  line (340, x, 340, 340);
}