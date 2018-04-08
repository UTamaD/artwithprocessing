var i=0;
var j=0;
var z=0;


function setup() {
  background(255);
  createCanvas(512,512);
}

function draw() { 
  if (i<width) {
    i=i+4;
    stroke(0);
    line(0, i, i, height);
    line(width-0, height-i, width-i, height-height);
    line(0, i, width-i, 0);
    line(width-0, height-i, i, height);
    line(i, 0, width-i, height);
    line(width, height-i, 0, i);
  }
}
