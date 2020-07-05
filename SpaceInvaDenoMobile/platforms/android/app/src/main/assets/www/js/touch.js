let btnPause;
let btnReload;
let btnLeft;
let btnRight;
let btnShoot;

function loadButtons() {
  let bntSize = width * 0.075;
  let btnSpace = width * 0.1;

  btnPause = createImg("./assets/img/TouchPause.png", "Pause");
  btnPause.size(bntSize, bntSize);
  btnPause.position(width * 0.075, height * 0.025);
  btnPause.mousePressed(gamePause);

  btnReload = createImg("./assets/img/TouchReload.png", "Reload");
  btnReload.size(bntSize, bntSize);
  btnReload.position(width * 0.075 + bntSize + btnSpace, height * 0.025);
  btnReload.mousePressed(gameReload);

  bntSize = width * 0.2;
  btnLeft = createImg("./assets/img/TouchLeft.png", "Left");
  btnLeft.size(bntSize, bntSize);
  btnLeft.position(width * 0.075, height * 0.99 - bntSize);
  btnLeft.mousePressed(moveDeninhoLeft);

  btnRight = createImg("./assets/img/TouchRigth.png", "Rigth");
  btnRight.size(bntSize, bntSize);
  btnRight.position(
    width * 0.075 + bntSize + btnSpace,
    height * 0.99 - bntSize
  );
  btnRight.mousePressed(moveDeninhoRigth);

  btnShoot = createImg("./assets/img/TouchShoot.png", "Shoot");
  btnShoot.size(bntSize, bntSize);
  btnShoot.position(width - bntSize, height * 0.99 - bntSize);
  btnShoot.mousePressed(shoot);
}
