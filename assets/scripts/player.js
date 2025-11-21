const Player = function (id) {
  const button = document.getElementById(id);
  let song = 0;
  let audio = new Audio();

  const songs = [
    {
      title: "Lua Cheia",
      artist: "Armandinho",
      path: 'assets/sounds/LuaCheia.mp3',
    },
    {
      title: "Tocaia",
      artist: "Yago Oproprio",
      path: 'assets/sounds/Tocaia.mp3',
    },
    {
      title: "Hilipa",
      artist: "Yago Oproprio",
      path: 'assets/sounds/Helipa.mp3',
    },
  ];

  const update = function (index, isPlayng) {
    if (isPlayng) {
        button.children[0].src = "assets/images/pause.svg";
    } else {
        button.children[0].src = "assets/images/play.svg";
    }
    document.querySelector(".nome-musica").innerText = songs[index].title;
    document.querySelector(".nome-cantor").innerText = songs[index].artist;
  }

  const playPause = function () {
    let isPlayng = !button.classList.contains("playing");

    audio.src = songs[song].path;

    if (isPlayng) {
        button.classList.add("playing");
        audio.play();
        update(song, isPlayng);
    } else {
        button.classList.remove("playing");
        audio.pause();
        update(song, isPlayng)
    }
  }

  const next = function () {
    audio.pause();
    
    song >= songs.length - 1 ? song = 0 : song++;
    console.log(song);
    update(song);
    playPause();
  }

  const pre = function () {
    audio.pause();

    song <= 0 ? song = songs.length - 1 : song--;
    console.log(song);
    update(song);
    playPause();
  }

  return {playPause, next, pre};
};

export default Player;
