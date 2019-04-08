var xspeed = 2.5;
var yspeed = 1.5;
var xpos = 0;
var ypos = 0;
var rc= 50;

var img1;

function preload() {
  img1= loadImage("dvd.png");
}


function setup() {
  createCanvas(400, 400);
  r = random(255);
  g = random(255);
  b = random(255);
}

function draw() {
  background(0, 2, 35);
  
  
  
  fill(r,g,b, 200);
  stroke(r,g,b);
  ellipse(xpos, ypos, rc, rc);
  
  image(img1,xpos-19,ypos-8);
  
  if (xpos > width - rc/2 || ypos > height - rc/2 || xpos <0 +rc/2 || ypos <0 + rc/2 ) {
    r =random(255);
    g = random (255);
    b = random (255);
  }
  
  if (xpos > width - rc/2 || xpos < 0 + rc/2) {
    xspeed = -xspeed;
  }
  if (ypos > height - rc/2) {
    yspeed = -yspeed;
  } 
  if (xpos < 0 + rc/2) {
    xspeed = 2.5;
  }
  if (ypos <0 + rc/2) {
    yspeed = 1.5;
  }
  xpos += xspeed;
  ypos += yspeed;
  
}