var i=1;
var I=1;
var x1, y1, x2, y2, x3, y3, x4, y4;
var A;
var U=constrain(0,0,height);
var B, C;
var xPos=width/2, yPos=height/2;
var X;
var Y;
var gravity=1;
var speed=10;

function setup() {
  createCanvas(2048,1024)
  background(185);
 // frameRate(40);
  xPos=width/2;
  yPos=height/2;
  U=0;
  speed = 3;
  gravity=2;
}

function draw() {

  i=i+I;
  B=random(-2, 2);
  C=random(-2, 2);
  speed = speed + gravity;


  //body move

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
  // if (keyPressed&&mouseX+A>150) {
  //   A=A-20;
  // }


  //move
  if (mousePressed) {
    xPos=mouseX;
    yPos=mouseY;
    speed=5;
    gravity=4;
    U=0;
    A=0;
    translate(xPos, yPos);
  }
  stroke(140, 0, 0);
  background(185);
  fill(0);

  //move

  var X=constrain(xPos+A, 175, width-175);
  var Y=constrain(yPos+U+i*10, 125, height-125);
  translate(X, Y);


  //gravity

  if (Y<height-126) {
    U=U+speed;
    
  }

  //body
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
  //made by 20182713
  if (keyPressed) {
    if (key == CODED) {   
      if (keyCode==UP) {
        speed=5;
        gravity=4;
        U=U-30;
      }
    }
  }
}

function keyPressed(){
  if (key == CODED) {
    if (keyCode == LEFT) {
      A=A-30;
    } else if (keyCode==RIGHT) {
      A=A+28;
    } else if (keyCode==DOWN) {
      U=U+10;
    }
 
  }
}