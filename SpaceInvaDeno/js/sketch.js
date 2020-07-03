let score = 0;
let scoreSH = 0;
let puaseGame = false;
let lifes = 2;

let bugShoots = [];
let enemiesShoots = [];

function preload() {
  loadImagens();
  loadFonts();
}

function setup() {
  loadSetup();
}

function keyReleased() {
  if (key == "p") {
    if (puaseGame == true) {
      puaseGame = false;
    } else {
      puaseGame = true;
    }
  }
}

function keyPressed() {
  if (key == " ") {
    let bugShoot = new Shoot(deninho.x, deninho.y);
    bugShoots.push(bugShoot);
  }
  if (keyCode == RIGHT_ARROW) {
    deninho.move(1);
  } else if (keyCode == LEFT_ARROW) {
    deninho.move(-1);
  }
}

function draw() {
  // Carregar background
  background(00);

  setScore();

  // Set FrameRate
  frameRate(fr);

  if (puaseGame == false) {
    // Carregar Deninho
    deninho.show();

    // Carregando nuvens
    for (var i = 0; i < clouds.length; i++) {
      clouds[i].show();
    }

    denoShoot();

    enemiesActions();
  } else {
    text("Game Pausado", width * 0.4, height / 2);
  }

  if (lifes < 0) {
    fill("rgba(255,255,0,1)");
    text("Game Over", width * 0.4, height / 2);
    noLoop();
  }
}
