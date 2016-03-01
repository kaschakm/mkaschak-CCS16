var mySecondArray = [];

function setup() {
  createCanvas (500,500);
  
  for(var i = 0; i < 5; i++){
  mySecondArray.push(random(12));
}

print(mySecondArray);
}
function draw() {
  background(0,255,0);
  for(var i =0; i <= mySecondArray.length-1; i++){
    fill(0,100,25,100);
    rect(width/2, height/2, mySecondArray[i] * 10, mySecondArray[i] * 10);
  }
}

function mousePressed(){
    mySecondArray.push(random(22));
    print(mySecondArray.length);
}