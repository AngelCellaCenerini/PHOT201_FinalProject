"use strict";

/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/
let cursor = undefined;

let cover = undefined;
let pumkinsImage = undefined;

let state = `cover`;

/**
Description of preload
*/
function preload() {
  pumkinsImage = loadImage(`assets/images/P01.jpg`);

}


/**
Description of setup
*/
function setup() {
  createCanvas(1000, 700);
  background(28, 30, 27);
  noStroke();
  noCursor();
  rectMode(CENTER);
  imageMode(CENTER);

  // Create Objects
  cursor = new Cursor();
  cover = new Cover(pumkinsImage);

}


/**
Description of draw()
*/
function draw() {
  push();
  fill(28, 30, 27);
  rect(500, 350, 1000, 700);
  pop();




  if (state === `cover`){

    cover.update(cursor);
  }

  if(cover.button){
    push();
    fill(247, 173, 99, 220);
    rect(100, 100, 30);
    pop();
  }

  cursor.display();

}

function mouseIsPressed(){
  cover.update(cursor);
}
