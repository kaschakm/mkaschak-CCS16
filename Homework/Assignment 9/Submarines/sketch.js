function Particle(loc) {
  this.loc = loc;
  this.vel = new p5.Vector(random(-2,2), random(-3,0));
  this.lifespan = 255;
}

Particle.prototype = {
  constructor: Particle,
  update : function(){  
    this.loc.add(this.vel);
    this.lifespan -=1.5;
  },
  display : function(){
    fill((random(this.lifespan)),(random(this.lifespan)),(random(this.lifespan)));
    ellipse(this.loc.x, this.loc.y, 10, 50);
  }  
};

var particles = [];

function setup(){
  createCanvas(600,500);
  for (var i=0; i< 15; i++){
    particles[i] = new Particle(new p5.Vector(width/2, height));

  }
}

function draw(){
  background(20,30,180);
  for (var i=0; i < particles.length; i++){
    particles[i].update();
    particles[i].display();
  }
}