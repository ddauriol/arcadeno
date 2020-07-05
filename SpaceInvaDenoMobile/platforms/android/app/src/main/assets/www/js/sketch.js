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
  // Definições da tela
  createCanvas(windowWidth, windowHeight);
  fullscreen();

  // Carregar background
  background(00);

  // Config Fonts
  setFont();

  // load SetUp
  loadSetup();

  // load Sounds
  loadSounds();

  // load Button
  loadButtons();
}

function keyReleased() {
  if (key == "p") {
    gamePause();
  }
}

function keyPressed() {
  if (key == " ") {
    shoot();
  }
  if (keyCode == RIGHT_ARROW) {
    moveDeninhoRigth();
  } else if (keyCode == LEFT_ARROW) {
    moveDeninhoLeft();
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
    text("Game Pausado", width * 0.325, height / 2);
  }

  // Reset Display
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
    background(00);
    fill("rgba(255,255,0,1)");
    text("Game Over", width * 0.35, height / 2);
    noLoop();
  }
}
