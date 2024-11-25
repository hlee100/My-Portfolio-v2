function toggleMenu() {
    const navBox = document.getElementById("navBox");
    const hamburgerMenu = document.getElementById("hamburgerMenu");

    // Toggle the menu visibility
    navBox.classList.toggle("active");
    hamburgerMenu.classList.toggle("active");

    // Add/remove event listener for clicking outside
    if (navBox.classList.contains("active")) {
        document.addEventListener("click", closeOnClickOutside);
    } else {
        document.removeEventListener("click", closeOnClickOutside);
    }
}

function closeOnClickOutside(event) {
    const navBox = document.getElementById("navBox");
    const menuContainer = document.querySelector(".menu-container");

    // Check if the click was outside the navBox or the hamburger menu
    if (!navBox.contains(event.target) && !menuContainer.contains(event.target)) {
        // Add delay before removing the active class
        navBox.classList.remove("active");
        hamburgerMenu.classList.remove("active");

        // Wait for the opacity transition to complete
        setTimeout(() => {
            document.removeEventListener("click", closeOnClickOutside);
        }, 400); // Match the duration of the transition (400ms)
    }
}