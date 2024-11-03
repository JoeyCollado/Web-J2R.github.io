//
document.addEventListener("DOMContentLoaded", function() {
    var musicToggle = document.getElementById("music-toggle");
    var backgroundMusic = document.getElementById("background-music");

    musicToggle.addEventListener("click", function() {
        if (backgroundMusic.paused) {
            backgroundMusic.play();
            musicToggle.classList.remove("music-muted");
        } else {
            backgroundMusic.pause();
            musicToggle.classList.add("music-muted");
        }
    });
});