function setup(){
  createCanvas(500,500);
}
function draw(){
  var x = 250;
  var y = 0;
  
  background(50,100,200);
   
   //move when mouse is pressed
   if (mouseIsPressed === true){
    stroke (200);
    beginShape(LINES);
  while(y < width && y < height) {
      vertex(y,y);
      y+=0;
      y+=10;
  }
  endShape();
  }
 
 //line when no mouse press
  stroke(200);
  beginShape(LINES);
  while(x < width && y < height) {
      vertex(x,y);
      x+=0;
      y+=10;
  }
  endShape();
 

}