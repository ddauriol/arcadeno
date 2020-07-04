class Cloud {
  constructor(x, y, r) {
    this.r = r;
    this.x = x;
    this.y = y;
    this.toDelete = false;
    this.life = 8;
    this.skins = ["snow", "snow", "storm", "storm", "rain", "rain", "", ""];
    this.cloudType = this.skins[this.life - 1];
  }

  show() {
    let skin;
    if (this.cloudType == "rain") {
      skin = cloudImg_1;
    } else if (this.cloudType == "storm") {
      skin = cloudImg_2;
    } else if (this.cloudType == "snow") {
      skin = cloudImg_3;
    } else {
      skin = cloudImg_0;
    }

    image(skin, this.x, this.y, this.r, this.r);
  }

  setLife() {
    this.life = this.life - 1;
    this.cloudType = this.skins[this.life - 1];
    if (this.life < 1) {
      this.toDelete = true;
    }
  }
}
