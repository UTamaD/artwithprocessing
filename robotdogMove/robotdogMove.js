var i=1;
var I=1;
var x1, y1, x2, y2, x3, y3, x4, y4;
var A;
var B, C;


function setup() {
  createCanvas(1024, 512);
  background(255);
}

function draw() {

  i=i+I;
  B=random(-2, 2);
  C=random(-2, 2);


  x1=y1=0;
  if (i>=3) {
    I=I*-1;
  }
  if (i<=1) {
    I=I*-1;
  }


  if (i==1) {
    x1=-140;
    y1=90;
    x2=-200;
    y2=30;
    x3=80;
    y3=90;
    x4=90;
    y4=30;
  } else if (i==2) {
    x1=-100;
    y1=110; 
    x2=-160;
    y2=50;
    x3=110;
    x4=110;
    y3=110;
    y4=50;
  } else if (i==3) {
    x1=-60;
    y1=90;
    x2=-120;
    y2=30;


    x3=140;
    y3=90;
    x4=140;
    y4=33;
  }
  if ((A+mouseX)>150) {
    A=A-20;
  }

  if (mousePressed) {
    A=0;
  }
  stroke(140, 0, 0);
  background(255);
  fill(0);
  translate(mouseX+A, mouseY+i*10);
  strokeWeight(20);
  stroke(0);
  line(-100, 50, x1, y1);
  line(-160, 0, x2, y2);
  line(100, 50, x3, y3);
  line(90, 0, x4, y4);
  curve(0, -20, 90, -20, 180+i*20, -90+i*30, 270+i*B*10, i*50);
  stroke(140, 0, 0);


  strokeWeight(6);
  quad(-120, 60, -100, -60, 120, -60, 100, 60);
  quad(-100, -60, -150, -100, 70, -100, 120, -60);
  quad(-100, -60, -150, -100, -170, 0, -120, 60);
  strokeWeight(2);
  triangle(-128, -79, -95, -60, -110, -108);
  triangle(-151, -95, -122, -86, -134, -128);
  fill(255, 0, 0);
  ellipse(-136, -28, 51, 75);

  fill(0);
  ellipse(-136, -28, 45, 67);
  fill(255, 0, 0);
  ellipse(-136, -28, 35, 55);
}