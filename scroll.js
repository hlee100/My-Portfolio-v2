document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll('nav ul li button');
    const sections = document.querySelectorAll('section');
    let manualScroll = false;  // Flag to track manual scroll by click

    // Initial active state for the first button
    buttons[0].classList.add('active');
    buttons[0].style.transform = 'rotate(0deg)';

    // Intersection Observer options
    const observerOptions = {
        root: null,
        threshold: 0.8
    };

    // Intersection Observer to handle section visibility on scroll
    const observer = new IntersectionObserver((entries) => {
        if (manualScroll) return; // Skip if we're manually scrolling

        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const index = Array.from(sections).indexOf(entry.target);

                // Reset all buttons and rotate only the active one
                buttons.forEach(button => {
                    button.classList.remove('active');
                    button.style.transform = 'rotate(-45deg)';
                });

                buttons[index].classList.add('active');
                buttons[index].style.transform = 'rotate(0deg)';
            }
        });
    }, observerOptions);

    // Observe each section
    sections.forEach(section => observer.observe(section));

    // Disable and Enable Observer functions to temporarily disable button clicks
    function disableObserver() {
        buttons.forEach(button => button.disabled = true);
    }

    function enableObserver() {
        buttons.forEach(button => button.disabled = false);
    }

    // Smooth scroll on button click
    document.querySelectorAll('nav ul li a').forEach((anchor, index) => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            manualScroll = true;  // Set the flag to true to disable observer actions
            disableObserver();    // Temporarily disable button actions

            // Smooth scroll to the target section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest'
            });

            // Manually set rotation for clicked button
            buttons.forEach(button => {
                button.classList.remove('active');
                button.style.transform = 'rotate(-45deg)';
            });

            buttons[index].classList.add('active');
            buttons[index].style.transform = 'rotate(0deg)';

            // Re-enable the observer and button actions after the scroll ends
            setTimeout(() => {
                manualScroll = false;  // Re-enable observer actions
                enableObserver(); // Re-enable button actions
            }, 450); // Adjust timeout based on scroll duration
        });
    });
});
