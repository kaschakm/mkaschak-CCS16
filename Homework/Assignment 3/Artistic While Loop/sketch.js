function setup(){
  createCanvas(500,500);
}
function draw(){
  var x = 250;
  var y = 0;
  
  background(50,50,100);
   
 //line image
  stroke(200);
  beginShape(LINES);
  strokeWeight (3);
  while(x < width && y < height) {
      vertex(x,y);
      vertex(y,x);
      x+=0;
      y+=10;
  }
  endShape();
}