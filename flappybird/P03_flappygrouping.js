let bird, floor;
let pipes;
let flapMidImg,flapDownImg, flapUpImg, pipe, bg;

// load the image files first 
function preload() {
  bg = loadImage('assets/background-day.png');
  flapUpImg = loadImage('assets/yellowbird-upflap.png');
  flapDownImg = loadImage('assets/yellowbird-downflap.png');
  flapMidImg = loadImage('assets/yellowbird-midflap.png');
  pipe = loadImage('assets/pipe-green.png');
  base = loadImage('assets/base.png');
}

function setup() {
  new Canvas(400, 600);
  world.gravity.y = 10;

  // Floor for bounce
  floor = new Sprite(200, height - 20, 400, 125, 'static' );
  floor.img = base;

  // Bird with full physics
  bird = new Sprite(width / 2, 200, 30, 30, 'dynamic');
  bird.img = flapMidImg;
  bird.mass = 2;         // heavier = stronger pull from gravity
  bird.drag = 0.02;      // air resistance
  bird.bounciness = 0.5; // how much it bounces when hitting floor
  //Activity: Initialise Group for Pipes
  
  // Assign group properties

  // Floor to bounce bird
  floor = new Sprite(0, height - 20, 400, 125, 'static' );
  floor.img = base;
}

function draw() {
  background = image(bg, 0, 0, width, height); // background image
  bird.vel.x = 3; // bird moves forward

  if (kb.presses('space') || mouse.presses()) {
    bird.vel.y = -5; // flap upward
  }
  camera.x = bird.x; // camera tracking bird (player)
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

  // Activity: Spawn pipes
  // Spawn the first pipe
  
  //spawn pipe every 1.5 s
 
  //Remove offscreen pipes, loop through the group to check the sprites

  // Check if the pipe sprite is out of the view, reference distance from bird/camera

  //Challenge: Instead of looping through the group, use a group function, uncomment below
  
}

// Activity: Pipe function to create pipes
  // configure where the gap will spawn at

  // create sprites

  // configure properties of sprites

  // add sprites to group
  