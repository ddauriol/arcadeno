class Generic {
  constructor(genericImg, x, y, speed, r) {
    this.r = r;
    this.x = x;
    this.img = genericImg;
    this.y = y + height - this.r;
    this.speed = speed;
    this.index = width;
  }

  show() {
    image(this.img, this.x, this.y, this.r, this.r);
  }

  animate() {
    this.index -= this.speed;
    this.x -= this.speed * 10;

    if (this.x < 0 - this.r) {
      this.x = width * 1.0;
    }
  }
}
