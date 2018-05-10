var img;
var a=0.5;
var r = 0;
var g = 0;
var b = 0;
var countX = 0;
var loc = [];
function preload() {
  img = loadImage("data/portrait1.jpg");
}

function setup() {

  createCanvas(300, 450);
  image(img, 0, 0);
  img.loadPixels();
  for (var i=0; i<60; i++) {
    loc[i] = [];
    for (var j=0; j<90; j++) {
      loc[i][j] = img.get(i*5,j*5);
    }
  }
}

function draw() {
  background(255);
  for (var i=0; i<60; i++) {
    for (var j=0; j<90; j++) {
      fill(loc[i][j]);
      if(countX==0)rect(i*5+random(-a,a), j*5+random(-a,a), 5, 5);
      else if(countX==1)ellipse(i*5+random(-a,a), j*5+random(-a,a), 5, 5);
    }
  }

}

function mousePressed() {
  countX=1-countX;
}