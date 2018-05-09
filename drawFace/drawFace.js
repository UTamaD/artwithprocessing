var redd;
var redV;
var img;
var area = 10;
var shapeCount=0;
function setup() {
  createCanvas(473, 578);
  background(0);
  noStroke();
  imageMode(CENTER);
  img =loadImage("portrait1.jpg");
  img.loadPixels();
  redd = color(255,100,200);
}

function draw() {
   area = 20+mouseX/40+mouseY/40;
  var x = int(random(width));
  var y = int(random(height));
  // var loc=x+y*473

  //var loc=x+y*img.width;
  //loc=50;
  // fill(img.pixels[loc], img.pixels[loc], img.pixels[loc]);
  copy(img,mouseX,mouseY,area,area,mouseX,mouseY,area,area);


}


function mousePressed() {
  background(0);
}