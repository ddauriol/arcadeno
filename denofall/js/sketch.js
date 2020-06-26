let score = 0;

function preload() {
  loadImagens();
  loadSounds();
  orbitron = loadFont("assets/fonts/Orbitron-Regular.ttf");
}

function setup() {
  loadSetup();
  fill("rgba(255,255,0,0.75)");
  textFont(orbitron);
  textSize(50);
}

function keyPressed() {
  if (key == " ") {
    deninho.jump();
  }
}

function draw() {
  // Carregar background
  background(bgImg);

  // Carregar o Sol
  sun.show();
  sun.animate();

  // Carregar Deninho
  deninho.show();
  deninho.move();

  // Score
  text(score, width * 0.9, height * 0.1);

  for (let enemie of enemies) {
    enemie.show();
    enemie.animate();
    if (deninho.hits(enemie)) {
      sndYesSir.stop();
      noLoop();
      sndNo.play();
      image(endGameImg, 0, 0, 1366 * scale, 768 * scale);
      text("Game Over", width * 0.65, height * 0.45);
    }
  }
}
