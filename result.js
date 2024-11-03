
//for numbers animation 


let numbers = document.querySelector('.numbers');
let numString = numbers.textContent;
let splitNum = numString.split("");


numbers.textContent = "";
for (let i=0; i<splitNum.length; i++){
    numbers.innerHTML += "<span>"+splitNum[i]+"</span>";
}

//music

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