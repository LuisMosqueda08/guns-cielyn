window.addEventListener("DOMContentLoaded", () => {

  const music = document.getElementById("bg-music");
  const btn = document.querySelector(".music-control");
  const icon = document.querySelector(".music-control i");

  if (!music || !btn || !icon) {
    console.log("Elementos de audio no encontrados");
    return;
  }

  music.volume = 0.08;
  music.preload = "auto";

  function startMusic() {
  music.play().catch(() => {});
  window.removeEventListener("click", startMusic);
  window.removeEventListener("keydown", startMusic);
}

// se desbloquea apenas el usuario interactúa
window.addEventListener("click", startMusic);
window.addEventListener("keydown", startMusic);

  function updateUI() {
    if (music.paused) {
      icon.classList.replace("fa-pause", "fa-play");
    } else {
      icon.classList.replace("fa-play", "fa-pause");
    }
  }

  btn.addEventListener("click", async () => {
    try {
      if (music.paused) {
        await music.play();
      } else {
        music.pause();
      }
      updateUI();
    } catch (e) {
      console.log("Error audio:", e);
    }
  });

  btn.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      btn.click();
    }
  });

  // 🔥 desbloqueo por interacción real (OBLIGATORIO en Chrome)
  const unlock = () => {
    music.play()
      .then(() => updateUI())
      .catch(() => {});
    window.removeEventListener("click", unlock);
  };

  window.addEventListener("click", unlock);
});
