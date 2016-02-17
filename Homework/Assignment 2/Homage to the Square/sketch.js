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
  background (224, 204, 167);
    //aqua square
    fill (7, 112, 112) 
    rect (t, t, y2, y2); 
      //yellow square
      fill (253,232, 19);
      rect (gap, t+x2, wh-gap*2, y2-ygap);
        //mustard square
        fill (224, 184,38);
        rect (gap*2, t+x2*2, wh-gap*3-gap, y2-ygap*2);
          //brown square
          fill (122, 75, 0);
          rect (gap*3, t+x2*3, wh-gap*5-gap, y2-ygap*3);
}