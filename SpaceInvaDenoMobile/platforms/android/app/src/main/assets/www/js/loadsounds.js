let sndDenoDeath;
let sndDenoShoot;
let sndEnemiesKilled;
let sndEnemiesMove;
let sndNodeMove;

function loadSounds() {
  soundFormats("wav", "mp3");
  sndDenoDeath = loadSound("./assets/sounds/explosion");
  sndDenoShoot = loadSound("./assets/sounds/shoot");
  sndEnemiesKilled = loadSound("./assets/sounds/invaderkilled");
  sndEnemiesMove = loadSound("./assets/sounds/fastinvader1");
  sndNodeMove = loadSound("./assets/sounds/ufo_lowpitch");
}
