// Toggle menu function
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

// Function to reset menu when the screen is resized
window.onresize = function () {
    var x = document.getElementById("myTopnav");
    if (window.innerWidth > 600) {
        x.className = "topnav";
        // Reset to normal menu when screen is big
    }
};

// Add hover effect using JavaScript for homeTitle h1
document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("title");
    
    title.addEventListener("mouseenter", function () {
        title.style.textShadow =
        "-1px 1px 1px #1d2b70, 1px 1px 1px #1d2b70, 1px -1px 1px #1d2b70, -1px -1px 1px #1d2b70, 2px 2px 1px #762851, 4px 4px 1px #d985fa, 6px 6px 1px #4ab5f8";
    });
    
    title.addEventListener("mouseleave", function () {
        title.style.textShadow = "0px 0px #303030";
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const gridLinks = document.querySelectorAll(".grid-container > a");
    
    gridLinks.forEach(link => {
        link.addEventListener("mouseenter", function () {
            link.style.opacity = "1";
            link.style.filter = "grayscale(0%)";
        });
        
        link.addEventListener("mouseleave", function () {
            link.style.opacity = "0.6";
            link.style.filter = "blur(1px) grayscale(50%)";
        });
    });
});