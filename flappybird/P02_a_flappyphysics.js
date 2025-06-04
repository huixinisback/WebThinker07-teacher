let bird, floor;
let flapMidImg, bg;

// load the image files first 
function preload() {
  bg = loadImage('assets/background-day.png');
  flapUpImg = loadImage('assets/yellowbird-upflap.png');
  flapDownImg = loadImage('assets/yellowbird-downflap.png');
  flapMidImg = loadImage('assets/yellowbird-midflap.png');
  base = loadImage('assets/base.png');
}

function setup() {
  new Canvas(400, 600);
  // Activity 1: Add in bird with configured physics and other world physics items like L01_physics.js
  // World gravity

  // Floor to bounce bird 
  
  // Bird Sprite with physics and image

}

function draw() {
  background = image(bg, 0, 0, width, height); // background image
  // Activity: Move bird up on mouse press/ press space, refer to L01_physics.js

  // Activity: Change image according to flying action/ falling

}
 