var base;
var rEye;
var LEye;
var brow1;
var brow2;
var browTest=0;
var hair;
var r, g, b;
var filterCount=0;
var rEyeX, rEyeY, lEyeX, lEyeY;


function setup() {

  createCanvas(370, 447);
  r=random(0, 255);
  g=random(0, 255);
  b=random(0, 255);
  background(255);
  base = loadImage("data/base.jpg");
  rEye = loadImage("data/rEye.png");
  lEye = loadImage("data/lEye.png");
  brow1 = loadImage("data/eyevrow1.png");
  brow2 = loadImage("data/eyebrow2.png");
  hair = loadImage("data/hair.png");
}

function draw() {

  background(255);

  r=constrain(r, 0, 255);
  g=constrain(g, 0, 255);
  b=constrain(b, 0, 255);
  var rEyeX=constrain((mouseX-148)/4, -5, 2);
  var rEyeY=constrain((mouseY-102)/4, -1, 1);
  var lEyeX=constrain((mouseX-117)/4, -5, 2);
  var lEyeY=constrain((mouseY-102)/4, 0, 1);

  image(base, 0, 0);
  image(lEye, 117+lEyeX/2+rEyeX/2, 101+lEyeY);
  image(rEye, 148.5+rEyeX/2+lEyeX/2, 101+rEyeY);
  tint(r, g, b, 150);

  if (browTest==0) {
  } else if (browTest==1) {
    image(brow1, 0, 0);
    image(brow1, 195, 180);
  } else if (browTest==2) {
    image(brow2, 0, 0);
    image(brow2, 195, 180);
  }

  image(hair, 0, 0);
  noTint();
    if (filterCount>7)filterCount=0;
  else if (filterCount==1)filter(THRESHOLD);
  else if (filterCount==2)filter(GRAY);
  else if (filterCount==3)filter(OPAQUE);
  else if (filterCount==4)filter(POSTERIZE,2);
  else if (filterCount==5)filter(DILATE);
  else if (filterCount==6)filter(BLUR,2);
  else if (filterCount==7)filter(ERODE);
  
  noFill();
  rect(301, 260, 59, 59);
  fill(255, 0, 0);
  rect(300, 0, 20, r);
  fill(0, 255, 0);
  rect(320, 0, 20, g);
  fill(0, 0, 255);
  rect(340, 0, 20, b);


}


function mousePressed() {
  browTest++;
  if (browTest>2)browTest=0;
}

function keyTyped() {

  if (key=='r')r+=10;
  else if (key=='g')g+=10;
  else if (key=='b')b+=10;
  else if (key=='t')r-=10;
  else if (key=='h')g-=10;
  else if (key=='n')b-=10;
  else if (key=='z')filterCount++;
}