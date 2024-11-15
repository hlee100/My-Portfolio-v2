document.addEventListener('DOMContentLoaded', () => {
    // Select all certificate image containers and modal elements
    const certImages = document.querySelectorAll('.cert-image');
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = 0;
    modal.style.left = 0;
    modal.style.width = '100%';
    modal.style.height = '100%';
    modal.style.background = 'rgba(0, 0, 0, 0.8)';
    modal.style.display = 'none'; // Initially hidden
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = 1000;
    
    const img = document.createElement('img');
    img.style.maxWidth = '80%';
    img.style.maxHeight = '80%';
    img.style.borderRadius = '8px';
    modal.appendChild(img);
    
    document.body.appendChild(modal);

    let isModalOpen = false; // Track if the modal is open

    // Handle image clicks to open modal
    certImages.forEach(imageContainer => {
        imageContainer.addEventListener('click', (e) => {
            // Prevent any default behavior
            e.preventDefault();

            // Get the image source from the clicked container
            const imageSrc = imageContainer.querySelector('img').src;
            img.src = imageSrc; // Set the modal image source
    
            // Show the modal with animation if it's not already open
            if (!isModalOpen) {
                modal.style.display = 'flex';
                modal.classList.remove('fade-out'); // Remove any previous fade-out class
                modal.classList.add('fade-in'); // Add fade-in animation
                isModalOpen = true; // Set modal as open
            }
        });
    });

    // Function to close the modal
    const closeModal = () => {
        modal.classList.remove('fade-in'); // Remove fade-in class
        modal.classList.add('fade-out'); // Add fade-out animation
        
        // Wait for the fade-out animation to finish before hiding the modal
        modal.addEventListener('animationend', () => {
            modal.style.display = 'none'; // Hide modal after animation
            isModalOpen = false; // Set modal as closed
        }, { once: true }); // Ensure the event listener is run only once
    };

    // Close modal on click anywhere (background or image)
    modal.addEventListener('click', (e) => {
        // Only close the modal if it's open and clicked on the background (not the image)
        if (e.target === modal && isModalOpen) {
            closeModal();
        }
    });

    // Prevent closing the modal when clicking the image itself
    img.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent triggering the modal click event
    });

    // Optional fade-in and fade-out animation styles
    const style = document.createElement('style');
    style.innerHTML = `
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @keyframes fade-out {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }

    .fade-in {
        animation: fade-in 0.3s ease-out;
    }

    .fade-out {
        animation: fade-out 0.3s ease-out;
    }
    `;
    document.head.appendChild(style);
});
