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
  world.gravity.y = 10;

  // Floor to bounce bird 
  floor = new Sprite(200, height - 20, 400, 125, 'static' );
  floor.img = base;
  
  // Bird Sprite with full physics and image
  bird = new Sprite(width / 2, 200, 30, 30, 'dynamic');
  bird.img = flapMidImg;
  bird.mass = 2;         // heavier = stronger pull from gravity
  bird.drag = 0.02;      // air resistance
  bird.bounciness = 0.5; // how much it bounces when hitting floor
}

function draw() {
  background = image(bg, 0, 0, width, height); // background image
  // Activity: Move bird up on mouse press/ press space, refer to L01_physics.js
  if (kb.presses('space') || mouse.presses()) {
    bird.vel.y = -5; // flap upward
  }

  // Activity: Change image according to flying action/ falling
  if (bird.vel.y < -1) {
    bird.img = flapUpImg; // flying upward
    bird.rotation = -30
  } else if (bird.vel.y > 1) {
    bird.img = flapDownImg; // falling
    bird.rotation = 30
  } else {
    bird.img = flapMidImg; // neutral
    bird.rotation = 0
  }

}
 