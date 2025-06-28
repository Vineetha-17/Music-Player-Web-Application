    const songs = [
      {
        title: "Believer",
        artist: "Imagine Dragons",
        src: "Believer.mp3",
        cover: "Beliver.png",
        language: "English"
      },
      {
        title: "Die with a smile",
        artist: "Bruno Mars",
        src: "Die With A Smile - (Raag.Fm).mp3",
        cover: "Die with a smile.png",
        language: "English"
      },
      {
        title: "Lover",
        artist: "Taylor Swift",
        src: "Lover(PagalWorld).mp3",
        cover: "Lover.png",
        language: "English"
      },
      {
        title: "Moral-Of-The-Story",
        artist: "Ashe",
        src: "Moral-Of-The-Story.mp3",
        cover: "Moral of the story.png",
        language: "English"
      },
      {
        title: "Acoustic Breeze",
        artist: "Bensound",
        src: "https://www.bensound.com/bensound-music/bensound-acousticbreeze.mp3",
        cover: "https://www.bensound.com/bensound-img/acousticbreeze.jpg",
        language: "English"
      },
      {
        title: "Creative Minds",
        artist: "Bensound",
        src: "https://www.bensound.com/bensound-music/bensound-creativeminds.mp3",
        cover: "https://www.bensound.com/bensound-img/creativeminds.jpg",
        language: "English"
      },
      {
        title: "Energy",
        artist: "Bensound",
        src: "https://www.bensound.com/bensound-music/bensound-energy.mp3",
        cover: "https://www.bensound.com/bensound-img/energy.jpg",
        language: "English"
      },
      {
        title: "Once Again",
        artist: "Bensound",
        src: "https://www.bensound.com/bensound-music/bensound-onceagain.mp3",
        cover: "https://www.bensound.com/bensound-img/onceagain.jpg",
        language: "English"
      },
       {
        title: "Shankerdada M.B.B.S",
        artist: "Mani Sharma",
        src: "Shankerdada.mp3",
        cover: "shankerdada.png",
        language: "Telugu"
      },
      {
        title: "Hungry Cheeetah",
        artist: "Thaman.S",
        src: "Hungry Cheetah.mp3",
        cover: "hungry Cheetah.png",
        language: "Telugu"
      },
        {
        title: "Piliche",
        artist: " Manisarma",
        src: "Piliche.mp3",
        cover: "Piliche.png",
        language: "Telugu"
      },
      {
        title: "Naatu Naatu",
        artist: " M.M. Keeravani",
        src: "Naatu Naatu.mp3",
        cover: "Naatu Naatu.png",
        language: "Telugu"
      },
      {
        title: "Idhedho Bagundhe",
        artist: " Devi Sri Prasad",
        src: "Idhedho Bagundhe.mp3",
        cover: "mirchi.png",
        language: "Telugu"
      },
      {
        title: "Julayi",
        artist: "Yuvan Shankar Raja",
        src: "july.mp3",
        cover: "july.png",
        language: "Telugu"
      },
       {
        title: "Vaaste",
        artist: "Dhvani Bhanushali",
        src: "Vaaste.mp3",
        cover: "Vaaste.png",
        language: "Hindi"
      },
       {
        title: "What Jhumka",
        artist: "Amit Trivedi",
        src: "What Jhumka.mp3",
        cover: "what Jumka.png",
        language: "Hindi"
      },
       {
        title: "Dhol bhaje",
        artist: "Amit Trivedi",
        src: "Dhol Bhaje.mp3",
        cover: "dhol bhaje.png",
         language: "Hindi"
      },
       {
        title: "Kesariya",
        artist: "Arijit Singh",
        src: "Kesariya.mp3",
        cover: "Kesariya.png",
        language: "Hindi"
      }
    ];

    let current = 0;
    const titleEl = document.getElementById("song-title");
    const artistEl = document.getElementById("artist");
    const coverEl = document.getElementById("cover");
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("play-pause");
    const libraryDiv = document.getElementById("library");

    function loadSong(idx) {
      const s = songs[idx];
      titleEl.textContent = s.title;
      artistEl.textContent = s.artist;
      coverEl.src = s.cover;
      audio.src = s.src;
      audio.pause();
      playPauseBtn.textContent = "▶️ Play";
    }

    function displayLibrary(arr) {
      libraryDiv.innerHTML = "";
      arr.forEach(s => {
        const card = document.createElement("div");
        card.className = "song-card";
        card.innerHTML = `<img src="${s.cover}" alt="${s.title}"><div><strong>${s.title}</strong><br><small>${s.artist}</small></div>`;
        card.onclick = () => {
          current = songs.indexOf(s);
          loadSong(current);
          audio.play();
          playPauseBtn.textContent = "⏸ Pause";
        };
        libraryDiv.appendChild(card);
      });
    }

    function filterSongs(lang) {
      const arr = lang === "All" ? songs : songs.filter(s => s.language === lang);
      displayLibrary(arr);
    }

    document.getElementById("prev").onclick = () => {
      current = (current - 1 + songs.length) % songs.length;
      loadSong(current);
      audio.play();
      playPauseBtn.textContent = "⏸ Pause";
    };
    document.getElementById("next").onclick = () => {
      current = (current + 1) % songs.length;
      loadSong(current);
      audio.play();
      playPauseBtn.textContent = "⏸ Pause";
    };
    playPauseBtn.onclick = () => {
      if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸ Pause";
      } else {
        audio.pause();
        playPauseBtn.textContent = "▶️ Play";
      }
    };
    audio.onended = () => {
      current = (current + 1) % songs.length;
      loadSong(current);
      audio.play();
      playPauseBtn.textContent = "⏸ Pause";
    };

    loadSong(current);
    displayLibrary(songs);