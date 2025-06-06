let scoreLabel;
let bg;

function preload() {
   bg = loadImage('assets/background-day.png');
}

function setup() {
    new Canvas(400, 600);
    scoreLabel = new Sprite(width/2, 50, 50,50);
    // Activity: Design a Sprite that will display your score 

}

function draw() {
  image(bg, 0, 0, width, height); // draw background
}
