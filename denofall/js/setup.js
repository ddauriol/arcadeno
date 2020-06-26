let bgImg;

let sunImg;
let sun;

let deninho;
let spriteDataDeninho;
let spriteSheetDeninho;
let animationDeninho = [];

let enemies = [];

let spriteDataRust;
let spriteSheetRust;
let animationRust = [];

let spriteDataPhp;
let spriteSheetPhp;
let animationPhp = [];

let spriteDataGo;
let spriteSheetGo;
let animationGo = [];

let spriteDataPython;
let spriteSheetPython;
let animationPython = [];

let spriteDataJava;
let spriteSheetJava;
let animationJava = [];

let spriteDataNode;
let spriteSheetNode;
let animationNode = [];

let scale = 0.75;
function loadSetup() {
  // Definições da tela
  createCanvas(1366 * scale, 768 * scale);

  sun = new Generic(sunImg, width, -450, 0.02, 100);

  // Definições do Dedinho
  let framesDeninho = spriteDataDeninho.frames;
  for (let i = 0; i < framesDeninho.length; i++) {
    let pos = framesDeninho[i].position;
    let img = spriteSheetDeninho.get(pos.x, pos.y, pos.w, pos.h);
    animationDeninho.push(img);
  }
  let posInitX = 45;
  let posInitY = 5;
  deninho = new Deninho(animationDeninho, posInitX, posInitY);

  // Definições do Rust
  let framesRust = spriteDataRust.frames;
  for (let i = 0; i < framesRust.length; i++) {
    let pos = framesRust[i].position;
    let img = spriteSheetRust.get(pos.x, pos.y, pos.w, pos.h);
    animationRust.push(img);
  }

  // Definições do PHP
  let framesPhp = spriteDataPhp.frames;
  for (let i = 0; i < framesPhp.length; i++) {
    let pos = framesPhp[i].position;
    let img = spriteSheetPhp.get(pos.x, pos.y, pos.w, pos.h);
    animationPhp.push(img);
  }

  // Definições do GOlang
  let framesGo = spriteDataGo.frames;
  for (let i = 0; i < framesGo.length; i++) {
    let pos = framesGo[i].position;
    let img = spriteSheetGo.get(pos.x, pos.y, pos.w, pos.h);
    animationGo.push(img);
  }

  // Definições do Python
  let framesPython = spriteDataPython.frames;
  for (let i = 0; i < framesPython.length; i++) {
    let pos = framesPython[i].position;
    let img = spriteSheetPython.get(pos.x, pos.y, pos.w, pos.h);
    animationPython.push(img);
  }

  // Definições do Java
  let framesJava = spriteDataJava.frames;
  for (let i = framesJava.length - 1; i > 0; i = i - 1) {
    let pos = framesJava[i].position;
    let img = spriteSheetJava.get(pos.x, pos.y, pos.w, pos.h);
    animationJava.push(img);
  }

  // Definições do Python
  let framesNode = spriteDataNode.frames;
  for (let i = 0; i < framesNode.length; i++) {
    let pos = framesNode[i].position;
    let img = spriteSheetNode.get(pos.x, 490 * i, pos.w, pos.h);
    animationNode.push(img);
  }

  let numbersEnemies = 6;
  for (let i = 0; i < numbersEnemies; i = i + 6) {
    enemies[i] = new Enemie(
      animationRust,
      width,
      0,
      random(0.1, 0.3),
      50,
      false
    );
    enemies[i + 1] = new Enemie(
      animationPhp,
      width,
      0,
      random(0.1, 0.3),
      50,
      false
    );
    enemies[i + 2] = new Enemie(
      animationGo,
      width,
      0,
      random(0.1, 0.3),
      50,
      false
    );
    enemies[i + 3] = new Enemie(
      animationJava,
      width,
      0,
      random(0.1, 0.3),
      75,
      false
    );
    enemies[i + 4] = new Enemie(
      animationNode,
      width * 1.25,
      0,
      random(0.05, 0.075),
      50 * random(2, 10),
      true
    );
    enemies[i + 5] = new Enemie(
      animationPython,
      width,
      30,
      random(0.1, 0.3),
      100,
      false
    );
  }
}
