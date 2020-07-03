class Enemie {
  constructor(x, y, r, enemieType) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.enemieType = enemieType;
    this.toDelete = false;
    this.points = 0;
  }

  show() {
    let type;
    if (this.enemieType == "octo") {
      type = octoImg;
      this.points = 30;
    } else if (this.enemieType == "rust") {
      type = rustImg;
      this.points = 20;
    } else {
      type = KralenImg;
      this.points = 10;
    }

    image(type, this.x, this.y, this.r, this.r);
  }

  down() {
    this.toDelete = true;
    if (accelerationEnemy < 0) {
      accelerationEnemy = -accelerationEnemyMax + enemies.length;
    } else {
      accelerationEnemy = accelerationEnemyMax - enemies.length;
    }
  }

  move() {
    this.x += accelerationEnemy;
  }

  moveY() {
    this.y += 5;
  }

  short() {}
}
