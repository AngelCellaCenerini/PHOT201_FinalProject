class Cursor {
  // Customized Cursor
  constructor(){
    this.x = undefined;
    this.y = undefined;
    this.size = 15;
  }

  display(){
   // Display Customized Cursor
   // Associate Object with Cursos Coordinates
   this.x = mouseX;
   this.y = mouseY;
   // Main Round Body (White)
   push();
   fill(255, 150);
   ellipse(this.x, this.y, this.size);
}
}
