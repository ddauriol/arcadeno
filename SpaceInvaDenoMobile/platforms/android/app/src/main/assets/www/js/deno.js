class Deninho {
  constructor() {
    this.r = width * 0.1;
    this.x = width / 2;
    this.y = height - this.r;
    this.accelerationMove = accelerationMove;
    this.life = 3;
    this.toDeath = false;
  }

  show() {
    image(denoImg, this.x, this.y, this.r, this.r);
  }

  move(dir) {
    if (this.x < 0) {
      this.x = this.r;
    } else if (this.x + this.r > width) {
      this.x = width - this.r;
    } else {
      this.x += dir * this.accelerationMove;
    }
  }

  setLife() {
    this.life = this.life - 1;
    if (this.life < 1) {
      this.toDeath = true;
    }
  }
}
