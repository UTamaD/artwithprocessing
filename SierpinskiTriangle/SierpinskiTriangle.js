

function makeTri( x1,  y1,  x2,  y2,  x3,  y3,  N) {
  if (N!=0) { 
    triangle((x1+x3)/2, (y1+y3)/2, (x1+x3)/2-(x2-x1)/2, (y1+y3)/2, x1, y3);
    triangle((x2+x3)/2, (y2+y3)/2, (x2+x3)/2+(x2-x1)/2, (y2+y3)/2, x2, y3);
    triangle(x1+(x2-x1)/4, y2-(y3-y2)/2, x1+(x2-x1)*3/4, y2-(y3-y2)/2, (x1+x2)/2, y2);
    makeTri((x2+x3)/2, (y2+y3)/2, (x2+x3)/2+(x2-x1)/2, (y2+y3)/2, x2, y3, N-1);
    makeTri(x1+(x2-x1)/4, y2-(y3-y2)/2, x1+(x2-x1)*3/4, y2-(y3-y2)/2, (x1+x2)/2, y2, N-1);
    makeTri((x1+x3)/2, (y1+y3)/2, (x1+x3)/2-(x2-x1)/2, (y1+y3)/2, x1, y3, N-1);

  }
}


var M=4;
function setup() {
  createCanvas(1000, 1000);
  background(255);
  noFill();
}

function draw() {
  background(255);
  triangle(width/2, 0, 0, height, width, height);
  triangle(width/4, height/2, width*3/4, height/2, width/2, height);
  makeTri(width/4, height/2, width*3/4, height/2, width/2, height, M);
}

function mousePressed() {
  M++;
}

