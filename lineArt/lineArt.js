var i=0;
var j=0;
var z=0;


function setup() {
  background(255);
  size(1024, 1024);
}

function draw() { 
  stroke(0);
  strokeWeight(2);
  if (i<width) {
    i=i+10;
    stroke(0);
    line(0, i, i, height);
    line(width-0, height-i, width-i, height-height);
    line(0, i, width-i, 0);
    line(width-0, height-i, i, height);
    line(i, 0, width-i, height);
    line(width, height-i, 0, i);
  }
}