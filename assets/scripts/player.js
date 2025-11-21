const Player = function (id) {
    const button = document.getElementById(id);
    let song = 0;
    let audio = new Audio();

    // Usando const para o array de músicas
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

    // Usando Arrow Function e Desestruturação para um código mais conciso
    const update = (index, isPlaying) => {
        // Desestruturação: extrai title e artist do objeto songs[index]
        const { title, artist } = songs[index]; 
        
        if (isPlaying) {
            button.children[0].src = "assets/images/pause.svg";
        } else {
            button.children[0].src = "assets/images/play.svg";
        }

        document.querySelector(".nome-musica").innerText = title;
        document.querySelector(".nome-cantor").innerText = artist;
    }

    // Usando Arrow Function
    const playPause = () => {
        let isPlaying = !button.classList.contains("playing");

        // Sempre define o src antes de tocar/pausar para garantir
        // que a música atual seja carregada.
        audio.src = songs[song].path;

        if (isPlaying) {
            button.classList.add("playing");
            audio.play();
            update(song, isPlaying);
        } else {
            button.classList.remove("playing");
            audio.pause();
            update(song, isPlaying);
        }
    }

    // Usando Arrow Function e lógica de Módulo (%) para loop mais idiomático
    const next = () => {
        audio.pause();
        
        // Módulo: (0 + 1) % 3 = 1; (2 + 1) % 3 = 0 (volta ao início)
        song = (song + 1) % songs.length;
        
        // Remove 'playing' para forçar a nova música a começar (estado consistente)
        button.classList.remove("playing");

        // Define o caminho e começa a tocar
        audio.src = songs[song].path;

        update(song, false);
    }

    // Usando Arrow Function
    const pre = () => {
        audio.pause();

        // Lógica ternária clara para voltar ao final do array
        song = song <= 0 ? songs.length - 1 : song - 1;
        
        // Remove 'playing' para forçar a nova música a começar
        button.classList.remove("playing");

        // Define o caminho e começa a tocar
        audio.src = songs[song].path;

        update(song, false);
    }

    return { playPause, next, pre };
};

export default Player;