function denoShoot() {
  // Loop bugsShoots = Criar os tiros
  for (var i = 0; i < bugShoots.length; i++) {
    bugShoots[i].show();
    bugShoots[i].move();

    // Verifica se o tiro chegou no final da tela
    if (bugShoots[i].y < 0) {
      bugShoots[i].lost();
    }

    // Verifica se o tiro acertou um inimigo
    for (var j = 0; j < enemies.length; j++) {
      if (bugShoots[i].hits(enemies[j])) {
        enemies[j].down();
        bugShoots[i].lost();
        sndEnemiesKilled.play();
      }
    }

    // // Verifica se o tiro acertou um Nuvem #TODO Ajusta posiçao.
    // for (var k = 0; k < clouds.length; k++) {
    //   if (bugShoots[i].hits(clouds[k])) {
    //     bugShoots[i].lost();
    //   }
    // }

    // Verifica se o tiro acertou um node
    for (var k = 0; k < nodeBoss.length; k++) {
      if (bugShoots[i].hits(nodeBoss[k])) {
        bugShoots[i].lost();
        nodeBoss[k].down();
      }
    }
  }

  // Loop bugsShoots = Deleta os tiros
  for (var i = bugShoots.length - 1; i >= 0; i--) {
    if (bugShoots[i].toDelete == true) {
      bugShoots.splice(i, 1);
    }
  }

  // Loop bugsShoots = Deleta os tiros
  for (var i = enemies.length - 1; i >= 0; i--) {
    if (enemies[i].toDelete == true) {
      score = score + enemies[i].points;
      enemies.splice(i, 1);
    }
  }
}

function enemiesActions() {
  // Loop Enemies
  let xMax = 0;
  let xMin = width;
  let yMax = 0;
  let yMin = height;
  for (var i = 0; i < enemies.length; i++) {
    enemies[i].show();
    enemies[i].move();
    if (enemies[i].x > xMax) {
      xMax = enemies[i].x;
    }
    if (enemies[i].x < xMin) {
      xMin = enemies[i].x;
    }
    if (enemies[i].y > yMax) {
      yMax = enemies[i].y;
    }
    if (enemies[i].y < yMin) {
      yMin = enemies[i].y;
    }
  }

  // Enemeis tocaram a lateral da tela = Mudança de sentido e diminui o Y
  if (xMax >= width - 80 || xMin <= 0) {
    accelerationEnemy = accelerationEnemy * -1;
    for (var i = 0; i < enemies.length; i++) {
      enemies[i].moveY();
      sndEnemiesMove.play();
    }
  }

  // Enemeis chegaram no final da tela.
  if (yMax >= height - 80 || yMin <= 0) {
    puaseGame = true;
  }

  // Enemies Shoot
  let newShoot = random(1, 100);
  if (newShoot < 5) {
    let shoot = new EnemiesShoot(random(xMin, xMax), yMax);
    enemiesShoots.push(shoot);
  }

  if (enemies.length > 0) {
    for (var i = 0; i < enemiesShoots.length; i++) {
      enemiesShoots[i].show();
      enemiesShoots[i].move();

      // Verifica se o tiro chegou no final da tela
      if (enemiesShoots[i].y > height) {
        enemiesShoots[i].lost();
      }

      // Verifica se o tiro acertou a Nuvem
      for (var j = 0; j < clouds.length; j++) {
        if (enemiesShoots[i].hits(clouds[j])) {
          clouds[j].setLife();
          enemiesShoots[i].lost();
        }
      }

      // Verifica se o tiro acertou o Deninho
      if (enemiesShoots[i].hits(deninho)) {
        enemiesShoots[i].lost();
        deninho.setLife();
        lifes = lifes - 1;
        sndDenoDeath.play();
      }
    }
  }

  // Loop enemiesShoots = Deleta os tiros
  for (var i = enemiesShoots.length - 1; i >= 0; i--) {
    if (enemiesShoots[i].toDelete == true) {
      enemiesShoots.splice(i, 1);
    }
  }

  // Loop clouds = Deleta os clouds
  for (var i = clouds.length - 1; i >= 0; i--) {
    if (clouds[i].toDelete == true) {
      clouds.splice(i, 1);
    }
  }
}

function bossActions() {
  for (var i = 0; i < nodeBoss.length; i++) {
    nodeBoss[i].show();
    nodeBoss[i].move();
    if (nodeBoss[i].x > width) {
      nodeBoss[i].down();
      sndNodeMove.stop();
    }
  }

  // Remove nodeBoss
  for (var i = nodeBoss.length - 1; i >= 0; i--) {
    if (nodeBoss[i].toDelete == true) {
      score = score + nodeBoss[i].points;
      nodeBoss.splice(i, 1);
    }
  }
}
