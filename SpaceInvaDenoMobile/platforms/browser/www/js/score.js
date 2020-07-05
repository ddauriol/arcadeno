function loadFonts() {
  orbitron = loadFont("assets/fonts/Orbitron-Regular.ttf");
}

function setFont() {
  fill("rgba(255,255,255,0.75)");
  textFont(orbitron);
  textSize(width * 0.045);
}

function setScore() {
  text(
    "LEVEL: " + level + "    HS: " + scoreSH + "\nSCORE: " + score,
    width * 0.4,
    height * 0.045
  );
  if (lifes > -1) {
    let lifeImgSize = width * 0.1;
    image(
      lifeImgs[lifes],
      width * 0.95 - lifeImgSize,
      height * 0.025,
      lifeImgSize,
      lifeImgSize * 0.73
    );
  }
}
