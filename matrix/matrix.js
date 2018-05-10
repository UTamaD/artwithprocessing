var img;
var a;
var r = 0;
var g = 0;
var b = 0;
var countX = 0;
function preload() {
  img = loadImage("data/portrait1.jpg");
}

function setup() {

  createCanvas(350, 450);
  image(img, 0, 0);
  loadPixels();
}

function draw() {
  background(255);

  for (var i=0; i<90; i++) {
    for (var j=0; j<70; j++) {
      a=pixels[i*350*20+j*16];

      if (countX==0) {
        r=0;
        g=0;
        b=0;
      } else  if (countX==1) {
        r=50;
        g=0;
        b=0;
      } else if (countX==2) {
        r=0;
        g=50;
        b=0;
      } else if (countX==3) {
        r=0;
        g=0;
        b=50;
      }

      fill(a+r+int(random(0, mouseX/20)), a+g+int(random(0, mouseX/20)), a+b+int(random(0, mouseX/20)));

      rect(j*5+2, i*5+2, 5, 5);
    }
  }
}

function mousePressed() {
  countX++;
  if (countX>3)countX=0;
}
