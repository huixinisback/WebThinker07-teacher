// Activity: Declare the group variable
let fruits;

function preload() {
  // Activity: Load in the background image and peach image
  dojoBG = loadImage('assets/dojobackground.png');// background image
  peachImg = loadImage('assets/peachwhole.png'); // your sliced image 
}

function setup() {
  new Canvas(800, 600);
  world.gravity.y = 10; // Make things fall
  // Activity: Create the group
  fruits = new Group();
  // Activity: Define group properties
  fruits.drag = 0.5; // slow down horizontally
}

function draw() {
  clear();
  // Activity: Show background images
  image(dojoBG, 0, 0, width, height); // draw image to fill canvas

  // Spawn a new fruit every 60 frames (~once a second)
  /*
  Frame Count is a built-in variable in p5.js.
  It counts how many frames have been drawn since the sketch started.
  It increments automatically every frame in draw().
 */

  // Activity: Spawn fruit every half a second
  if (frameCount % 30 === 0) {
    spawnFruit();
  }

  // Activity: Remove fruits that fall below the screen, by looping though fruits
  for (let fruit of fruits) {
    if (fruit.y > height + 50) {
      fruit.remove();
    }
  }
  // Challenge: Remove fruits that fall below the screen, with one line
  // fruits.cull(60,60,10,10)
}

// Activity: Function to create a fruit, and shoot it upwards with differring magnitudes and curves
function spawnFruit() {
  let fruit = new fruits.Sprite(random(100, 700), height + 20, 40); // spawn at bottom
  fruit.img = peachImg
  fruit.vel.y = random(-10, -15); // shoot upward
  fruit.vel.x = random(-3, 3); // give sideways curve
}
