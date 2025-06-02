function preload(){
  // Activity 2: Use an image for background
  //bg = loadImage('assets/background-day.png'); // images need to be loaded before the script runs
}

function setup() {
  new Canvas(400, 600); // this should be the same size as the image. 
}

function draw() {
  // Activity 1: Edit the background colour of a canvas
    //background("blue"); // background colour using css standard colours
    //background("#0452"); // background color using hex code
    //background("rgba(224, 131, 174, 0.5)"); // background color using rgba, preferred as editor allows us to select colour using colour picker
  // Activity 2: Use an image for background
    image(bg, 0, 0, width, height); // images appear in the background as 2d.
  }
