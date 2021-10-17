class Cover{
  constructor(image){
    this.x = 500;
    this.y = 350;
    this.x2 = 500;
    this.y2 = 350;
    this.vx = 0;
    this.vy = 0;
    this.speed = 2.4;
    this.size = 100;
    this.active = false;
    this.image = image;
    this.opacity = 255;
    this.opacity2 = 255;
    this.fading = false;
    this.button = false;
  }

  update(cursor){
    this.display();
    this.hoverEffect(cursor);
    this.move();
    this.switchState(cursor);
    this.fade();
  }

  hoverEffect(cursor){
    let d = dist(this.x, this.y, cursor.x, cursor.y);
    if (d < this.size/2 + cursor.size/2){
      this.active = true;
      // this.back = true;
      // this.move();
    }
    // else{
    //   this.goBack();
    // }
  }

  move(){
    if (this.active){
      this.x += this.vx;
      this.vx = - this.speed;
      // Stop
      if (this.x < 420){
        this.vx = 0;
        this.speed = 0;
      }
    }

  }

  switchState(cursor){
    if (this.active){
      let d1 = dist(this.x2, this.y2, cursor.x, cursor.y);
      if ((d1 < this.size/2 + cursor.size/2) && mouseIsPressed === true){
        this.fading = true;
      }
    }
  }

  fade(){
    if (this.fading){
      this.opacity -= 8;
      if(this.opacity < 1){
        this.opacity2 -= 20;
        if (this.opacity2 < 1){
          this.button = true;
        }
      }
    }
  }

  display(){
    push();
    // fill(247, 205, 124);
    // rect(this.x2, this.y2, this.size);

    image(this.image, this.x2, this.y2);

    fill(28, 30, 27, this.opacity);
    rect(250, 350, 400, 700);
    rect(250, 350, 400, 100);
    rect(750, 350, 400, 700);
    rect(750, 350, 400, 100);
    rect(500, 175, 1000, 250);
    rect(500, 175, 100, 250);
    rect(500, 525, 1000, 250);
    rect(500, 525, 100, 250);

    fill(247, 173, 99, this.opacity2);
    rect(this.x, this.y, this.size);
    pop();
  }
}
