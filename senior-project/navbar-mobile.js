function toggleMenu() {
    const navBox = document.getElementById("navBox");
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    if (navBox.classList.contains("active")) {
        // Start fade-out transition
        navBox.classList.remove("active");

        // Delay hiding visibility to allow fade-out animation
        setTimeout(() => {
            navBox.style.visibility = "hidden";
        }, 400); // Matches the CSS transition duration
    } else {
        // Make the nav visible and start fade-in
        navBox.style.visibility = "visible";
        navBox.classList.add("active");
    }

    // Toggle hamburger menu state
    hamburgerMenu.classList.toggle("active");
}
