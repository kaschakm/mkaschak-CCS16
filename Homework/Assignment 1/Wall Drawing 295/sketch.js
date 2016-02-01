function setup() {
  createCanvas (800, 450);
}

function draw() {
  background (0);
  noFill();
  rect (40, 20, 120, 200);
  ellipse (400, 120, 300, 100);
  line (600, 20, 600, 250);
  stroke (255);
  triangle (40, 240, 190, 240, 330, 420);
  arc (600, 240, 200, 250, 0, PI);
  quad(400, 60, 90, 110, 299, 98, 30, 76);
}