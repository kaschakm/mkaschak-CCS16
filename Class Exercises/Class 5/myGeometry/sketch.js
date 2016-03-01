var myGeometry = ["Shaq", 240,120, (255,0,0)];

function setup() {
  createCanvas (500,500);

  for (var i = 0; i < 5; i++){
    myGeometry[i] = random(5);
  }
}

function draw() {
background (0,0,255);
for(var i =0; i < myGeometry.length; i++){
    fill(255,0,0);
     ellipse(width/2, height/2, myGeometry[i] * 20, myGeometry[i] * 20);
     
     text("geometry's name is: " + myGeometry[0], width/2, height - 100);
    
  }
}