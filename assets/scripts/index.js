import Player from "./player.js";

const musicPlayer = Player("play");

document.getElementById("next").addEventListener("click", () => {
  musicPlayer.next();
});

document.getElementById("play").addEventListener("click", () => {
  musicPlayer.playPause();
});

document.getElementById("pre").addEventListener("click", () => {
  musicPlayer.pre();
});
