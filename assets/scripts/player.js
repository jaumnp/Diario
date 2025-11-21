const Player = function () {
  let song = 0;

  const songs = [
    {
      title: "Lua Cheia",
      artist: "Armandinho",
      // path is relative to the HTML document (Diario/index.html),
      // so use the assets path from that document
      song: new Audio('assets/sounds/LuaCheia.mp3'),
    },
  ];

  const update = function (index) {
    document.querySelector(".nome-musica").innerText = songs[index].title;
    document.querySelector(".nome-cantor").innerText = songs[index].artist;
  }

  const playPause = function (id) {
    if (!document.getElementById("id").classList.contains("playing")) {
        document.getElementById("id").classList.add("playing");
        document.getElementById("id").src = "assets/images/pause.svg";
        songs[song].song.play();
    } else {
        document.getElementById("id").classList.remove("playing");
        document.getElementById("id").src = "assets/images/play.svg";
        songs[song].song.pause();
    }
  }

  const next = function () {
    playPause();

    song = song > song.length ? 0 : song++;
    update(song);
  }

  const pre = function () {
    playPause();

    song = song < 0 ? songs.length - 1 : song--;
    update(song);
  }

  return {playPause, next, pre};
};

export default Player;
