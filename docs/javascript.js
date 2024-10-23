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