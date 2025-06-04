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
  pipes = new Group();
  // Assign group properties
  pipes.img = pipe; // pipe image
  pipes.layer = 0; // The new pipes should be drawn at the lowest layer, so the score and floor will show on top.

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
  if (frameCount === 1) {
    spawnPipePair();
  }

  //spawn pipe every 1.5 s
  if (frameCount % 90 === 0) {
    spawnPipePair();
  }

  // Remove offscreen pipes, loop through the group to check the sprites
  // for (let pipe of pipes) {
  //   if (pipe.x < bird.x-210){
  //     pipe.remove();
  //     console.log("Deleted");
  //   }
  // }
  //Challenge: Instead of looping through the group, use a group function, uncomment below
  pipes.cull(100,100,10,600); // mainly for left side to be removed, the rest put a number out of the spawnable range the pipe is in 
}

// Activity: Pipe function to create pipes
function spawnPipePair() {
  // configure where the gap will spawn at
  let gap = 50; 
  let midY = random(200, height - 200); // random(min, max)
  // create sprites
  let topPipe = new pipes.Sprite(bird.x + 300, midY - gap / 2 - 200, 52, 320, 'static'); // offset X to infornt of the bird, offset Y by the length of the pipe
  let bottomPipe = new pipes.Sprite(bird.x + 300, midY + gap / 2 + 200, 52, 320, 'static');
  // configure sprite properties
  topPipe.rotation = 180;
  topPipe.passed = false; // Add custom property to one pipe per pair (top or bottom)
  // add sprite to group
  pipes.add(topPipe); // add topPipe sprite to group
  pipes.add(bottomPipe); // add bottomPipe sprite to group
}