// Global
let fr = 30;

let accelerationMove = 30;
let accelerationShoot = 5;
let accelerationShootEnemy = 5;
let accelerationEnemyMax = 17;
let accelerationEnemy;
let accelerationNode = 2;
let yEnemyDown = 5;
let rEnemy;

let upToLvel = 1.05;

let deninho;
let enemies = [];
let clouds = [];

function loadSetup() {
  // Criando o Deninho
  deninho = new Deninho();

  // Criando o Enemies
  let EnemiesColumns = 4;
  rEnemy = width * 0.1;
  let xInit = (width - rEnemy * EnemiesColumns) * (1 / (EnemiesColumns + 1));
  let yInit = height * 0.2;
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
  let nClouds = 3;
  let rCloud = width * 0.15;
  let xInitCloud = (width - rCloud * nClouds) * (1 / (nClouds + 1));
  let yInitCloud = height * 0.85;
  for (i = 0; i < nClouds; i++) {
    let cloud = new Cloud(
      xInitCloud + i * rCloud + xInitCloud * i,
      yInitCloud,
      rCloud
    );
    clouds.push(cloud);
  }
}
