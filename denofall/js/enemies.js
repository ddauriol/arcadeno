class Enemie {
  constructor(animation, x, y, speed, r, node) {
    this.r = r;
    this.x = x;
    this.y = y + height - this.r;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = speed;
    this.index = width;
    this.isNode = node;
  }

  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y, this.r, this.r);
  }

  animate() {
    this.index -= this.speed;
    this.x -= this.speed * 10;

    if (this.isNode) {
      if (this.x < width / 2) {
        sndPsychofinal.play();
        this.isNode = false;
      }
    }

    if (this.x < 0 - this.r) {
      this.x = width * 1.25;
      score = score + 1;
    }
  }
}
