var wh = 500;
var gap = 50;
var y2 = 480;
var ygap = 95;
var t = 10;
var x2 = 70;

function setup() {
  createCanvas (wh, wh);
}

function draw() {
 //beige frame
  background (255, 255, 190);
    //aqua square
    fill (0, 210, 190) 
    rect (t, t, y2, y2); 
      //yellow square
      fill (255,255, 0);
      rect (gap, t+x2, wh-gap*2, y2-ygap);
        //mustard square
        fill (235, 204,0);
        rect (gap*2, t+x2*2, wh-gap*3-gap, y2-ygap*2);
          //brown square
          fill (139, 69, 19);
          rect (gap*3, t+x2*3, wh-gap*5-gap, y2-ygap*3);
}