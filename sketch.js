let gui;
let b;

function setup() {
  createCanvas(400, 400);
  
  gui = createGui();
  b = createButton("Button", 50, 50);
}

function draw() {
  background(220);
  drawGui();

  if(b.isPressed) {
   a=rect(200,200,90,90)
  }
}


