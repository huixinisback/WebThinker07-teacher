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
  world.gravity.y = 10;

  // Floor to bounce bird
  floor = new Sprite(0, height - 20, 400, 125, 'static' );
  floor.img = base;
  // Bird with full physics and image
  bird = new Sprite(width / 2, 200, 30, 30, 'dynamic');
  bird.img = flapMidImg;
  bird.mass = 2;         // heavier = stronger pull from gravity
  bird.drag = 0.02;      // air resistance
  bird.bounciness = 0.5; // how much it bounces when hitting floor
 
}

function draw() {
  background = image(bg, 0, 0, width, height); // background image
  // Activity: Move the bird foward, observe that the bird leaves the canvas
  bird.vel.x = 3; // bird moves forward

  if (kb.presses('space') || mouse.presses()) {
    bird.vel.y = -5; // flap upward
  }

  // Activity: Camera tracking the player, observe foreground staying behind 
  camera.x = bird.x; // camera tracking bird (player)
  // Activity: Foreground tracking camera, observe everything looks static (it is moving together)
  floor.x = camera.x; // floor moves with the screens to make it stay on the screen instead of a infinite floor 
  
   // change image according to  flying action/ falling
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
 