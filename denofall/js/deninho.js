class Deninho {
  constructor(animation, x, y) {
    this.r = 150;
    this.x = x;
    this.y = y + height - this.r;
    this.animation = animation;
    this.w = this.animation[0].width;
    this.len = this.animation.length;
    this.speed = 0.25;
    this.index = 0;
    this.vy = 0;
    this.gravity = 0.25;
  }

  jump() {
    if (this.y <= height - this.r && this.y > height * 0.55) {
      this.vy = -9;
      sndYesSir.play();
    }
  }

  hits(enemie) {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = enemie.x + enemie.r * 0.5;
    let y2 = enemie.y + enemie.r * 0.5;
    return collideCircleCircle(x1, y1, this.r * 0.5, x2, y2, enemie.r);
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
  }

  show() {
    let index = floor(this.index) % this.len;
    image(this.animation[index], this.x, this.y, this.r, this.r);
    this.index += this.speed;
  }
}
