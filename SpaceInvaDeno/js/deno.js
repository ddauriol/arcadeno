class Deninho {
  constructor() {
    this.r = 50;
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
    this.x += dir * this.accelerationMove;
  }

  setLife() {
    this.life = this.life - 1;
    if (this.life < 1) {
      this.toDeath = true;
    }
  }
}
