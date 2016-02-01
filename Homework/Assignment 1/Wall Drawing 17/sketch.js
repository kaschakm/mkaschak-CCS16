function setup() {
  createCanvas (370,370);
}

function draw() {
  background (150);
  // part one
  rect (10, 40, 80, 300);
  line (10, 80, 90, 190);
  line (10, 160, 90, 280);
  // part two
  rect (100, 40, 80, 300);
  line (100, 80, 180, 80);
  line (100, 160, 180, 160);
  line (100, 240, 180, 240);
  line (100, 300, 180, 300);
  // part three
  rect (190, 40, 80, 300);
  line (190, 300, 270, 220);
  line (190, 200, 270, 120);
  // part four
  rect (280, 40, 80, 300);
  line (300, 40, 300, 340);
  line (340, 40, 340, 340);
}