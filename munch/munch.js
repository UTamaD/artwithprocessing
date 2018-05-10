var a = 5;
var img;
var countX = 0;
var loc = [];
function preload() {
  img = loadImage("data/portrait1.jpg");
}

function setup() {

  createCanvas(300, 450);
  image(img, 0, 0);
  img.loadPixels();
}

function draw() {
  for (var i=0; i<300/a; i++) {
    loc[i] = [];
    for (var j=0; j<450/a; j++) {
      loc[i][j] = img.get(i*a, j*a);
    }
  }
  background(255);
  for (var i=0; i<300/a; i++) {
    for (var j=0; j<450/a; j++) {
      fill(loc[i][j]);
      rect(i*a, j*a, a, a);
    }
  }
}

function mousePressed() {
  if (a==5)a=10;
  else if (a==10)a=15;
  else if (a==15)a=25;
  else if (a==25)a=30;
  else if (a==30)a=150;
}