var triangles = 20;
var scalar = 1;

function setup() {
  createCanvas (500,500);
}

function draw() {
  background (50,100,200);
  scale(scalar);
  
  for(var i = 1; i <= triangles; i++){
    fill((200),(100),(50));
      beginShape(TRIANGLE_FAN);
      vertex(230, 200);
      vertex(230, 60);
      vertex(368, 200);
      vertex(230, 340);
      vertex(88, 200);
      vertex(230, 60);
      endShape();
  }
   if (mouseIsPressed === true){
  scalar-=0.001;
   }
}
