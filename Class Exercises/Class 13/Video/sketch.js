var video;

function setup() {
  video = createVideo(['media/out.mp4'])
  video.loop();
  video.hide();
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(255);
  image(video, width/2, height/2);
}