let sndNo;
let sndPsychofinal;
let sndError;
let sndYesSir;

function loadSounds() {
  soundFormats("mp3", "ogg");
  sndNo = loadSound("assets/sounds/no");
  sndYesSir = loadSound("assets/sounds/yes-sir");
  sndPsychofinal = loadSound("assets/sounds/psychofinal");
  sndError = loadSound("assets/sounds/erro");
}
