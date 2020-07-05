class Shoot {
  constructor(x, y) {
    this.r = width * 0.025;
    this.x = x;
    this.y = y;
    this.accelerationShoot = accelerationShoot;
    this.toDelete = false;
  }

  lost() {
    this.toDelete = true;
  }

  show() {
    image(bugImg, this.x, this.y, this.r, this.r);
  }

  move() {
    this.y -= this.accelerationShoot;
  }

  hits(enemie) {
    var distance = dist(this.x, this.y, enemie.x, enemie.y);
    if (distance < this.r + enemie.r * 0.5) {
      return true;
    } else {
      return false;
    }
  }
}

class EnemiesShoot {
  constructor(x, y) {
    this.r = width * 0.025;
    this.x = x;
    this.y = y + 80;
    this.accelerationShootEnemy = accelerationShootEnemy;
    this.toDelete = false;
  }

  lost() {
    this.toDelete = true;
  }

  show() {
    image(shootImg, this.x, this.y, this.r, this.r);
  }

  move() {
    this.y += this.accelerationShootEnemy;
  }

  hits(obj) {
    var distance = dist(this.x, this.y, obj.x, obj.y);
    if (distance < this.r + obj.r * 0.35) {
      return true;
    } else {
      return false;
    }
  }
}
