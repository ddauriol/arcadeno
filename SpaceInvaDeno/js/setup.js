// Global
let scale = 0.75;
let fr = 30;
let accelerationMove = 25;
let accelerationShoot = 5;
let accelerationShootEnemy = 12;
let accelerationEnemyMax = 21;
let accelerationEnemy;

let deninho;
let enemies = [];
let clouds = [];

function loadSetup() {
  // Definições da tela
  createCanvas(1366 * scale, 768 * scale);

  // Config Fonts
  setFont();

  // Criando o Deninho
  deninho = new Deninho();

  // Criando o Enemies
  let xInit = 50;
  let yInit = 55;
  let rEnemy = 80;
  let EnemiesColumns = 5;
  let enemieTypes = ["", "rust", "rust", "octo"];

  for (i = 0; i < enemieTypes.length; i++) {
    for (j = 0; j < EnemiesColumns; j++) {
      let enemie = new Enemie(
        xInit + j * rEnemy + xInit * j,
        yInit,
        rEnemy,
        enemieTypes[i]
      );
      enemies.push(enemie);
    }
    yInit = yInit + rEnemy;
  }

  accelerationEnemy = accelerationEnemyMax - enemies.length;

  // Carregamento das nuvens
  let rCloud = 80;
  let xInitCloud = 200;
  let yInitCloud = height - 125;
  let nClouds = 4;
  for (i = 0; i < nClouds; i++) {
    let cloud = new Cloud(
      xInitCloud + i * rCloud + xInit * i * 2,
      yInitCloud,
      rCloud
    );
    clouds.push(cloud);
  }
}
