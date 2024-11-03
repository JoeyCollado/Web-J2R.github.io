
//
const navbar = document.getElementById('body1');
const products = document.getElementById('body2');
const footer = document.getElementById('body3');

const navbarButton = document.getElementById('topbtn');
const productsButton = document.getElementById('midbtn');
const footerButton = document.getElementById('downbtn');

// 
function smoothScroll(target) {
    const targetPosition = document.querySelector(target).getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition + startPosition;
    const duration = 500; 
    let start = null;

    const animation = currentTime => {
        if (start === null) start = currentTime;
        const timeElapsed = currentTime - start;
        const progress = Math.min(timeElapsed / duration, 1); // Calculate the progress
        window.scrollTo(0, startPosition + (distance - startPosition) * progress); // Scroll to the position

        if (timeElapsed < duration) requestAnimationFrame(animation); // Continue the animation
    };

    requestAnimationFrame(animation);
}

// Event listeners to scroll to the specific section when a button is clicked
navbarButton.addEventListener('click', () => smoothScroll('#body1'));
productsButton.addEventListener('click', () => smoothScroll('#body2'));
footerButton.addEventListener('click', () => smoothScroll('#body3'));
//


/*sidebar*/
const toggleSidebar = document.getElementById('toggleSidebar');
const sidebar = document.querySelector('.sidebar');
toggleSidebar.addEventListener('click', () => {
    sidebar.classList.toggle('expanded');
    toggleSidebar.classList.toggle('active'); // Rotate the icon on click
});


//image slider
document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling function
    function smoothScroll(target) {
        const targetElement = document.querySelector(target);
        const targetPosition = targetElement.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 500;
        let start = null;

        const animation = currentTime => {
            if (start === null) start = currentTime;
            const timeElapsed = currentTime - start;
            const progress = Math.min(timeElapsed / duration, 1);
            window.scrollTo(0, startPosition + distance * progress);

            if (timeElapsed < duration) requestAnimationFrame(animation);
        };

        requestAnimationFrame(animation);
    }

    // Button event listeners for scrolling
    document.getElementById('topbtn').addEventListener('click', () => smoothScroll('#body1'));
    document.getElementById('midbtn').addEventListener('click', () => smoothScroll('#body2'));
    document.getElementById('downbtn').addEventListener('click', () => smoothScroll('#body3'));

    // Sidebar toggle
    const toggleSidebar = document.getElementById('toggleSidebar');
    const sidebar = document.querySelector('.sidebar');
    if (toggleSidebar) {
        toggleSidebar.addEventListener('click', () => {
            sidebar.classList.toggle('expanded');
            toggleSidebar.classList.toggle('active');
        });
    }
});

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