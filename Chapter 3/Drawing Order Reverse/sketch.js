function setup() {
  createCanvas (480, 120);
  strokeWeight (12);
}

function draw() {
background (204);
strokeJoin (ROUND);
rect (40, 25, 70, 70);
strokeJoin (BEVEL);
rect (140, 25, 70, 70);
strokeCap (SQUARE);
line (270, 25, 340, 95);
strokeCap (ROUND);
line (350, 25, 420, 95); 
}