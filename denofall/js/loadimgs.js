function loadImagens() {
  // BackGround
  bgImg = loadImage("../assets/background.jpg");
  endGameImg = loadImage("../assets/endgame.png");

  // Componentes Genéricos
  sunImg = loadImage("../assets/sun.png");

  // Sprite e Json Deninho
  spriteSheetDeninho = loadImage("../assets/sprites/socket.png");
  spriteDataDeninho = loadJSON("../assets/sprites/socket.json");
  // spriteSheetDeninho = loadImage("../assets/sprites/deninho.png");
  // spriteDataDeninho = loadJSON("../assets/sprites/deninho.json");

  // Sprite e Json Rust
  spriteSheetRust = loadImage("../assets/sprites/rust.png");
  spriteDataRust = loadJSON("../assets/sprites/rust.json");

  // Sprite e Json PHP
  spriteSheetPhp = loadImage("../assets/sprites/php.png");
  spriteDataPhp = loadJSON("../assets/sprites/php.json");

  // Sprite e Json GO
  spriteSheetGo = loadImage("../assets/sprites/golang.png");
  spriteDataGo = loadJSON("../assets/sprites/golang.json");

  // Sprite e Json Python
  spriteSheetPython = loadImage("../assets/sprites/python.png");
  spriteDataPython = loadJSON("../assets/sprites/python.json");

  // Sprite e Json Java
  spriteSheetJava = loadImage("../assets/sprites/duke.png");
  spriteDataJava = loadJSON("../assets/sprites/duke.json");

  // Sprite e Json Rust
  spriteSheetNode = loadImage("../assets/sprites/module.png");
  spriteDataNode = loadJSON("../assets/sprites/module.json");
}
