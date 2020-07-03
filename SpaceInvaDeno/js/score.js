function loadFonts() {
  orbitron = loadFont("assets/fonts/Orbitron-Regular.ttf");
}

function setFont() {
  fill("rgba(255,255,255,0.75)");
  textFont(orbitron);
  textSize(28);
}

function setScore() {
  text(
    "LEVEL: " + level + "    SCORE: " + score + "   HS: " + scoreSH,
    width * 0.55,
    height * 0.05
  );
  if (lifes > -1) {
    image(lifeImgs[lifes], width * 0.93, height * 0.0);
  }
}
