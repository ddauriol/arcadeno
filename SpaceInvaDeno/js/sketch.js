let score = 0;
let scoreSH = 0;
let level = 1;
let puaseGame = false;
let lifes = 2;

let bugShoots = [];
let enemiesShoots = [];

let nodeBoss = [];

function preload() {
  loadImagens();
  loadFonts();
}

function setup() {
  loadSetup();
  loadSounds();
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
    sndDenoShoot.play();
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

  // Config Socre
  setScore();

  // Set FrameRate
  frameRate(fr);

  // Condição de PauseGame
  if (puaseGame == false) {
    // Carregar Deninho
    deninho.show();

    // Carregando nuvens
    for (var i = 0; i < clouds.length; i++) {
      clouds[i].show();
    }

    // Node Show
    if (nodeBoss.length <= 0) {
      let nodeShow = random(1, 100);
      if (nodeShow < 1.2) {
        newNode = new Boss();
        nodeBoss.push(newNode);
      }
    }
    bossActions();

    // Action Shoot
    denoShoot();

    // Action Enemies
    enemiesActions();
  } else {
    text("Game Pausado", width * 0.4, height / 2);
  }

  if (enemies.length <= 0) {
    level = level + 1;
    yEnemyDown = yEnemyDown * upToLvel;
    bugShoots = [];
    enemiesShoots = [];
    clouds = [];
    accelerationShootEnemy = accelerationShootEnemy * upToLvel;
    accelerationEnemyMax = accelerationEnemyMax * upToLvel;
    accelerationEnemy;
    loadSetup();
  }

  // Game Over
  if (lifes < 0) {
    fill("rgba(255,255,0,1)");
    text("Game Over", width * 0.4, height / 2);
    noLoop();
  }
}
